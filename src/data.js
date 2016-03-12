import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const dir = './src/posts';

const filenames = fs.readdirSync(dir)
  .filter(function (filename) {
    return !/^\./.test(filename);
  })

const posts = filenames.map(function (filename) {
  let content = fs.readFileSync(path.join(dir, filename), 'utf8');
  let matter = fm(content);
  let post = {
    // ...matter.attributes,
    slug: filename.replace(/\.md/, ''),
    body: matter.body
  };

  return post;
}).sort(function (a, b) {
  return new Date(b.created) - new Date(a.created);
});

const routes = filenames.map(function (filename) {
  return '/posts/' + filename.replace(/\.md$/, '')
});

routes.unshift('/posts');
routes.unshift('/');

module.exports = {
  byline: 'David Calhoun is a designer/developer specializing in front-end architecture and UX \
          design. He is experienced with Ember.js, React.js, Backbone.js, and Ruby on Rails. He is \
          currently a Senior Front-End Engineer at GoNoodle in Nashville, TN.',
  posts: posts,
  routes: routes,
  title: 'David Calhoun, Design & Developer'
}
