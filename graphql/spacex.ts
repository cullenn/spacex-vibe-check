import gql from "graphql-tag";

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launches {
      launch_date_utc
      mission_name
    }
  }
`;
export const GET_LAUNCHES_DETAILS = gql`
  query GetLaunches {
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
