import { usePostsQuery } from "../generated/graphql";
import { PostsItem } from "./PostsItem";

export const PostsList = () => {
  const { data, loading } = usePostsQuery();

  if (!data && loading) return null;

  return (
    <div className="space-y-4">
      {data?.posts.map((post) => (
        <PostsItem
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};
