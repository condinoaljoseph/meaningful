import { PostsItem } from "./PostsItem";
import { Block } from "./ui/Block";

export const PostsList = () => {
  return (
    <div className="space-y-3">
      <PostsItem
        title="Lorem ipsum dolor sit amet."
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vero id, reprehenderit quidem dolorum est harum vel repudiandae. Accusamus, ducimus!"
      />
      <PostsItem
        title="Lorem, ipsum."
        content="Lorem ipsum dolor sit amet consectetur adipisicing."
      />
      <PostsItem
        title="Lorem ipsum dolor sit."
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vero id, reprehenderit quidem dolorum est harum vel repudiandae."
      />
    </div>
  );
};
