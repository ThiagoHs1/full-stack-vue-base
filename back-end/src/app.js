const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./graphql/schema');

const app = express();
app.use(cors());

// Middleware do GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Interface para testes do GraphQL
}));

module.exports = app;
