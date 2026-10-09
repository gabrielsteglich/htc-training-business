import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://htc-brasil.com.br";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/cardapio"],
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
