import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import RSS from "rss";
import matter from "gray-matter";
import { sortByPostPublishDateString } from "../lib/post.js";
import { NAME, SITE_URL } from "../lib/constants.mjs";
import { micromark } from "micromark";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function generate() {
  const feed = new RSS({
    title: NAME,
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`,
  });

  const postSlugs = await fs.readdir(join(__dirname, "..", "pages", "blog"));

  const posts = await Promise.all(
    postSlugs.map(async (name) => {
      if (name.startsWith("index.")) return;

      const content = await fs.readFile(
        join(__dirname, "..", "pages", "blog", name)
      );
      const frontMatter = matter(content, {
        excerpt: true,
        // TODO: Use a normal HTML or JS comment excerpt when Nextra's release
        // includes a MDX lodaer version that supports it.
        excerpt_separator:
          '<span id="end-excerpt" class="hidden" aria-hidden="true"></span>',
      });

      return {
        title: frontMatter.data.title,
        url: SITE_URL + "/blog/" + name.replace(/\.mdx?/, ""),
        date: frontMatter.data.date,
        description: micromark(frontMatter.excerpt),
        author: NAME,
      };
    })
  );

  posts.sort(sortByPostPublishDateString).forEach((post) => feed.item(post));

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
