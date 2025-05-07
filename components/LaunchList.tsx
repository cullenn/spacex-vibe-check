"use client";

import { Launch, useGetLaunchesQuery } from "@/generated/graphql/types";

export default function Launches() {
  const { loading, error, data } = useGetLaunchesQuery();

  const launches = (data?.launches ?? []) as Launch[];

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <ul className="space-y-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
      {launches
        .filter((launch): launch is Launch => launch !== null)
        .map((launch: Launch, i: number) => (
          <li
            key={i}
            className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-semibold">{launch.mission_name}</h3>
            <p className="text-gray-600">{launch.launch_date_utc}</p>
          </li>
        ))}
    </ul>
  );
}
