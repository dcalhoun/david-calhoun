export const sortByDate = ({ fileMap: posts }) =>
  Object.keys(posts)
    .map(file => posts[file])
    .sort((a, b) => {
      const aDate = Date.parse(a.date);
      const bDate = Date.parse(b.date);

      switch (true) {
        case aDate > bDate:
          return -1;
        case aDate < bDate:
          return 1;
        default:
          return 0;
      }
    });

export const slug = ({ base }) => base.replace(/\.json/g, "");

export const url = post => `/writing/${slug(post)}`;
