const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => 'Hello from GraphQL!'
};

module.exports = { schema, root };
