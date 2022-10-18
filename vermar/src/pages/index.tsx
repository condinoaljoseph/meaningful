import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import type { NextPage } from "next";
import { PostsList } from "../components/PostsList";
import { Block } from "../components/ui/Block";

const Home: NextPage = () => {
  return (
    <div className="lg:flex">
      <div className="relative w-full pr-0 lg:w-3/4 lg:pr-5">
        <PostsList />
      </div>

      <div className="w-full lg:w-4/12 lg:min-w-[321px]">
        <Block className="lg:fixed lg:w-[320px] mt-4 lg:mt-0">
          <ExclamationCircleIcon className="w-[1em] h-[1em] inline mr-1" />
          meaningful is still in the beta phase, things may break, please handle
          us with care.
        </Block>
      </div>
    </div>
  );
};

export default Home;
