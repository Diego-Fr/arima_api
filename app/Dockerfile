FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código-fonte para o diretório de trabalho
COPY . .

# Expõe a porta 3000 para o mundo exterior
EXPOSE 8999

# Comando para iniciar a aplicação
CMD ["node", "index.js"]