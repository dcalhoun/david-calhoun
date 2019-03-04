import Analytics from "../components/Analytics";
import BlogPost from "../components/BlogPost";
import DarkMode from "../components/DarkMode";
import Layout from "../components/Layout";

export default props => {
  const post = require(`../.content/${props.url.query.slug}.json`);

  return (
    <Analytics>
      <DarkMode>
        <Layout title={`${post.title}`}>
          <BlogPost post={post} />
        </Layout>
      </DarkMode>
    </Analytics>
  );
};
