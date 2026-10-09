# HTC Training and Business

Repositório oficial do site em Next.js. A versão anterior em Vite foi substituída; seu histórico permanece disponível no Git.

## Configuração local

Copie `.env.example` para `.env.local` e preencha as credenciais SMTP. O formulário de contato e as landing pages usam `/api/contact`; nenhuma credencial deve ser exposta no navegador.

Use Node.js 24 LTS (a versão também está em `.nvmrc`). Configure `REDIS_URL` para um Redis compartilhado por todas as instâncias. O serviço precisa permitir `EVAL`, `GET`, `INCR`, `PTTL` e `PEXPIRE`; prefira `rediss://` para conexões fora de uma rede privada. Não publique a porta do Redis na internet.

A API limita cada e-mail a 5 tentativas e o total a 100 tentativas por janela de 15 minutos. Os identificadores são armazenados como hashes com expiração. Sem Redis disponível, contatos válidos recebem HTTP 503, sem envio de e-mail. Não existe fallback em memória que permita contornar o limite distribuído.

Por padrão, cabeçalhos de IP são ignorados. Para adicionar o limite por IP, configure `CONTACT_PROXY_IP_HEADER` com `x-real-ip`, `x-forwarded-for`, `cf-connecting-ip` ou `x-vercel-forwarded-for`, somente se o proxy confiável sobrescrever esse cabeçalho com um único IP válido e o acesso direto ao servidor estiver bloqueado. Cabeçalhos ausentes, listas de IPs ou configurações inválidas impedem o envio com HTTP 503.

## Produção

O projeto gera uma aplicação Next.js standalone. Para garantir que `public` e `.next/static` acompanhem o servidor, use o `Dockerfile` incluído:

```bash
docker build -t htc-next .
docker run --env-file .env.local -p 3000:3000 htc-next
```

No Docker, `localhost` se refere ao próprio contêiner. Ajuste `REDIS_URL` para o hostname do Redis na rede privada ou para o endpoint seguro do serviço compartilhado antes de executar a aplicação.

Antes de publicar, execute `npm run typecheck`, `npm run test:security`, `npm audit --omit=dev`, `npm run build` e, com o servidor ativo, `npm run test:smoke`. Para testar o limitador contra Redis real, execute `npm run test:security` com `TEST_REDIS_URL` apontando para um banco de testes descartável; o teste cria e remove apenas suas próprias chaves temporárias.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter and Manrope.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy na Vercel

Importe `gabrielsteglich/htc-training-business`, usando a raiz do repositório e a branch `main` para produção. O arquivo `vercel.json` fixa o preset Next.js, a instalação pelo lockfile e as verificações antes do build. Use Node.js 24.x e deixe o diretório de saída no padrão do Next.js; não configure `dist` nem rewrites de SPA.

Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO`, `REDIS_URL` e `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente do projeto. Não copie os valores ilustrativos de `.env.example` para produção. O Redis deve fornecer conexão TCP segura `rediss://`, não somente uma API REST. Mantenha `CONTACT_PROXY_IP_HEADER` sem configurar até validar a garantia do cabeçalho no proxy.

Sem Redis e SMTP válidos, o formulário não estará operacional. O teste de integração com Redis real continua no Action de qualidade; no build da Vercel, ele é ignorado quando `TEST_REDIS_URL` não está configurado.

Para o site comercial da HTC, use uma equipe Pro ou Enterprise conforme as regras de uso da Vercel. Publique e valide primeiro no endereço `vercel.app`; altere o domínio e o DNS somente após a validação do site e do envio de contato.
