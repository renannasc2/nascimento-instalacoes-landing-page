# 🚀 Guia Rápido de Deploy na Oracle Cloud

Este guia mostra como fazer deploy da landing page na sua máquina Oracle Cloud usando Docker.

---

## 📋 Pré-requisitos

- Servidor Oracle Cloud (Oracle Cloud Infrastructure - OCI) criado
- Acesso SSH ao servidor (via chave SSH ou usuário/senha)
- IP público configurado no servidor

---

## 🔧 Passo 1: Conectar no Servidor Oracle Cloud

### Via SSH (Windows PowerShell ou CMD)

```powershell
# Substitua pelo IP público do seu servidor
ssh opc@SEU_IP_PUBLICO

# Ou se usar outro usuário
ssh seu-usuario@SEU_IP_PUBLICO
```

**Nota:** Se você ainda não tem a chave SSH, o Oracle Cloud fornece uma. Baixe-a no console e use com:
```powershell
ssh -i caminho/para/sua-chave.pem opc@SEU_IP_PUBLICO
```

---

## 🐳 Passo 2: Instalar Docker no Servidor

Execute os comandos abaixo no servidor Oracle Cloud:

### Para Oracle Linux:

```bash
# Atualizar sistema
sudo yum update -y

# Instalar Docker
sudo yum install docker -y

# Iniciar e habilitar Docker
sudo systemctl start docker
sudo systemctl enable docker

# Adicionar seu usuário ao grupo docker (para não usar sudo)
sudo usermod -aG docker $USER

# Instalar docker-compose (se necessário)
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Sair e entrar novamente para aplicar as mudanças do grupo
exit
# Conecte novamente via SSH
```

### Para Ubuntu:

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
sudo apt install docker.io docker-compose -y

# Iniciar e habilitar Docker
sudo systemctl start docker
sudo systemctl enable docker

# Adicionar seu usuário ao grupo docker
sudo usermod -aG docker $USER

# Sair e entrar novamente
exit
```

### Verificar se Docker está funcionando:

```bash
docker --version
docker ps
```

---

## 📥 Passo 3: Transferir o Projeto para o Servidor

Você tem duas opções:

### Opção A: Via Git (Recomendado) ⭐

```bash
# No servidor Oracle Cloud
cd ~
git clone https://github.com/renannasc2/nascimento-instalacoes-landing-page.git
cd nascimento-instalacoes-landing-page
```

### Opção B: Via SCP (do seu computador Windows)

```powershell
# No PowerShell do seu computador Windows
# Certifique-se de estar na pasta do projeto
scp -r . opc@SEU_IP_PUBLICO:/home/opc/nascimento-instalacoes-landing-page
```

Depois, conecte via SSH e vá para a pasta:
```bash
cd ~/nascimento-instalacoes-landing-page
```

---

## 🚀 Passo 4: Fazer o Deploy

### Método 1: Usando o Script Automatizado (Mais Fácil) ⭐

```bash
# Dar permissão de execução ao script
chmod +x deploy.sh

# Executar o deploy
./deploy.sh
```

### Método 2: Manual com docker-compose

```bash
docker-compose up -d --build
```

### Método 3: Manual com docker

```bash
# Build da imagem
docker build -t nascimento-instalacoes:latest .

# Executar o container
docker run -d \
  --name nascimento-instalacoes \
  -p 80:80 \
  --restart unless-stopped \
  nascimento-instalacoes:latest
```

---

## ✅ Passo 5: Verificar se Está Funcionando

```bash
# Ver se o container está rodando
docker ps

# Ver os logs
docker logs nascimento-instalacoes

# Testar localmente no servidor
curl http://localhost
```

---

## 🌐 Passo 6: Configurar Firewall no Oracle Cloud

Para acessar o site de fora, você precisa abrir as portas no firewall do Oracle Cloud:

1. Acesse o **Oracle Cloud Console**
2. Vá em **Networking** > **Virtual Cloud Networks**
3. Selecione sua VCN
4. Clique em **Security Lists**
5. Selecione a Security List padrão
6. Clique em **Add Ingress Rules**
7. Adicione as regras:

   **Regra 1 - HTTP (Porta 80):**
   - Source Type: CIDR
   - Source CIDR: `0.0.0.0/0`
   - IP Protocol: TCP
   - Destination Port Range: `80`

   **Regra 2 - HTTPS (Porta 443) - Opcional:**
   - Source Type: CIDR
   - Source CIDR: `0.0.0.0/0`
   - IP Protocol: TCP
   - Destination Port Range: `443`

8. Salve as regras

**Também configure no firewall do servidor:**

```bash
# Para Oracle Linux (firewalld)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload

# Para Ubuntu (ufw)
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload
```

---

## 🎉 Pronto!

Agora você pode acessar seu site usando o IP público do servidor:
```
http://SEU_IP_PUBLICO
```

---

## 📝 Comandos Úteis

### Ver logs do container
```bash
docker logs -f nascimento-instalacoes
```

### Parar a aplicação
```bash
docker stop nascimento-instalacoes
```

### Iniciar a aplicação
```bash
docker start nascimento-instalacoes
```

### Reiniciar a aplicação
```bash
docker restart nascimento-instalacoes
```

### Atualizar a aplicação (quando houver mudanças no código)
```bash
# Se usar Git
git pull origin main
./deploy.sh

# Ou use o script de update
chmod +x update.sh
./update.sh
```

### Remover tudo e começar do zero
```bash
docker stop nascimento-instalacoes
docker rm nascimento-instalacoes
docker rmi nascimento-instalacoes:latest
./deploy.sh
```

### Ver uso de recursos
```bash
docker stats nascimento-instalacoes
```

---

## 🔒 Configurar HTTPS (Opcional mas Recomendado)

### Usando Let's Encrypt (Grátis)

```bash
# Instalar Certbot
sudo yum install certbot python3-certbot-nginx -y  # Oracle Linux
# ou
sudo apt install certbot python3-certbot-nginx -y  # Ubuntu

# Gerar certificado (substitua pelo seu domínio)
sudo certbot --nginx -d seu-dominio.com

# Configurar renovação automática
sudo certbot renew --dry-run
```

**Nota:** Para usar HTTPS, você precisará configurar um domínio apontando para o IP do servidor.

---

## 🐛 Solução de Problemas

### Container não inicia
```bash
# Ver logs detalhados
docker logs nascimento-instalacoes

# Verificar se a porta 80 está livre
sudo netstat -tulpn | grep :80
```

### Porta 80 já está em uso
```bash
# Parar o serviço que está usando (ex: Apache/Nginx)
sudo systemctl stop httpd  # Apache
sudo systemctl stop nginx   # Nginx

# Ou mudar a porta no docker-compose.yml para 8080:80
```

### Problemas de permissão com Docker
```bash
# Verificar se você está no grupo docker
groups

# Se não estiver, adicione novamente
sudo usermod -aG docker $USER
# Saia e entre novamente via SSH
```

### Site não abre de fora
- Verifique as regras de Security List no Oracle Cloud Console
- Verifique o firewall do servidor (firewalld ou ufw)
- Certifique-se de que o container está rodando: `docker ps`

---

## 📞 Precisa de Ajuda?

- Verifique os logs: `docker logs nascimento-instalacoes`
- Verifique o status: `docker ps -a`
- Verifique o IP público do servidor no Oracle Cloud Console

---

**✅ Tudo pronto! Seu site está no ar! 🎉**

