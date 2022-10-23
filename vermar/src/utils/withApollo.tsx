import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withApollo } from "next-apollo";
import { PaginatedPosts } from "../generated/graphql";

export default withApollo(
  (ctx) =>
    new ApolloClient({
      uri: "http://localhost:4000/graphql",
      credentials: "include",
      headers: {
        cookie:
          (typeof window === "undefined"
            ? ctx?.req?.headers.cookie
            : undefined) || "",
      },
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              posts: {
                keyArgs: [],
                merge(
                  existing: PaginatedPosts | undefined,
                  incoming: PaginatedPosts
                ): PaginatedPosts {
                  return {
                    ...incoming,
                    posts: [...(existing?.posts || []), ...incoming.posts],
                  };
                },
              },
            },
          },
        },
      }),
    })
);
