"use client";

import { useGetLaunchTimesQuery } from "@/generated/graphql/types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoadingStatus from "./status/Loading";
import ErrorStatus from "./status/Error";

type ChartData = {
  year: number;
  launches: number;
};

export default function LaunchChart(): React.JSX.Element {
  const { loading, error, data } = useGetLaunchTimesQuery();

  if (loading) return <LoadingStatus />;
  if (error || !data)
    return <ErrorStatus message="Error loading launches chart" />;

  const launchTimes = data.launchTimes;
  const chartDataMap = new Map<number, number>();

  launchTimes.forEach((launchTime) => {
    const year = new Date(launchTime).getFullYear();
    chartDataMap.set(year, (chartDataMap.get(year) || 0) + 1);
  });

  const chartData: ChartData[] = Array.from(chartDataMap.entries()).map(
    ([year, launches]) => ({
      year,
      launches,
    })
  );

  return (
    <div
      className="w-full h-64"
      aria-labelledby="launchChartTitle"
      aria-describedby="chartDescription"
    >
      <h2 id="launchChartTitle" className="text-xl font-bold mb-4">
        Launch Chart
      </h2>
      <p id="chartDescription" className="sr-only">
        This bar chart shows the number of launches per year, with the year on
        the X-axis and the number of launches on the Y-axis. Each bar represents
        the launches in a given year.
      </p>
      <ResponsiveContainer>
        <BarChart
          data={chartData}
          role="img"
          aria-label="Bar chart showing launches by year"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="launches" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
