import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql", // Or wherever your GraphQL endpoint is
  documents: "graphql/**/*.ts", // This will include your TypeScript query files
  generates: {
    "./generated/graphql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
