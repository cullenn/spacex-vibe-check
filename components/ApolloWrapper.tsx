"use client";
import { client } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function ApolloWrapper({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
