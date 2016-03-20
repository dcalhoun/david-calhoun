'use strict'

import paths from '../shared/utils/paths'

module.exports = {
  getAllPosts: function () {
    return paths.allPosts()
  },

  getPost: function (slug) {
    return paths.postForPath(slug || this.props.params.slug)
  }
}
