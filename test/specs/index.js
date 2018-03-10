module.exports = {
  'Success Demo': function (browser) {
    const port = browser.globals.port()

    browser
      .url(`http://localhost:${port}`)

      .waitForElementVisible('h1', 3000)

      .assert.containsText('h1', 'Hello World')

      .assert.seo('html', { meta: true })

      .end()
  }
}
