import { Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <main className="prose lg:prose-xl mx-auto">
        <h1>
          David Calhoun is a software engineer with a passion for good UX design
          & scalable architecture.
        </h1>

        <p>
          Senior Software Engineer at{" "}
          <a href="https://automattic.com/">Automattic</a>. Based in Nashville,
          TN.
        </p>
      </main>
    </Layout>
  );
}
