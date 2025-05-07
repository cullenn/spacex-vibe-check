import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import path from "path";
import fs from "fs";
import gql from "graphql-tag";
import resolvers from "@/graphql/resolvers";

const schemaPath = path.join(process.cwd(), "graphql", "schema.gql");

const typeDefs = gql(fs.readFileSync(schemaPath, "utf-8"));

const server = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler<NextRequest>(server);
