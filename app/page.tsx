import ApolloWrapper from "@/components/ApolloWrapper";
import LaunchList from "@/components/LaunchList";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">SpaceX Launches</h1>

      <ApolloWrapper>
        <LaunchList />
      </ApolloWrapper>
    </main>
  );
}
