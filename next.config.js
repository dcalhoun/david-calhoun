function addPostEntry (slug) {
  this[`/writing/${slug}`] = { page: '/post', query: { slug } }
}

module.exports = {
  exportPathMap: () => {
    const slugs = [
      'developer-tools-homebrew',
      'migration-to-jekyll-my-journey-to-understanding-yeoman'
    ]

    const entries = {}
    slugs.forEach(addPostEntry.bind(entries))

    return Object.assign(
      {
        '/': { page: '/' },
        '/writing': { page: '/writing' }
      },
      entries
    )
  },
  webpack: (config) => {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  }
}
