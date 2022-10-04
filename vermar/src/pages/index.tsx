import type { NextPage } from "next";
import { PostsList } from "../components/PostsList";

const Home: NextPage = () => {
  return (
    <div className="relative float-left w-full pr-0 lg:w-3/4 lg:pr-5">
      <PostsList />
    </div>
  );
};

export default Home;
