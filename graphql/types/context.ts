import { SpaceXAPI } from "@/graphql/datasources/SpaceXAPI";
import { NextRequest } from "next/server";
import { BillboardAPI } from "../datasources/BillboardAPI";

export type GraphQLContext = {
  req: NextRequest;
  dataSources: {
    spacex: SpaceXAPI;
    billboard: BillboardAPI;
  };
};
