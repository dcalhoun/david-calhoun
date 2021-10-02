import { Layout } from "../components/layout";
import { DESCRIPTION } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>
        Hi. 👋🏻 <br className="lg:hidden" />
        I’m David Calhoun.
      </h1>
      <p>
        I am a {DESCRIPTION}. Currently, I am a Senior Software Engineer at{" "}
        <a href="https://automattic.com/">Automattic</a> building Gutenberg, the
        block editor for the <a href="https://wordpress.org">WordPress</a>{" "}
        mobile <a href="https://apps.wordpress.com/mobile/">apps</a>. I am based
        in Nashville, TN.
      </p>
    </Layout>
  );
}
