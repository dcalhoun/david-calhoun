import { Layout } from "../components/layout";

export default function Links() {
  return (
    <Layout title="Links" description="Links about David Calhoun.">
      <main className="prose lg:prose-xl mx-auto px-2">
        <h1>Links</h1>
        <ul>
          <li>
            <a href="https://github.com/dcalhoun">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/davidpcalhoun/">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/david_calhoun">Twitter</a>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
