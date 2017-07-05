const next = require('next')
const postsApi = require('./api/posts')
const { createServer } = require('http')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const serialize = data => JSON.stringify({ data })

app.prepare()
.then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname.includes('/api/')) {
      const posts = await postsApi.fetch(query.slug)

      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(serialize(posts))
    } else if (RegExp(/\/writing\/.+/).test(pathname)) {
      query.slug = pathname.split('/').pop()
      app.render(req, res, '/post', query)
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
