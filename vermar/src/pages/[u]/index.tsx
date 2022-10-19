import { useRouter } from "next/router";
import type { NextPage } from "next";

const Post: NextPage = () => {
  const { query } = useRouter();

  return <h1>hello {query.u}</h1>;
};

export default Post;
