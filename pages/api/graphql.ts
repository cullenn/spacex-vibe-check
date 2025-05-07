import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import path from "path";
import fs from "fs";
import gql from "graphql-tag";
import axios from "axios";

const schemaPath = path.join(process.cwd(), "graphql", "schema.gql");

const typeDefs = gql(fs.readFileSync(schemaPath, "utf-8"));

// TODO: split resolvers into their own files
const resolvers = {
  Query: {
    hello: () => "yep that works",
    // Maybe switch to grabbing the json from their official REST endpoint later https://github.com/r-spacex/SpaceX-API
    // TODO: Store locally and update occasionally
    launches: async () => {
      try {
        const response = await axios.post(
          "https://spacex-production.up.railway.app/",
          {
            query: `
            {
                launches {
                mission_name
                launch_date_utc
                rocket {
                    rocket_name
                    rocket_type
                    }
                }
            }`,
          }
        );

        return response.data.data.launches;
      } catch (error) {
        console.error("Error fetching launches:", error);
        throw new Error("Failed to fetch launches");
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler<NextRequest>(server);
