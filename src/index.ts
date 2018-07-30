import { makeExecutableSchema } from "graphql-tools";
import Koa = require("koa");
import typeDefs from "./schema";

const { ApolloServer, gql } = require("apollo-server-koa");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    user: (root: any, args: any) => {
      return {
        username: "jes"
      };
    }
  }
};

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
