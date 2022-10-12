import { BellAlertIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ButtonShare } from "../../components/ButtonShare";
import { Avatar } from "../../components/ui/Avatar";
import { Block } from "../../components/ui/Block";
import { Button } from "../../components/ui/Button";
import { ButtonRounded } from "../../components/ui/ButtonRounded";
import { Markdown } from "../../components/ui/Markdown";
import { usePostQuery } from "../../generated/graphql";

const Post: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, loading } = usePostQuery({
    variables: { id: parseInt(id as string) },
  });
  return (
    <div className="lg:flex">
      <div className="relative float-left w-full pr-0 lg:w-3/4 lg:pr-5">
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
                <Avatar
                  src="https://avatars.githubusercontent.com/u/41994701?v=4"
                  size="28"
                />
              </div>
              <div className="flex grow items-center space-x-1">
                <span className="ml-2 text-skin-link">dern</span>
                <div className="inline-block h-full text-left !ml-auto pl-3">
                  <ButtonShare />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-0 h-[80px] w-full" />
              <Markdown source={data?.post?.content} />
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
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/41994701?v=4"
                    size="80"
                    className="lg:my-3"
                  />
                  <div className="mx-3 flex flex-col justify-center truncate text-left lg:block lg:text-center">
                    <h3 className="mb-[2px] flex items-center lg:justify-center">
                      <div className="mr-1 truncate">dern</div>
                    </h3>
                    <div className="mb-[12px] text-skin-text">2 followers</div>
                  </div>
                </div>

                <div className="flex flex-grow items-start justify-end gap-x-2 lg:mb-4 lg:justify-center">
                  <Button primary>Follow</Button>
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
