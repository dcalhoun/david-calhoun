'use strict';

import {paths} from '../data';
import React from 'react';

module.exports = {
  getAllPosts: function () {
    return paths.allPosts();
  },

  getPost: function (slug) {
    return paths.postForPath(slug || this.props.params.slug);
  }
}
