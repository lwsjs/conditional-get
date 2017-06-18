'use strict'

module.exports = MiddlewareBase => class ConditionalGet extends MiddlewareBase {
  description () {
    return 'Conditional GET support.'
  }
  optionDefinitions () {
    return {
      name: 'no-cache',
      alias: 'n',
      type: Boolean,
      description: 'Disable etag-based caching - forces loading from disk each request.'
    }
  }
  middleware (options) {
    if (!options.noCache) {
      return [
        require('koa-conditional-get')(),
        require('koa-etag')()
      ]
    }
  }
}
