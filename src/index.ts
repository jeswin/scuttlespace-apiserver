import { makeExecutableSchema } from "graphql-tools";
import Koa = require("koa");
import { merge } from 'lodash';
import typeDefs from "./schema";

const { ApolloServer, gql } = require("apollo-server-koa");

export default makeExecutableSchema({
  resolvers: {},
  typeDefs
});

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
