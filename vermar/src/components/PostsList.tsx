import { useRef } from "react";
import { PostsQueryRequest, usePostsQuery } from "../generated/graphql";
import { PostsItem } from "./PostsItem";
import { Block } from "./ui/Block";
import { Button } from "./ui/Button";
import { useInView } from "react-cool-inview";

export const PostsList = ({
  limit = 10,
  cursor = null,
  creatorId = null,
}: PostsQueryRequest) => {
  const loadMoreRef = useRef<boolean>();
  const { data, loading, fetchMore, variables } = usePostsQuery({
    variables: {
      request: {
        limit,
        cursor,
        creatorId,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  const { observe } = useInView({
    onChange: async ({ inView }) => {
      if (!inView || !loadMoreRef.current) {
        return;
      }

      if (data && data?.posts.hasMore) {
        await fetchMore({
          variables: {
            limit: variables?.request.limit,
            cursor: data?.posts.posts[data.posts.posts.length - 1].createdAt,
          },
        });
      }
    },
  });

  return (
    <>
      {!data && loading ? (
        <Block>
          <div className="lazy-loading mb-2 rounded-md w-[80%] h-[20px]" />
          <div className="lazy-loading rounded-md w-[50%] h-[20px]" />
        </Block>
      ) : (
        <div className="space-y-4">
          {data?.posts.posts.map((post, i) => (
            <PostsItem key={`${post.id}_${i}`} post={post} />
          ))}

          {data && data?.posts.hasMore ? (
            <>
              {!loadMoreRef.current ? (
                <div className="px-4 text-center md:px-0">
                  <Button
                    className="w-full"
                    loading={loading}
                    onClick={() => {
                      loadMoreRef.current = true;

                      fetchMore({
                        variables: {
                          limit: variables?.request.limit,
                          cursor:
                            data.posts.posts[data.posts.posts.length - 1]
                              .createdAt,
                        },
                      });
                    }}
                  >
                    Load more
                  </Button>
                </div>
              ) : (
                <div ref={observe}>
                  <Block>
                    <div className="lazy-loading mb-2 rounded-md w-[80%] h-[20px]" />
                    <div className="lazy-loading rounded-md w-[50%] h-[20px]" />
                  </Block>
                </div>
              )}
            </>
          ) : null}
        </div>
      )}
    </>
  );
};
