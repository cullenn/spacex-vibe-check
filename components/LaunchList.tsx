"use client";

import { Launch, useGetLaunchesQuery } from "@/generated/graphql/types";
import LoadingStatus from "./status/Loading";
import ErrorStatus from "./status/Error";

export default function Launches(): React.JSX.Element {
  const { loading, error, data } = useGetLaunchesQuery();

  if (loading) return <LoadingStatus />;
  if (error || !data)
    return <ErrorStatus message="Error loading launches list" />;

  const launches = data.launches.toReversed();

  return (
    <ul className="space-y-4 overflow-y-auto max-h-dvh p-4">
      {launches
        .filter((launch): launch is Launch => launch !== null)
        .map((launch: Launch, i: number) => (
          <li
            key={`launch-${launch.mission_name}-${launch.launch_date_utc}`}
            className="p-4 border rounded-lg shadow-md hover:bg-gray-900 transition-colors relative overflow-hidden"
          >
            {launch.moon_phase && (
              <div
                className="absolute inset-0 bg-gradient-to-l from-white to-transparent bg-no-repeat bg-right"
                style={{
                  backgroundSize: `${
                    launch.moon_phase.illumination * 0.5 + 50
                  }% 100%`,
                }}
                aria-label={`Visual indicator: Moon phase illumination is ${launch.moon_phase.illumination}%.`}
                role="img"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2  z-10">
                  <p
                    className="text-7xl cursor-help"
                    title={launch.moon_phase.phase}
                    aria-label={`Moon phase: ${launch.moon_phase.phase}`}
                    role="img"
                  >
                    {launch.moon_phase.emoji}
                  </p>
                </div>
              </div>
            )}
            <h3
              className="text-xl font-semibold relative z-10 max-w"
              style={{ maxWidth: "calc(100% - 4.5rem)" }}
            >
              {launch.mission_name}
            </h3>
            <p className="text-gray-400 relative z-10">
              {new Date(launch.launch_date_utc).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </li>
        ))}
    </ul>
  );
}
