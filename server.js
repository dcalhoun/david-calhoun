const next = require('next')
const { createServer } = require('http')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const args = {}
process.argv
  .slice(2, process.argv.length)
  .map(x => x.substring(2))
  .forEach(x => {
    const sep = x.indexOf('=')
    args[x.slice(0, sep)] = x.substring(sep + 1)
  })

app.prepare()
.then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (RegExp(/\/writing\/.+/).test(pathname)) {
      query.slug = pathname.split('/').pop()
      app.render(req, res, '/post', query)
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen(args.port || 3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${args.port || 3000}`)
  })
})
