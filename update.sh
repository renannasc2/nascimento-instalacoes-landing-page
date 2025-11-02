#!/bin/bash

# Script para atualizar a aplicação no Oracle Cloud
# Use este script quando houver novas atualizações no código

echo "🔄 Atualizando aplicação Nascimento Instalações..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verifica se está em um repositório Git
if [ -d .git ]; then
    echo -e "${YELLOW}📥 Atualizando código do Git...${NC}"
    git pull origin main
    
    if [ $? -ne 0 ]; then
        echo -e "${YELLOW}⚠️  Aviso: Não foi possível atualizar do Git (pode estar tudo atualizado)${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Não é um repositório Git, pulando atualização do código${NC}"
fi

# Executa o script de deploy
if [ -f deploy.sh ]; then
    bash deploy.sh
else
    echo -e "${RED}❌ Arquivo deploy.sh não encontrado!${NC}"
    exit 1
fi

