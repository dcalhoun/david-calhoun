import Link from "next/link";
import { Layout } from "../../components/layout";

export default function Blog() {
  return (
    <Layout
      title="Blog | David Calhoun"
      description="David’s thoughts on software development."
    >
      <h1>Blog</h1>
      <div role="list">
        <Link href="/blog/building-software-together">
          <a className="block" role="listitem">
            Building Software Together
          </a>
        </Link>
        <Link href="/blog/using-yarn-on-elastic-beanstalk">
          <a className="block" role="listitem">
            Using Yarn on Elastic Beanstalk
          </a>
        </Link>
        <Link href="/blog/developer-tools-homebrew">
          <a className="block" role="listitem">
            Developer Tools: Homebrew
          </a>
        </Link>
        <Link href="/blog/migration-to-jekyll-understanding-yeoman">
          <a className="block" role="listitem">
            Migration to Jekyll: Understanding Yeoman
          </a>
        </Link>
      </div>
    </Layout>
  );
}
