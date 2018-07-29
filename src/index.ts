import Koa = require("koa");

const { ApolloServer, gql } = require("apollo-server-koa");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    user: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    user: (root: any, args: any) => {
      
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
