# Nascimento Instalações

Landing page de Isaias Nascimento, eletricista em Bauru e região. Site estático com React, TypeScript, Vite e Tailwind CSS. Não precisa de servidor de aplicação nem banco de dados.

## Desenvolvimento

Use Node.js 22 e npm:

```bash
npm ci
npm run dev
```

Abra o endereço informado no terminal (normalmente http://localhost:8080).

## Verificações e publicação

```bash
npm run typecheck
npm run lint
npm run build
npm run check:seo
```

O build gera a pasta `dist/`, com o conteúdo pré-renderizado, dados estruturados do negócio, sitemap, robots.txt, página 404 e regras de redirecionamento. Os botões, formulário opcional e galeria continuam funcionando com React após a hidratação. Nenhum serviço Node precisa rodar na hospedagem.

Para conferir o resultado local:

```bash
npm run preview
```

Siga [o guia da Cloudflare Pages](DEPLOY_CLOUDFLARE.md) para publicar e configurar os domínios no Registro.br.

## Onde editar

| Informação | Arquivo |
| --- | --- |
| Telefone, WhatsApp, e-mail e Instagram | `src/lib/contact.ts` |
| Apresentação inicial | `src/components/Hero.tsx` |
| História de Isaias | `src/components/About.tsx` |
| Cartões de serviços | `src/components/Services.tsx` |
| Fotos e descrições da galeria | `src/components/ServiceCarousel.tsx` e `src/assets/` |
| Diferenciais e informações de atendimento | `src/components/Differentials.tsx` |
| Título, descrição e domínio principal | `index.html` |
| Dados estruturados e geração do sitemap | `scripts/build.mjs` |
| Redirecionamentos dos domínios | `public/_redirects` |

As imagens atuais podem ser substituídas posteriormente. Antes de divulgar atendimento 24h, confirme a disponibilidade com Isaias. Os horários e as cidades adicionais ainda não foram incluídos nos dados estruturados.

O projeto usa somente os componentes de interface necessários à página. npm é o gerenciador de pacotes; `package-lock.json` deve acompanhar mudanças de dependências. `node_modules/`, `dist/`, pacotes de upload e configurações pessoais não entram no Git.
