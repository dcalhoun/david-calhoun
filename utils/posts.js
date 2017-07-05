export const sortByDate = (posts) => (
  // TODO: This is now receiving an array, not the summary json. Figure out how to
  // display href and display a single post.
  posts.sort((a, b) => {
    const aDate = Date.parse(a.date)
    const bDate = Date.parse(b.date)

    if (aDate > bDate) {
      return -1
    }

    if (aDate < bDate) {
      return 1
    }

    return 0
  })
)

export const url = ({ dir, base }) => `writing/${base}`.replace(/\.json/g, '')
