import { SpaceXAPI } from "@/graphql/datasources/SpaceXAPI";
import { NextRequest } from "next/server";

export type GraphQLContext = {
  req: NextRequest;
  dataSources: {
    spacex: SpaceXAPI;
  };
};
