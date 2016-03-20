'use strict'

const routes = [
  '/',
  '/posts',
  '/posts/developer-tools-homebrew',
  '/posts/migration-to-jekyll-my-journey-to-understanding-yeoman'
]

module.exports = {
  allPosts: function () {
    return routes.filter(function (route) {
      return /^\/posts\//.test(route)
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
