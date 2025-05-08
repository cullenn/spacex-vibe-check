export class SpaceXApiError extends Error {
  constructor(message: string, public responseData?: unknown) {
    super(message);
    this.name = "SpaceXApiErrors";

    if (process.env.NODE_ENV !== "production") {
      console.error(`[SpaceXApiError]: ${message}`, responseData);
    }
  }
}
