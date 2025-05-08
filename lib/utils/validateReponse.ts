import { AxiosResponse } from "axios";

export function isValidAxiosReponse(response: AxiosResponse): boolean {
  if (response.status !== 200) {
    console.error("Error fetching launches:", response.statusText);
    return false;
  }
  if (response.data.errors) {
    console.error("GraphQL errors:", response.data.errors);
    return false;
  }

  return true;
}
