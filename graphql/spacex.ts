import gql from "graphql-tag";

export const GET_LAUNCHES_QUERY = gql`
  query GetLaunches {
    launches {
      launch_date_utc
      mission_name
      track {
        title
        artist
      }
    }
  }
`;

export const GET_LAUNCH_TIMES_QUERY = gql`
  query GetLaunchTimes {
    launchTimes
  }
`;

export const GET_LAUNCHES_WITH_ROCKETS_QUERY = gql`
  query GetLaunchesWithRockets {
    launches {
      launch_date_utc
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;
