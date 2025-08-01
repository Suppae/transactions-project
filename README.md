# 💸 API de Transações - JEK Project

Uma API RESTful desenvolvida em Node.js com Express e MongoDB, capaz de **armazenar, editar e deletar transações financeiras**.

Ideal para fins de estudo ou como base para aplicações financeiras simples.

## 🚀 Tecnologias

- Node.js
- Express
- MongoDB + Mongoose
- Dotenv
- Nodemon (para desenvolvimento)

## 📌 Funcionalidades

- [x] Criar nova transação
- [x] Listar transações
- [x] Editar transação
- [x] Deletar transação

## 📁 Estrutura
/backend
├── server.js # Ponto de entrada
├── .env # Variáveis de ambiente
├── /models # Modelos do Mongoose
├── /routes # Rotas da API
└── /controllers # Lógica das requisições

## ⚙️ Como rodar

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/backend.git

# Acesse o diretório
cd backend

# Instale as dependências
npm install

# Crie um arquivo .env com a string de conexão do MongoDB
# Exemplo:
# MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/dbname

# Rode o servidor em modo dev
npm run dev
