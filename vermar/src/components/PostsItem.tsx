import Link from "next/link";
import { Avatar } from "./ui/Avatar";
import { Block } from "./ui/Block";

export const PostsItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <Block className="hover:border-skin-text">
      <Link href="/post">
        <a className="block p-3 text-skin-text sm:p-4">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <div className="flex items-center">
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/41994701?v=4"
                    size="28"
                  />
                  <span className="ml-2 text-skin-link">dern</span>
                </div>
              </div>
            </div>
            <div className="relative mb-1 break-words pr-[80px] leading-7">
              <h3 className="inline pr-2">{title}</h3>
              <p className="mb-2 break-words text-md line-clamp-2">{content}</p>
            </div>
          </div>
          <div className="mt-3">5 days ago</div>
        </a>
      </Link>
    </Block>
  );
};
