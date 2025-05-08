import { Launch } from "@/generated/graphql/types";
import { GraphQLResolveInfo } from "graphql";
import { GraphQLContext } from "../types/context";

async function getLaunches(
  _parent: unknown,
  _args: unknown,
  context: GraphQLContext,
  _info: GraphQLResolveInfo
): Promise<Launch[]> {
  const { dataSources } = context;
  const launches = await dataSources.spacex.getLaunches();

  return launches;
}

const resolvers = {
  Query: {
    hello: () => "yep that works",
    launches: getLaunches,
  },
};

export default resolvers;
