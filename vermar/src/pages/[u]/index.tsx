import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import withApollo from "../../utils/withApollo";

const Post = () => {
  const { query } = useRouter();

  return (
    <Layout>
      <h1>hello {query.u}</h1>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Post);
