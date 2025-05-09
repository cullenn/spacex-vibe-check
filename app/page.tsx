import ApolloWrapper from "@/components/ApolloWrapper";
import LaunchChart from "@/components/LaunchChart";
import LaunchList from "@/components/LaunchList";

export default function Home(): React.JSX.Element {
  return (
    <main className="h-full">
      <ApolloWrapper>
        <div className="flex flex-col lg:flex-row">
          <section
            className="lg:w-2/3 w-full mb-8 lg:mb-0 p-4"
            aria-labelledby="launches-heading"
          >
            <h1 id="launches-heading" className="text-2xl font-bold mb-4">
              SpaceX Launches
            </h1>
            <LaunchChart />
          </section>

          <section
            className="lg:w-1/3 w-full"
            aria-labelledby="launch-list-heading"
          >
            <h2 id="launch-list-heading" className="sr-only">
              Launch List
            </h2>
            <LaunchList />
          </section>
        </div>
      </ApolloWrapper>
    </main>
  );
}
