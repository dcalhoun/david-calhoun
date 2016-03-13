const routes = [
  '/',
  '/posts',
  '/posts/developer-tools-homebrew',
  '/posts/migration-to-jekyll-my-journey-to-understanding-yeoman'
];

const paths = {
  allPosts: function () {
    return routes.filter(function (route) {
      return /^\/posts\//.test(route);
    });
  },
  
  postForPath: function (path) {
    return this.postReq()(`./${path}.md`);
  },

  postReq: function () {
    return require.context('./posts', false, /^\.\/.*\.md$/);
  }
};

module.exports = {
  byline: 'David Calhoun is a designer/developer specializing in front-end architecture and UX \
          design. He is experienced with Ember.js, React.js, Backbone.js, and Ruby on Rails. He is \
          currently a Senior Front-End Engineer at GoNoodle in Nashville, TN.',
  paths: paths,
  routes: routes,
  title: 'David Calhoun, Design & Developer'
}
