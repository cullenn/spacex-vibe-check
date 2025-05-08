import axios from "axios";
import { RAW_GET_LAUNCHES_QUERY } from "./queries";
import { Launch } from "@/generated/graphql/types";
import { isValidAxiosReponse } from "@/lib/utils/validateReponse";
import { SpaceXAPIError } from "@/lib/errors/SpaceXAPIError";

// Maybe switch to grabbing the json from their official REST endpoint later https://github.com/r-spacex/SpaceX-API
// TODO: Store locally and update occasionally

export type LaunchesResponse = {
  launches: Launch[];
};

export class SpaceXAPI {
  private readonly BASE_URL = "https://spacex-production.up.railway.app/";

  async fetchGraphQL<T>(query: string): Promise<T> {
    try {
      const response = await axios.post(this.BASE_URL, {
        query,
      });
      if (!isValidAxiosReponse(response)) {
        throw new SpaceXAPIError(
          `Invalid response from SpaceX API. Status: ${
            response.statusText
          }. Data: ${JSON.stringify(response.data)}`,
          response.data
        );
      }

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new SpaceXAPIError(
          `Error fetching data from SpaceX API. Message: ${error.message}`,
          error
        );
      }
      if (error instanceof SpaceXAPIError) {
        throw error;
      }
      throw new SpaceXAPIError(
        `Unknown error fetching data from SpaceX API. Message: ${error}`,
        error
      );
    }
  }

  async getLaunches(): Promise<Launch[]> {
    const data = await this.fetchGraphQL<LaunchesResponse>(
      RAW_GET_LAUNCHES_QUERY
    );

    if (!Array.isArray(data.launches)) {
      throw new SpaceXAPIError(
        `Invalid data format from SpaceX API. Expected launches to be an array.`,
        data
      );
    }
    return data.launches;
  }
}
