import { ChartInfo, ChartResult, getChart } from "billboard-top-100";

export class BillboardAPI {
  // This trash package does not work with sequential calls or even with a 1sec delay
  // Maybe it'll be useful later to grab 1 song for 1 launch?
  async getTrack(date: string): Promise<Partial<ChartResult>> {
    return new Promise((resolve, reject) => {
      getChart("hot-100", date, (err: unknown, chart: ChartInfo) => {
        if (err) reject(err);
        else
          resolve({
            artist: chart.songs[0].artist,
            title: chart.songs[0].title,
          });
      });
    });
  }
}
