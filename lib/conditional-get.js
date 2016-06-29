'use strict'

class ConditionalGet {
  optionDefinitions () {
    return {
      name: 'no-cache', alias: 'n', type: Boolean,
      description: 'Disable etag-based caching - forces loading from disk each request.'
    }
  }
  middleware (options) {
    if (!options['no-cache']) {
      return [
        require('koa-conditional-get')(),
        require('koa-etag')()
      ]
    }
  }
}

module.exports = ConditionalGet
