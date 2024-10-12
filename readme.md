# Full Stack Vue Base Template

## Descrição

Este repositório é um template pré-configurado para projetos full stack do vue com as seguintes tecnologias:
### Tecnologias Utilizadas

**Front-End:**
- [Vue 3](https://vuejs.org/) — Framework JavaScript para construção de interfaces de usuário.
- [Tailwind CSS](https://tailwindcss.com/) — Framework de CSS utilitário para estilização rápida e eficiente.
- [Axios](https://axios-http.com/) — Cliente HTTP para requisições AJAX.

**Back-End:**
- [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript server-side.
- [Knex.js](https://knexjs.org/) — Query builder SQL para JavaScript.
- [PostgreSQL](https://www.postgresql.org/) — Banco de dados relacional open-source.
- [GraphQL](https://graphql.org/) — Linguagem de consulta para APIs.
- [Express.js](https://expressjs.com/) — Framework web para Node.js.

## Como Usar

Siga os passos abaixo para configurar e rodar o projeto:

### Configurando o Front-End

1. Navegue até a pasta do front-end:
   ```bash
   cd front-end

2. Instale as dependências:
    npm install

3. Execute o servidor de desenvolvimento:
    npm run dev


### Configurando o  Back-End

1. Navegue até a pasta do Back-End:
   ```bash
   cd  Back-End

2. Instale as dependências:
    npm install

3. Execute o servidor de desenvolvimento:
    npm run dev

4. Execute as migrações do banco de dados (caso aplicável):
    knex migrate:latest

5. Execute o servidor Node.js:
    npm start


## Requisições GraphQL

O back-end está configurado para expor uma API GraphQL no endpoint /graphql. Você pode testar as requisições usando a ferramenta GraphiQL que está habilitada no servidor de desenvolvimento.
