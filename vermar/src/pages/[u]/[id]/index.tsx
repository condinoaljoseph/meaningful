import { BellAlertIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useInView } from "react-cool-inview";
import clsx from "clsx";
import { ButtonComment } from "../../../components/ButtonComment";
import { ButtonFollow } from "../../../components/ButtonFollow";
import { ButtonReact } from "../../../components/ButtonReact";
import { ButtonShare } from "../../../components/ButtonShare";
import { AvatarUser } from "../../../components/ui/AvatarUser";
import { Block } from "../../../components/ui/Block";
import { ButtonRounded } from "../../../components/ui/ButtonRounded";
import { Markdown } from "../../../components/ui/Markdown";
import { usePostQuery, ReactionTypes } from "../../../generated/graphql";
import { ButtonMore } from "../../../components/ButtonMore";

const Post: NextPage = () => {
  const { query } = useRouter();

  const { data, loading } = usePostQuery({
    variables: { id: parseInt(query.id as string) },
  });

  const { observe, inView } = useInView();

  return (
    <div className="lg:flex">
      <div className="relative w-full pr-0 lg:w-3/4 lg:pr-5">
        {!data && loading ? (
          <div className="space-y-3">
            <div className="lazy-loading rounded-md w-full h-[34px]" />
            <div className="lazy-loading rounded-md w-[40%] h-[34px]" />
            <div className="lazy-loading rounded-md w-[65px] h-[28px]" />
          </div>
        ) : (
          <div className="px-3 md:px-0">
            <h1 className="mb-3 break-words text-xl leading-8 sm:text-2xl">
              {data?.post?.title}
            </h1>

            <div className="mb-4 flex flex-col sm:flex-row sm:space-x-1">
              <div className="mb-1 flex items-center sm:mb-0">
                <AvatarUser user={data?.post?.creator.username} size="28" />
              </div>
              <div className="flex grow items-center space-x-1 justify-between">
                <span className="ml-2 text-skin-link">
                  {data?.post?.creator.username}
                </span>
                <div className="flex items-center space-x-4">
                  <ButtonShare />
                  <ButtonMore
                    postId={data?.post?.id || 0}
                    username={data?.post?.creator.username || ""}
                  />
                </div>
              </div>
            </div>

            <Markdown source={data?.post?.content} />

            <div
              className={clsx(
                !inView ? "sticky flex bottom-3 justify-center" : "hidden"
              )}
            >
              <div className="bg-skin-bg text-skin-text shadow-lg h-[46px] px-[22px] rounded-[23px] flex items-center space-x-4">
                <ButtonReact
                  postId={data?.post?.id || 0}
                  type={ReactionTypes.Like}
                  reacts={data?.post?.likes}
                />
                <ButtonComment />
                <ButtonMore
                  postId={data?.post?.id || 0}
                  username={data?.post?.creator.username || ""}
                  position="center-top"
                />
              </div>
            </div>

            <div ref={observe} className="py-4 flex justify-between">
              <div className="flex items-center space-x-4">
                <ButtonReact
                  postId={data?.post?.id || 0}
                  type={ReactionTypes.Like}
                  reacts={data?.post?.likes}
                />
                <ButtonComment />
              </div>
              <div className="flex items-center space-x-4">
                <ButtonShare position="top-right" />
                <ButtonMore
                  postId={data?.post?.id || 0}
                  username={data?.post?.creator.username || ""}
                  position="top-right"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="float-right w-full lg:w-1/4">
        <div className="mb-4 lg:fixed lg:mb-0 lg:w-[240px]">
          <Block className="overflow-hidden">
            <div className="lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
              <div className="block px-4 pt-4 text-center md:flex lg:block lg:px-0 lg:pt-0">
                <div className="flex lg:block">
                  <AvatarUser
                    user={data?.post?.creator.username}
                    size="80"
                    className="lg:my-3"
                  />
                  <div className="mx-3 flex flex-col justify-center truncate text-left lg:block lg:text-center">
                    <h3 className="mb-[2px] flex items-center lg:justify-center">
                      <div className="mr-1 truncate">
                        {data?.post?.creator.username}
                      </div>
                    </h3>
                    <div className="mb-[12px] text-skin-text">2 followers</div>
                  </div>
                </div>

                <div className="flex flex-grow items-start justify-end gap-x-2 lg:mb-4 lg:justify-center">
                  <ButtonFollow />
                  <ButtonRounded className="inline">
                    <BellAlertIcon className="h-[1.2em] w-[1.2em]" />
                  </ButtonRounded>
                </div>
              </div>
            </div>
          </Block>
        </div>
      </div>
    </div>
  );
};

export default Post;
