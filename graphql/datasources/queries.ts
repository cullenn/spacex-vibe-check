export const RAW_GET_LAUNCHES_QUERY = `
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
