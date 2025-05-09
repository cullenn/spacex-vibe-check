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

  const launchesWithMoonPhase = await Promise.all(
    launches.map(async (launch: Launch) => {
      const launchDate = new Date(launch.launch_date_utc)
        .toISOString()
        .split("T")[0];
      const moonPhase = await dataSources.moonphase.getMoonPhase(launchDate);
      return {
        ...launch,
        moon_phase: moonPhase,
      };
    })
  );

  return launchesWithMoonPhase;
}

async function getLaunchTimes(
  _parent: unknown,
  _args: unknown,
  context: GraphQLContext,
  _info: GraphQLResolveInfo
): Promise<string[]> {
  const { dataSources } = context;
  const launches = await dataSources.spacex.getLaunches();

  return launches
    .map((launch: Launch) => {
      if (launch?.launch_date_utc) {
        return launch.launch_date_utc;
      }
      return null;
    })
    .filter((launch) => launch !== null);
}

const resolvers = {
  Query: {
    hello: () => "yep that works",
    launches: getLaunches,
    launchTimes: getLaunchTimes,
  },
};

export default resolvers;
