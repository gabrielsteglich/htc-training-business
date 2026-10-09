import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { escapeHtml, parseContactPayload, singleLine } from "@/lib/contact-server";
import { ContactBodyError, readContactBody } from "@/lib/contact-security";
import { checkContactRateLimit } from "@/lib/contact-rate-limit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    try {
        let requestBody: unknown;
        try {
            requestBody = await readContactBody(request);
        } catch (error) {
            return NextResponse.json(
                { success: false, error: error instanceof ContactBodyError
                    ? error.message : "Corpo da solicitação inválido." },
                { status: error instanceof ContactBodyError ? error.status : 400 },
            );
        }

        const parsed = parseContactPayload(requestBody);
        if (!parsed.success) {
            return NextResponse.json(
                { success: false, error: parsed.error },
                { status: 400 },
            );
        }

        const { name, email, phone, company, subject, message, source, audienceSize } = parsed.data;
        try {
            const limit = await checkContactRateLimit(email, request.headers);
            if (!limit.allowed) {
                return NextResponse.json(
                    { success: false, error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
                    { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
                );
            }
        } catch {
            console.error("Contact rate limit service unavailable");
            return NextResponse.json(
                { success: false, error: "Serviço temporariamente indisponível. Tente novamente mais tarde." },
                { status: 503, headers: { "Retry-After": "60" } },
            );
        }

        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_SECURE, CONTACT_TO } = process.env;

        if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !CONTACT_TO) {
            console.error("Missing SMTP environment variables");
            return NextResponse.json(
                { success: false, error: "Configuração de e-mail incompleta no servidor." },
                { status: 500 },
            );
        }

        const smtpPort = Number(SMTP_PORT || 465);
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: smtpPort,
            secure: SMTP_SECURE ? SMTP_SECURE === "true" : smtpPort === 465,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const safeSubject = singleLine(subject || "Contato");
        const safeMessageHtml = escapeHtml(message).replace(/\r?\n/g, "<br>");

        const mailOptions = {
            from: SMTP_FROM,
            to: CONTACT_TO,
            replyTo: email,
            subject: `[HTC Website] ${safeSubject}`,
            text: [
                `Origem: ${source || "Site HTC"}`,
                `Nome: ${name}`,
                `E-mail: ${email}`,
                `Telefone: ${phone || "Não informado"}`,
                `Empresa: ${company || "Não informada"}`,
                `Quantidade: ${audienceSize || "Não informada"}`,
                `Assunto: ${safeSubject}`,
                "",
                message,
            ].join("\n"),
            html: `
        <h2>Nova mensagem do site HTC</h2>
        <p><strong>Origem:</strong> ${escapeHtml(source || "Site HTC")}</p>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(phone || "Não informado")}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company || "Não informada")}</p>
        <p><strong>Quantidade:</strong> ${escapeHtml(audienceSize || "Não informada")}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(safeSubject)}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${safeMessageHtml}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: "Mensagem enviada com sucesso!" },
            { status: 200 },
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, error: "Erro ao enviar mensagem. Tente novamente mais tarde." },
            { status: 500 },
        );
    }
}
