const posts = require('./.posts/summary.json')

function addPostEntry (post) {
  this[`/writing/${post.base.replace(/\.json/g, '')}`] = {
    page: '/post',
    query: {
      slug: post.base.replace(/\.json/g, '')
    }
  }
}

module.exports = {
  exportPathMap: () => {
    const entries = {}

    Object.keys(posts.fileMap)
      .map(file => posts.fileMap[file])
      .forEach(addPostEntry.bind(entries))

    return Object.assign(
      {
        '/': { page: '/' },
        '/writing': { page: '/writing' }
      },
      entries
    )
  },
  webpack: config => {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  }
}
