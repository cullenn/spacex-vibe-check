import ApolloWrapper from "@/components/ApolloWrapper";
import LaunchChart from "@/components/LaunchChart";
import LaunchList from "@/components/LaunchList";

export default function Home(): React.JSX.Element {
  return (
    <main className="h-full">
      <ApolloWrapper>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-7/10 w-full mb-8 md:mb-0 p-4">
            <h1 className="text-2xl font-bold mb-4">SpaceX Launches</h1>
            <div className="my-8 p-4">
              <LaunchChart />
            </div>
          </div>

          <div className="md:w-3/10 w-full">
            <LaunchList />
          </div>
        </div>
      </ApolloWrapper>
    </main>
  );
}
