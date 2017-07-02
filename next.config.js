const summary = require('./.posts/summary.json')

module.exports = {
  exportPathMap: function () {
    const posts = {}

    summary.fileMap && Object.keys(summary.fileMap)
      .forEach(file => {
        const page = file.replace(/\.json/, '')

        posts[page] = {
          page: '/post',
          query: {
            fullUrl: page
          }
        }
      })

    return Object.assign(
      {
        '/': { page: '/' }
      },
      posts
    )
  },
  webpack: function (config) {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  }
}
