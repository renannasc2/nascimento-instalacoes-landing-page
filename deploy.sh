#!/bin/bash

# Script de Deploy para Oracle Cloud
# Este script automatiza o processo de build e deploy com Docker

echo "🚀 Iniciando deploy da aplicação Nascimento Instalações..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verifica se o Docker está instalado
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker não está instalado!${NC}"
    echo "Instale o Docker primeiro:"
    echo "  Oracle Linux: sudo yum install docker -y"
    echo "  Ubuntu: sudo apt install docker.io -y"
    exit 1
fi

# Verifica se o docker-compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo -e "${YELLOW}⚠️  docker-compose não encontrado. Tentando usar 'docker compose'...${NC}"
    if ! command -v docker compose &> /dev/null; then
        echo -e "${RED}❌ docker-compose não está instalado!${NC}"
        exit 1
    fi
    DOCKER_COMPOSE="docker compose"
else
    DOCKER_COMPOSE="docker-compose"
fi

# Para o container existente se estiver rodando
if [ "$(docker ps -aq -f name=nascimento-instalacoes)" ]; then
    echo -e "${YELLOW}⏸️  Parando container existente...${NC}"
    docker stop nascimento-instalacoes 2>/dev/null
    docker rm nascimento-instalacoes 2>/dev/null
fi

# Remove a imagem antiga se existir
echo -e "${YELLOW}🗑️  Removendo imagem antiga (se existir)...${NC}"
docker rmi nascimento-instalacoes:latest 2>/dev/null || true

# Faz o build da imagem
echo -e "${YELLOW}🔨 Construindo imagem Docker...${NC}"
docker build -t nascimento-instalacoes:latest .

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro ao construir a imagem Docker!${NC}"
    exit 1
fi

# Inicia o container com docker-compose
echo -e "${YELLOW}▶️  Iniciando container...${NC}"
$DOCKER_COMPOSE up -d

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro ao iniciar o container!${NC}"
    exit 1
fi

# Aguarda alguns segundos para o container iniciar
sleep 3

# Verifica se o container está rodando
if [ "$(docker ps -q -f name=nascimento-instalacoes)" ]; then
    echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"
    echo ""
    echo "📊 Status do container:"
    docker ps | grep nascimento-instalacoes
    echo ""
    echo "🌐 A aplicação está rodando em:"
    echo "   http://localhost"
    echo ""
    echo "📝 Para ver os logs:"
    echo "   docker logs -f nascimento-instalacoes"
    echo ""
    echo "🛑 Para parar a aplicação:"
    echo "   docker stop nascimento-instalacoes"
else
    echo -e "${RED}❌ Erro: Container não está rodando!${NC}"
    echo "Verifique os logs: docker logs nascimento-instalacoes"
    exit 1
fi

