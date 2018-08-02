import Koa = require("koa");
import * as psy from "psychopiggy";
import * as userService from "scuttlespace-service-user";
import schema from "./schema";

const { ApolloServer, gql } = require("apollo-server-koa");

export function getEnvValue(envVar: string): string | never {
  const val = process.env[envVar];
  if (typeof val === "undefined") {
    throw new Error(`Expected ${envVar} to be defined.`);
  }
  return val;
}

export function getDbConfig(): psy.IDbConfig {
  return {
    database: getEnvValue("SCUTTLESPACE_DB_NAME"),
    host: getEnvValue("SCUTTLESPACE_DB_HOST"),
    password: getEnvValue("SCUTTLESPACE_DB_PASSWORD"),
    port: parseInt(getEnvValue("SCUTTLESPACE_DB_PORT"), 10),
    user: getEnvValue("SCUTTLESPACE_DB_USER")
  };
}

async function init() {
  const dbConfig = getDbConfig();
  await userService.init(dbConfig);
  const server = new ApolloServer(schema);

  const app = new Koa();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

init();
