# Contexto do Projeto - Landing Page Nascimento Instalações

## 📋 Visão Geral
Landing page para empresa de instalações elétricas (Nascimento Instalações), especializada em serviços residenciais, prediais e comerciais. Localizada em Bauru/SP.

## 🛠️ Stack Tecnológica
- **Framework**: React 18.3.1 com TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI)
- **Roteamento**: React Router DOM 6.30.1
- **Icons**: Lucide React 0.462.0
- **Gerenciamento de Estado**: TanStack Query 5.83.0

## 📁 Estrutura do Projeto

### Componentes Principais
- `Header.tsx` - Navegação fixa no topo (Sobre, Serviços, Orçamento)
- `Hero.tsx` - Seção hero com CTA principal
- `Services.tsx` - Seção #servicos com cards de serviços (RESOLVIDO ✅)
- `Differentials.tsx` - Diferenciais da empresa
- `ServiceCarousel.tsx` - Carrossel de serviços
- `PaymentMethods.tsx` - Métodos de pagamento
- `Contact.tsx` - Seção #contato com formulário e informações
- `About.tsx` - Seção #sobre com história da empresa e fundador (RESOLVIDO ✅)
- `Footer.tsx` - Rodapé
- `WhatsAppButton.tsx` - Botão flutuante WhatsApp

### Páginas
- `Index.tsx` - Página principal que agrupa todos os componentes
- `NotFound.tsx` - Página 404

## 🎨 Design System

### Cores Principais
- **Primary**: Vermelho `hsl(0 100% 38%)` (#c00000)
- **Secondary**: Amarelo `hsl(45 98% 50%)` (#fbc100)
- **Background**: Branco `hsl(0 0% 100%)`
- **Foreground**: Preto `hsl(0 0% 10%)`

### Padrões de Componentes
- Seções com `py-20 px-4`
- Container: `container mx-auto max-w-6xl`
- Cards com `border-2 hover:border-primary transition-all duration-300`
- Títulos: `text-3xl md:text-5xl font-bold`
- Subtítulos: `text-lg text-muted-foreground`

## 📍 Informações da Empresa
- **Nome**: Nascimento Instalações
- **Localização**: Bauru e região (SP)
- **WhatsApp**: (14) 99793-8562
- **Email**: nascimentoinstalacoesbauru@gmail.com
- **Instagram**: @nascimentoinstalacoes
- **Fundador**: Isaias Nascimento

## ✅ Status das Seções

### Funcionando
- ✅ #sobre - Seção sobre a empresa e fundador (layout horizontal, foto 9:16 com blur, texto placeholder)
- ✅ #servicos - Cards de serviços completos
- ✅ #contato - Formulário funcionando com integração WhatsApp
- ✅ Hero, Diferenciais, Carrossel, Pagamentos

## 📝 Notas de Desenvolvimento

### Seção #sobre (Implementada)
- ✅ Layout horizontal responsivo: foto 9:16 à esquerda (desktop), texto à direita
- ✅ Em mobile: foto em cima, texto embaixo (grid responsivo)
- ✅ Foto do fundador Isaias Nascimento com blur na lateral direita (gradiente)
- ✅ Texto placeholder (Lorem Ipsum) pronto para substituição
- ✅ Imagem placeholder com ícone, pronta para receber foto real
- ✅ Card seguindo padrão visual dos outros componentes
- ✅ Informações adicionais (Fundação e Tempo de Experiência) com placeholders
- 📝 **Pendente**: Substituir texto Lorem Ipsum por história real da empresa
- 📝 **Pendente**: Adicionar foto real do fundador Isaias Nascimento

### Funcionalidades
- Navegação suave entre seções via scroll
- Formulário de contato integrado com WhatsApp
- Design responsivo (mobile-first)
- Animações suaves em hover

## 📦 Arquivos Criados/Modificados

### Criados
- `CONTEXTO_PROJETO.md` - Documentação do projeto e contexto
- `src/components/About.tsx` - Componente da seção #sobre

### Modificados
- `src/pages/Index.tsx` - Adicionado componente About após Hero

## 🔄 Estado do Código
Este arquivo documenta o estado atual do projeto após implementação da seção #sobre. Serve como referência para restaurar o estado anterior caso necessário.

### Instruções para Adicionar Foto Real
1. Adicionar foto do fundador em `src/assets/` ou `public/`
2. No arquivo `src/components/About.tsx`, linha 28:
   - Descomentar a tag `<img>` 
   - Atualizar o atributo `src` com o caminho correto
   - Remover o div placeholder (linhas 29-37)

### Instruções para Substituir Texto
1. No arquivo `src/components/About.tsx`, substituir os parágrafos Lorem Ipsum (linhas 47-66)
2. Atualizar informações de Fundação e Tempo de Experiência (linhas 73-79)

---
**Última atualização**: Implementação da seção #sobre
**Versão**: 1.1.0

