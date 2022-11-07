import { Layout } from "../components/Layout";
import { PostsList } from "../components/PostsList";
import withApollo from "../utils/withApollo";

const Home = () => {
  return (
    <Layout>
      <div className="lg:flex">
        <div className="relative w-full pr-0 lg:w-3/4 lg:pr-5">
          <PostsList limit={10} />
        </div>
      </div>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
