import { getLaunches } from "../datasources/spacex";

const resolvers = {
  Query: {
    hello: () => "yep that works",
    launches: getLaunches,
  },
};

export default resolvers;
