import axios from "axios";
import { RAW_GET_LAUNCHES_QUERY } from "./queries";

// Maybe switch to grabbing the json from their official REST endpoint later https://github.com/r-spacex/SpaceX-API
// TODO: Store locally and update occasionally

async function fetchGraphQL(query: string) {
  const response = await axios.post(
    "https://spacex-production.up.railway.app/",
    {
      query,
    }
  );

  return response.data.data.launches;
}

export async function getLaunches() {
  try {
    return await fetchGraphQL(RAW_GET_LAUNCHES_QUERY);
  } catch (error) {
    console.error("Error fetching launches:", error);
    throw new Error("Failed to fetch launches");
  }
}
