'use strict'

module.exports = {
  truncate (str, max) {
    if (str.length <= max) {
      return str
    }

    let trunc = ''
    let subs = str.split('&')

    if (subs[0].length > max) {
      return subs[0].substring(0, max) + '&hellip;'
    } else {
      trunc = trunc + subs[0]
    }

    for (let i = 1; i < subs.length; i++) {
      let end = subs[i].indexOf('')
      max += end + 1
      trunc = trunc + '&' + subs[i]

      if (trunc.length >= max) {
        return trunc.substring(0, max) + '&hellip;'
      }
    }

    return trunc
  }
}
