import axios from "axios";
import { RAW_GET_LAUNCHES_QUERY } from "./queries";
import { Launch } from "@/generated/graphql/types";

// Maybe switch to grabbing the json from their official REST endpoint later https://github.com/r-spacex/SpaceX-API
// TODO: Store locally and update occasionally

export class SpaceXAPI {
  private readonly BASE_URL = "https://spacex-production.up.railway.app/";

  async fetchGraphQL(query: string): Promise<Launch[]> {
    const response = await axios.post(this.BASE_URL, {
      query,
    });

    return response.data.data.launches;
  }

  async getLaunches() {
    try {
      return await this.fetchGraphQL(RAW_GET_LAUNCHES_QUERY);
    } catch (error) {
      console.error("Error fetching launches:", error);
      throw new Error("Failed to fetch launches");
    }
  }
}
