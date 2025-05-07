"use client";

import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "@/graphql/spacex";
import { Launch } from "@/generated/graphql/graphql";

export default function Launches() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  console.log("error", error);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <ul className="space-y-4">
      {data.launches.map((launch: Launch, i: number) => (
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
