import Koa = require("koa");
import schema from "./schema";

const { ApolloServer, gql } = require("apollo-server-koa");

const server = new ApolloServer(schema);

const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
