# Build stage - Compila a aplicação React
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./
COPY bun.lockb* ./

# Instala dependências
RUN npm ci --only=production=false

# Copia o código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Production stage - Serve os arquivos estáticos com Nginx
FROM nginx:alpine

# Copia os arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]

