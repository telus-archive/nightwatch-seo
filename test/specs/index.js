module.exports = {
  'Success Demo': function (browser) {
    const port = browser.globals.port()

    browser
      .url(`http://localhost:${port}`)

      .assert.seo('html', { meta: true })

      .end()
  }
}
