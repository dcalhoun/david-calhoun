import Link from "next/link";
import { Layout } from "../../components/layout";

export default function Writing() {
  return (
    <Layout
      title="Writing | David Calhoun"
      description="David’s thoughts on software development."
    >
      <main className="prose lg:prose-xl mx-auto">
        <h1>Writing</h1>
        <div role="list">
          <Link href="/writing/building-software-together">
            <a className="block" role="listitem">
              Building Software Together
            </a>
          </Link>
          <Link href="/writing/using-yarn-on-elastic-beanstalk">
            <a className="block" role="listitem">
              Using Yarn on Elastic Beanstalk
            </a>
          </Link>
          <Link href="/writing/developer-tools-homebrew">
            <a className="block" role="listitem">
              Developer Tools: Homebrew
            </a>
          </Link>
          <Link href="/writing/migration-to-jekyll-understanding-yeoman">
            <a className="block" role="listitem">
              Migration to Jekyll: Understanding Yeoman
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
