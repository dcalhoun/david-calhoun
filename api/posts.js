const frontMatter = require('front-matter')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)
const postsDir = path.join(__dirname, '/../posts')

const deserialize = parsed => ({
  body: parsed.body,
  date: parsed.attributes.date,
  slug: slugify(parsed.attributes.title),
  title: parsed.attributes.title
})

const slugify = string => (
  string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
)

async function readAndDeserializeMarkdown (filename) {
  return deserialize(
    frontMatter(
      await readFile(path.join(postsDir, filename), 'utf-8')
    )
  )
}

async function fetch (slug) {
  if (slug) {
    const pp = slug + '.md'
    return readAndDeserializeMarkdown(pp)
  } else {
    const filenames = await readdir(postsDir)

    return new Promise((resolve, reject) => {
      Promise
        .all(filenames.map(readAndDeserializeMarkdown))
        .then(values => resolve(values))
    })
  }
}

exports.fetch = fetch
