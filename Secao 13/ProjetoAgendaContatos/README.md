# Agenda de Contatos

Este projeto é uma aplicação web para gerenciar uma agenda de contatos, com operações de CRUD para usuários e para os contatos associados a cada usuário. A aplicação permite criar contas, autenticar usuários e manter uma lista de contatos organizada por pessoa.

## Funcionalidades

- Cadastro de usuários
- Login e autenticação
- CRUD de usuários
- CRUD de contatos vinculados ao usuário
- Listagem, edição e remoção de contatos
- Persistência de dados no MongoDB

## Tecnologias utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- bcryptjs
- npm

## Padrão de projeto MVC

O projeto foi organizado seguindo o padrão MVC (Model-View-Controller), com separação de responsabilidades:

- Model: representa os dados e a estrutura do banco (por exemplo, `User` e `Contact`)
- View: arquivos de renderização da interface
- Controller: lida com a lógica de requisições, validações e fluxo da aplicação
- Routes: define as rotas da aplicação e encaminha as requisições aos controllers corretos

## Estrutura do projeto

Uma estrutura típica do projeto é:

```text
src/
  controllers/
  models/
  routes/
  views/
  app.js
```

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- Node.js (versão LTS recomendada)
- npm
- MongoDB rodando localmente ou uma conta no MongoDB Atlas

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd ProjetoAgendaContatos
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as variáveis abaixo:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/agenda_contatos
   SESSION_SECRET=uma_chave_secreta_segura
   ```

## Configuração do MongoDB

### Opção 1: MongoDB local

Se você estiver usando MongoDB localmente:

1. Inicie o serviço do MongoDB.
2. Verifique se a conexão está funcionando.
3. O valor de `MONGO_URI` deve ser algo como:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/agenda_contatos
   ```

### Opção 2: MongoDB Atlas

Se estiver usando o MongoDB Atlas:

1. Crie um cluster no MongoDB Atlas.
2. Crie um usuário de banco.
3. Obtenha a string de conexão e configure no `.env`:
   ```env
   MONGO_URI=mongodb+srv://<usuario>:<senha>@<cluster>/<nome-do-banco>?retryWrites=true&w=majority
   ```

## Executando a aplicação

Para iniciar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Ou, se o projeto estiver configurado com `start`:

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Fluxo de uso

1. Cadastre um usuário.
2. Faça login na aplicação.
3. Adicione contatos vinculados ao usuário autenticado.
4. Visualize, edite ou remova os contatos conforme necessário.

## Observações

- As senhas devem ser armazenadas de forma segura, preferencialmente com hash via `bcryptjs`.
- Sempre mantenha o arquivo `.env` fora do controle de versão.
- Para ambiente de produção, use variáveis de ambiente seguras e uma conexão MongoDB robusta.