'use strict'

const routes = [
  '/',
  '/writing',
  '/writing/developer-tools-homebrew',
  '/writing/migration-to-jekyll-my-journey-to-understanding-yeoman'
]

module.exports = {
  allPosts: function () {
    return routes.filter(function (route) {
      return /^\/writing\//.test(route)
    })
  },

  postForPath: function (path) {
    return this.postReq()(`./${path}.md`)
  },

  postReq: function () {
    return require.context('../../posts', false, /^\.\/.*\.md$/)
  },

  routes: routes
}
