import Link from "next/link";
import { PostFragmentFragment } from "../generated/graphql";
import { AvatarUser } from "./ui/AvatarUser";
import { Block } from "./ui/Block";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const PostsItem = ({ post }: { post: PostFragmentFragment }) => {
  return (
    <Link href={`/${post.creator.username}/${post.id}`}>
      <a className="block text-skin-text">
        <Block className="hover:border-skin-text">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <div className="flex items-center">
                  <AvatarUser user={post.creator.username} size="28" />
                  <span className="ml-2 text-skin-link">
                    {post.creator.username}
                  </span>
                </div>
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
