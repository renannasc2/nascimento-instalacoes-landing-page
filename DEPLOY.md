# 🚀 Guia de Deploy no Oracle Cloud

## Por que usar Docker? ✅

**SIM, faz muito sentido usar Docker!** Aqui estão os motivos:

1. **Portabilidade**: Funciona igual em qualquer servidor
2. **Isolamento**: Não interfere com outras aplicações
3. **Facilidade**: Um comando para build e deploy
4. **Produção Ready**: Nginx otimizado para servir arquivos estáticos
5. **Manutenção**: Atualizações e rollbacks simples

---

## 📋 Pré-requisitos

- Servidor Oracle Cloud (Oracle Cloud Infrastructure - OCI)
- Acesso SSH ao servidor
- Docker instalado no servidor
- Git instalado (opcional, para clone do repositório)

---

## 🎯 Opções de Deploy

### Opção 1: Deploy com Docker (Recomendado) ⭐

#### Passo 1: Preparar o servidor Oracle Cloud

```bash
# Conecte-se via SSH ao seu servidor
ssh usuario@seu-servidor-oracle

# Atualize o sistema
sudo yum update -y  # Para Oracle Linux
# ou
sudo apt update && sudo apt upgrade -y  # Para Ubuntu

# Instale Docker
sudo yum install docker -y  # Oracle Linux
# ou
sudo apt install docker.io -y  # Ubuntu

# Inicie e habilite Docker
sudo systemctl start docker
sudo systemctl enable docker

# Adicione seu usuário ao grupo docker (para não precisar usar sudo)
sudo usermod -aG docker $USER
# Faça logout e login novamente para aplicar
```

#### Passo 2: Transferir os arquivos para o servidor

**Opção A: Via Git (Recomendado)**
```bash
# No servidor
git clone <URL_DO_SEU_REPOSITORIO>
cd nascimento-instalacoes-landing-page
```

**Opção B: Via SCP**
```bash
# No seu computador local
scp -r . usuario@seu-servidor:/home/usuario/projeto
```

#### Passo 3: Fazer build e executar

```bash
# No servidor, dentro da pasta do projeto
docker build -t nascimento-instalacoes:latest .

# Executar o container
docker run -d \
  --name nascimento-instalacoes \
  -p 80:80 \
  --restart unless-stopped \
  nascimento-instalacoes:latest
```

**OU usando docker-compose:**
```bash
docker-compose up -d
```

#### Passo 4: Verificar se está funcionando

```bash
# Ver logs do container
docker logs nascimento-instalacoes

# Verificar se está rodando
docker ps

# Testar no navegador
curl http://localhost
```

---

### Opção 2: Deploy Direto (Sem Docker)

Se preferir não usar Docker, você pode fazer o build localmente e servir os arquivos estáticos.

#### Passo 1: Build local

```bash
# No seu computador
npm install
npm run build
```

Isso criará uma pasta `dist` com os arquivos estáticos.

#### Passo 2: Transferir para o servidor

```bash
# No seu computador
scp -r dist/* usuario@seu-servidor:/var/www/html/
```

#### Passo 3: Configurar Nginx no servidor

```bash
# No servidor Oracle Cloud
sudo yum install nginx -y  # ou sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Configurar Nginx (copie o conteúdo de nginx.conf)
sudo nano /etc/nginx/conf.d/default.conf
```

---

## 🔧 Configuração de Firewall

Certifique-se de abrir a porta 80 (HTTP) e 443 (HTTPS) no Oracle Cloud:

1. No Oracle Cloud Console
2. Vá em **Networking** > **Virtual Cloud Networks**
3. Selecione sua VCN
4. Vá em **Security Lists**
5. Adicione regra de entrada:
   - Porta: 80 (HTTP)
   - Porta: 443 (HTTPS)
   - Protocolo: TCP
   - Fonte: 0.0.0.0/0 (ou restringir conforme necessário)

---

## 🔒 Configurar HTTPS (Opcional mas Recomendado)

### Opção A: Let's Encrypt (Grátis)

```bash
# Instalar Certbot
sudo yum install certbot python3-certbot-nginx -y

# Gerar certificado
sudo certbot --nginx -d seu-dominio.com

# Renovação automática
sudo certbot renew --dry-run
```

### Opção B: Oracle Cloud SSL Certificate

Use o serviço de certificados SSL do Oracle Cloud Console.

---

## 📝 Comandos Úteis

### Gerenciamento do Container

```bash
# Parar o container
docker stop nascimento-instalacoes

# Iniciar o container
docker start nascimento-instalacoes

# Reiniciar o container
docker restart nascimento-instalacoes

# Ver logs
docker logs -f nascimento-instalacoes

# Remover o container
docker rm -f nascimento-instalacoes

# Rebuild e atualizar
docker build -t nascimento-instalacoes:latest .
docker rm -f nascimento-instalacoes
docker run -d --name nascimento-instalacoes -p 80:80 --restart unless-stopped nascimento-instalacoes:latest
```

### Atualizar a aplicação

```bash
# 1. Parar o container
docker stop nascimento-instalacoes

# 2. Atualizar código (se usando Git)
git pull origin main

# 3. Rebuild
docker build -t nascimento-instalacoes:latest .

# 4. Remover container antigo
docker rm nascimento-instalacoes

# 5. Iniciar novo container
docker run -d --name nascimento-instalacoes -p 80:80 --restart unless-stopped nascimento-instalacoes:latest
```

---

## 🐛 Troubleshooting

### Container não inicia
```bash
docker logs nascimento-instalacoes
```

### Porta 80 já está em uso
```bash
# Verificar o que está usando a porta
sudo lsof -i :80
# Ou mudar a porta no docker run para -p 8080:80
```

### Problemas de permissão
```bash
sudo chmod 666 /var/run/docker.sock
# Ou adicionar usuário ao grupo docker (veja Passo 1)
```

### Limpar espaço (remover imagens antigas)
```bash
docker system prune -a
```

---

## 📊 Monitoramento

### Ver uso de recursos
```bash
docker stats nascimento-instalacoes
```

### Ver processos do container
```bash
docker top nascimento-instalacoes
```

---

## ✅ Checklist de Deploy

- [ ] Servidor Oracle Cloud configurado
- [ ] Docker instalado e funcionando
- [ ] Firewall configurado (portas 80/443)
- [ ] Código transferido para o servidor
- [ ] Dockerfile criado e testado
- [ ] Build realizado com sucesso
- [ ] Container rodando
- [ ] Site acessível via IP público
- [ ] (Opcional) Domínio configurado
- [ ] (Opcional) HTTPS configurado

---

## 🎉 Pronto!

Seu site está no ar! Qualquer dúvida, consulte os logs do container ou a documentação do Docker.

