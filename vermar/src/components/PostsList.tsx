import { usePostsQuery } from "../generated/graphql";
import { PostsItem } from "./PostsItem";
import { Block } from "./ui/Block";

export const PostsList = () => {
  const { data, loading } = usePostsQuery();

  if (!data && loading)
    return (
      <Block>
        <div className="block px-4 py-4">
          <div className="lazy-loading mb-2 rounded-md w-[80%] h-[20px]" />
          <div className="lazy-loading rounded-md w-[50%] h-[20px]" />
        </div>
      </Block>
    );

  return (
    <div className="space-y-4">
      {data?.posts.map((post) => (
        <PostsItem
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          user={post.creator.username}
        />
      ))}
    </div>
  );
};
