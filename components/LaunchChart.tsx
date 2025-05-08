"use client";

import { Launch, useGetLaunchTimesQuery } from "@/generated/graphql/types";
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

type ChartData = {
  year: number;
  launches: number;
};

export default function LaunchChart(): React.JSX.Element {
  const { loading, error, data } = useGetLaunchTimesQuery();
  const launches = (data?.launches ?? []) as Launch[];
  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error loading launches chart</p>
    );

  const chartDataMap = new Map<number, number>();

  launches.forEach((launch: Launch | null) => {
    if (launch?.launch_date_utc) {
      const year = new Date(launch.launch_date_utc).getFullYear();
      chartDataMap.set(year, (chartDataMap.get(year) || 0) + 1);
    }
  });

  const chartData: ChartData[] = Array.from(chartDataMap.entries()).map(
    ([year, launches]) => ({
      year,
      launches,
    })
  );

  return (
    <div className="w-full h-64">
      <h2 className="text-xl font-bold mb-4">Launch Chart</h2>
      <ResponsiveContainer>
        <BarChart data={chartData}>
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
