import { SpaceXAPI } from "@/graphql/datasources/spacex";
import { NextRequest } from "next/server";

export type GraphQLContext = {
  req: NextRequest;
  dataSources: {
    spacex: SpaceXAPI;
  };
};
