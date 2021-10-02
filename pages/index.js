import { Layout } from "../components/layout";
import { DESCRIPTION } from "../components/layout";
import Image from "next/image";
import davidImage from "../public/david.jpg";

export default function Home() {
  return (
    <Layout>
      <h1>
        Hi. 👋🏻 <br />
        I’m David Calhoun.
      </h1>
      <Image
        alt="David Calhoun"
        className="rounded-2xl"
        placeholder="blur"
        src={davidImage}
      />
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
