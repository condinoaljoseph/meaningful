import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ButtonShare } from "../../components/ButtonShare";
import { Avatar } from "../../components/ui/Avatar";
import { Markdown } from "../../components/ui/Markdown";
import { usePostQuery } from "../../generated/graphql";

// "Ipsum dolor sit amet consectetur adipisicing elit. Tempora, officia officiis est, quod sint labore repellat nemo consequatur vel nihil voluptatem nesciunt omnis ipsum ipsa dolore alias eos, tempore illo?\n ```js\n console.log('hello world');\n console.log('testing')\n```\n Tempora, officia officiis est, quod sint labore repellat nemo consequatur vel nihil voluptatem nesciunt omnis ipsum ipsa dolore alias eos, tempore illo?";

const Post: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, loading } = usePostQuery({
    variables: { id: parseInt(id as string) },
  });

  if (!data && loading) return null;

  return (
    <div className="lg:flex">
      <div className="relative float-left w-full pr-0 lg:w-3/4 lg:pr-5">
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
      </div>
    </div>
  );
};

export default Post;
