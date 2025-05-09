import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import path from "path";
import fs from "fs";
import gql from "graphql-tag";
import resolvers from "@/graphql/resolvers";
import { SpaceXAPI } from "@/graphql/datasources/SpaceXAPI";
import { GraphQLContext } from "@/graphql/types/context";
import { BillboardAPI } from "@/graphql/datasources/BillboardAPI";
import { MoonPhaseAPI } from "@/graphql/datasources/MoonPhaseAPI";

const schemaPath = path.join(process.cwd(), "graphql", "schema.gql");

const typeDefs = gql(fs.readFileSync(schemaPath, "utf-8"));

const server = new ApolloServer<GraphQLContext>({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler<NextRequest, GraphQLContext>(
  server,
  {
    context: async (req) => {
      return {
        req,
        dataSources: {
          spacex: new SpaceXAPI(),
          billboard: new BillboardAPI(),
          moonphase: new MoonPhaseAPI(),
        },
      };
    },
  }
);
