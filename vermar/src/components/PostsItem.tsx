import Link from "next/link";
import { Post } from "../generated/graphql";
import { Block } from "./ui/Block";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { UserPophover } from "./UserPophover";
import { useHasMounted } from "../composables/useHasMounted";

dayjs.extend(relativeTime);

export const PostsItem = ({ post }: { post: Post }) => {
  const hasMounted = useHasMounted();

  return (
    <Link href={`/${post.creator.username}/${post.id}`}>
      <a className="block text-skin-text">
        <Block className="hover:border-skin-text">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {hasMounted && <UserPophover user={post.creator} />}
              </div>
            </div>
            <div className="relative mb-1 break-words pr-[80px] leading-7">
              <h3 className="inline pr-2">{post.title}</h3>
              <p className="mb-2 break-words text-md line-clamp-2">
                {post.content}
              </p>
            </div>
          </div>
          <div className="mt-3">
            {dayjs(new Date(parseInt(post.createdAt))).fromNow()}
          </div>
        </Block>
      </a>
    </Link>
  );
};
