const prod = process.env.NODE_ENV === 'production'

module.exports = {
  __DEV__: !prod,
  __ENV__: {
    analyticsId: 'UA-8230270-3'
  }
}
