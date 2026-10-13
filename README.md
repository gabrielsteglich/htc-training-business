# HTC Training and Business

Repositório oficial do site da HTC Training and Business, desenvolvido com Next.js, React, TypeScript e Tailwind CSS. O site oferece conteúdo em português, inglês e espanhol.

## Configuração local

Instale as dependências usando o lockfile do projeto e inicie o servidor de desenvolvimento:

```bash
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). As alterações no código são refletidas automaticamente durante o desenvolvimento.

Copie `.env.example` para `.env.local` e preencha as credenciais SMTP. O formulário de contato e as landing pages usam `/api/contact`; nenhuma credencial deve ser exposta no navegador.

Use Node.js 24 LTS (a versão também está em `.nvmrc`). Configure `REDIS_URL` para um Redis compartilhado por todas as instâncias. O serviço precisa permitir `EVAL`, `GET`, `INCR`, `PTTL` e `PEXPIRE`; prefira `rediss://` para conexões fora de uma rede privada. Não publique a porta do Redis na internet.

A API limita cada e-mail a 5 tentativas e o total a 100 tentativas por janela de 15 minutos. Os identificadores são armazenados como hashes com expiração. Sem Redis disponível, contatos válidos recebem HTTP 503, sem envio de e-mail. Não existe fallback em memória que permita contornar o limite distribuído.

Por padrão, cabeçalhos de IP são ignorados. Para adicionar o limite por IP, configure `CONTACT_PROXY_IP_HEADER` com `x-real-ip`, `x-forwarded-for`, `cf-connecting-ip` ou `x-vercel-forwarded-for`, somente se o proxy confiável sobrescrever esse cabeçalho com um único IP válido e o acesso direto ao servidor estiver bloqueado. Cabeçalhos ausentes, listas de IPs ou configurações inválidas impedem o envio com HTTP 503.

## Produção

O projeto gera uma aplicação Next.js standalone. Para garantir que `public` e `.next/static` acompanhem o servidor, use o `Dockerfile` incluído:

```bash
docker build -t htc-training-business .
docker run --env-file .env.local -p 3000:3000 htc-training-business
```

No Docker, `localhost` se refere ao próprio contêiner. Ajuste `REDIS_URL` para o hostname do Redis na rede privada ou para o endpoint seguro do serviço compartilhado antes de executar a aplicação.

Antes de publicar, execute `npm run typecheck`, `npm run test:i18n`, `npm run test:security`, `npm audit --omit=dev`, `npm run build` e, com o servidor ativo, `npm run test:smoke`. Para testar o limitador contra Redis real, execute `npm run test:security` com `TEST_REDIS_URL` apontando para um banco de testes descartável; o teste cria e remove apenas suas próprias chaves temporárias.

## Estrutura do projeto

- `src/app`: páginas, layouts e rota `/api/contact`. A home usa `src/app/page.tsx` e `src/app/HomeClient.tsx`.
- `src/components`: componentes compartilhados, incluindo navegação e seletor de idioma.
- `src/constants.ts` e `src/content/es.ts`: conteúdo dos três idiomas.
- `src/lib`: configuração de idioma, envio de contato e proteção contra abuso.
- `public/images`: imagens do site, incluindo o hero da home.
- `scripts`: testes de idiomas, segurança e navegação.
- `.github/workflows/quality.yml`: verificações automatizadas de qualidade, sem publicação do site.

As fontes Inter e Manrope são carregadas por `next/font` em `src/app/layout.tsx`. Preserve UTF-8 e a acentuação ao editar os textos.

## Ambiente de testes na Vercel

Importe `gabrielsteglich/htc-training-business`, usando a raiz do repositório e a branch `main` para o ambiente de testes. O arquivo `vercel.json` fixa o preset Next.js, a instalação pelo lockfile e as verificações antes do build. Use Node.js 24.x e deixe o diretório de saída no padrão do Next.js; não configure `dist` nem rewrites de SPA.

Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO`, `REDIS_URL` e `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente do projeto. Não copie os valores ilustrativos de `.env.example` para produção. O Redis deve fornecer conexão TCP segura `rediss://`, não somente uma API REST. Mantenha `CONTACT_PROXY_IP_HEADER` sem configurar até validar a garantia do cabeçalho no proxy.

Sem Redis e SMTP válidos, o formulário não estará operacional. O teste de integração com Redis real continua no Action de qualidade; no build da Vercel, ele é ignorado quando `TEST_REDIS_URL` não está configurado.

A Vercel é utilizada apenas para testes deste projeto, não como hospedagem do lançamento. A implantação final deve seguir a configuração de produção acima; altere o domínio e o DNS somente após validar o site e o envio de contato no ambiente definitivo.
