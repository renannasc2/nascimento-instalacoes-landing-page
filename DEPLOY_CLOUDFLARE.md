# Publicar Nascimento Instalações na Cloudflare Pages

Domínio principal: https://nascimentoinstalacoes.com.br/
Domínio alternativo: eletricistabauru24horas.com.br, com redirecionamento permanente ao principal.

## Preparar os arquivos

Use Node.js 22 e execute na pasta do projeto:

```bash
npm ci
npm run build
npm run check:seo
```

A pasta `dist/` contém tudo que será publicado, incluindo o HTML com os textos já renderizados, dados estruturados, sitemap, robots.txt, redirecionamentos e página 404. Nenhum servidor Node ou banco precisa funcionar na hospedagem. `dist-ssr/` é temporária e removida pelo build.

Para visualizar localmente depois do build:

```bash
npm run preview
```

Abra o endereço informado no terminal. O modo `npm run dev` continua disponível para editar o projeto.

## Opção A: upload manual

1. Na Cloudflare, abra Workers & Pages, crie um projeto Pages e escolha Direct Upload.
2. Envie a pasta `dist/` completa, incluindo `_headers` e `_redirects`.
3. Verifique o endereço temporário `*.pages.dev` antes de conectar os domínios.
4. A cada alteração, gere `dist/` novamente e faça um novo upload no mesmo projeto.

Projetos criados com Direct Upload não podem depois mudar para integração Git no mesmo projeto. Se desejar publicação automática a cada atualização, prefira a opção B desde o início.

## Opção B: publicação automática com Git

1. Coloque o código em um repositório no GitHub ou GitLab.
2. Em Workers & Pages, crie um projeto Pages e conecte esse repositório.
3. Selecione a branch que contém o site e use estas configurações:

| Campo | Valor |
| --- | --- |
| Build command | `npm run build && npm run check:seo` |
| Build output directory | `dist` |
| Root directory | Raiz deste projeto |
| Environment variable | `NODE_VERSION=22` |

Não configure Functions ou Workers: o site é estático.

## Registro.br e os quatro endereços

1. Adicione os dois domínios como zonas DNS na Cloudflare, no plano gratuito.
2. A Cloudflare informará servidores DNS para cada zona. No Registro.br, abra cada domínio e substitua os servidores DNS pelos correspondentes. O registro e a renovação permanecem no Registro.br.
3. Se houver e-mail ou outros serviços nesses domínios, confira os registros DNS existentes antes da troca e preserve os necessários. O Hotmail divulgado no site não depende desses domínios.
4. No projeto Pages, em Custom domains, cadastre os quatro endereços:
   - `nascimentoinstalacoes.com.br`
   - `www.nascimentoinstalacoes.com.br`
   - `eletricistabauru24horas.com.br`
   - `www.eletricistabauru24horas.com.br`
5. Siga a configuração de DNS apresentada pelo Pages e aguarde o estado ativo e o certificado HTTPS de cada endereço. Cadastre os domínios no Pages antes de apontar CNAMEs.
6. `_redirects` já direciona os três endereços alternativos ao principal, com status 301 e preservando o caminho. A configuração só entra em vigor quando esses domínios estiverem conectados ao projeto.

## Conferir a publicação

- O domínio principal abre com HTTPS e os textos aparecem mesmo sem JavaScript.
- Ligações, WhatsApp, Instagram e e-mail abrem os destinos corretos.
- Os três domínios alternativos redirecionam ao principal.
- `/sitemap.xml` e `/robots.txt` estão acessíveis.
- `/pagina-inexistente` retorna HTTP 404 e mostra a mensagem em português; não configure fallback global `/* /index.html 200`.
- Confira celular e desktop e rode PageSpeed Insights no domínio publicado. Build aprovado não mede Core Web Vitals.

## Google Search Console

1. Crie uma propriedade do tipo Domínio para `nascimentoinstalacoes.com.br` em https://search.google.com/search-console/.
2. Copie o TXT de verificação informado pelo Google e adicione ao DNS da Cloudflare.
3. Após verificar a propriedade, envie `https://nascimentoinstalacoes.com.br/sitemap.xml`.
4. Inspecione a URL principal e solicite a indexação; acompanhe o processamento no painel. Isso não garante prazo ou posição nas buscas.
5. Valide os dados estruturados em https://search.google.com/test/rich-results e https://validator.schema.org/.

O schema usa `Electrician`, com nome, telefone, e-mail, Instagram e Bauru como área atendida. Não inclui endereço de rua, avaliações ou horários não confirmados. O Google exige endereço para a elegibilidade de resultados enriquecidos de LocalBusiness; o schema atual não deve ser apresentado como garantia dessa elegibilidade. Não divulgue um endereço residencial apenas para preencher esse requisito.

## Fotos e informações pendentes

- Substituir as imagens atuais da galeria pelas fotos reais, com autorização de uso e descrições do trabalho.
- Confirmar atendimento 24h, incluindo fins de semana e feriados. Essa informação já consta no texto existente, mas não foi incluída nos dados estruturados.
- Confirmar cidades adicionais atendidas antes de incluí-las no conteúdo e no schema.
- Criar ou atualizar o Perfil da Empresa no Google com os mesmos dados e o site principal, e obter avaliações reais de clientes.

## Referências oficiais

- React no Pages: https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/
- Upload manual: https://developers.cloudflare.com/pages/get-started/direct-upload/
- Domínios: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Redirecionamentos: https://developers.cloudflare.com/pages/configuration/redirects/
- Página 404: https://developers.cloudflare.com/pages/configuration/serving-pages/
- Dados de empresas locais: https://developers.google.com/search/docs/appearance/structured-data/local-business
