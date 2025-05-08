async function getLaunches(_: any, __: any, context: any) {
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
