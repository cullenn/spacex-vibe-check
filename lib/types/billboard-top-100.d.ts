declare module "billboard-top-100" {
  export interface ChartResult {
    title: string;
    artist: string;
    rank: number;
    weeksOnChart: number;
    peakPosition: number;
    lastWeek: number;
  }

  export interface ChartInfo {
    chart: string;
    date: string;
    previousDate: string;
    nextDate: string;
    songs: ChartResult[];
  }

  export function getChart(
    chartName: string,
    date: string,
    callback: (err: Error | null, chart: ChartInfo) => void
  ): void;
}
