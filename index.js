module.exports = MiddlewareBase => class ConditionalGet extends MiddlewareBase {
  description () {
    return 'Conditional GET support.'
  }
  optionDefinitions () {
    return {
      name: 'no-conditional-get',
      type: Boolean,
      description: 'Disable Conditional-GET caching. Force-loads resources from disk each request.'
    }
  }
  middleware (options) {
    if (!options.noConditionalGet) {
      return [
        require('koa-conditional-get')(),
        require('koa-etag')()
      ]
    }
  }
}
