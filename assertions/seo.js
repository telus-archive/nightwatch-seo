module.exports.assertion = function (context, options) {
  options = Object.assign({ meta: true }, options)

  this.message = `${context} passes SEO checklist`
  this.value = (result) => result
  this.expected = true
  this.pass = (result) => result
  this.command = (done) => {
    const assert = this.api.assert

    this.api.elements('tag name', `${context} h1`, (result) => {
      assert.ok(result.value.length <= 1, '<h1/> should be unique and found only once per page')
    })

    this.api.elements('css selector', `${context} img`, (result) => {
      result.value.forEach((value) => {
        this.api.elementIdAttribute(value.ELEMENT, 'alt', (result) => {
          assert.ok(result.value !== '', '<img/> should have `alt` attributes')
        })
      })
    })

    if (options.meta) {
      this.api.elements('tag name', 'title', (result) => {
        assert.ok(result.value.length === 1, '<title/> should exists and be unique')
      })

      this.api.getTitle((value) => {
        // TODO: what's the length for French & other languages?
        assert.ok(/TELUS.com$/.test(value), '<title/> should contain company domain name (`TELUS.com`)')
        assert.ok(/ - /.test(value), '<title/> should use a spaced dash (` - `) to separate sections')
        assert.ok(value.length <= 65, '<title/> content length should be not exceed `65` characters')
      })

      this.api.elements('css selector', 'meta[name=description]', (result) => {
        assert.ok(result.value.length === 1, '<meta name="description"> should exists and be unique')
      })

      this.api.getAttribute('meta[name=description]', 'content', (result) => {
        // TODO: what's the length for French & other languages?
        assert.ok(result.value && result.value.length <= 155, '<meta name="description"> content length should not exceed `155` characters')
      })
    }
  }
}
