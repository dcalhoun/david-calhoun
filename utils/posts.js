export const sortByDate = ({ fileMap }) => (
  fileMap && Object.keys(fileMap)
    .map(file => fileMap[file])
    .sort((a, b) => {
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
