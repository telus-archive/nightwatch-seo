const driver = require('chromedriver')
const server = require('./server')

module.exports = {
  abortOnAssertionFailure: false,

  before (done) {
    server.start(driver.start)
    done()
  },

  after (done) {
    server.stop(driver.stop)
    done()
  },

  port () {
    return server.port()
  }
}
