module.exports.assertion = function (context, options) {
  this.message = `${context} passes SEO checklist`
  this.value = (result) => result
  this.expected = true
  this.pass = (result) => result
  this.command = (done) => {
    const assert = this.api.assert

    this.api.elements('tag name', `${context} h1`, (result) => {
      assert.ok(result.value.length <= 1, 'must not have more than one <h1/> per page')
    })

    this.api.elements('css selector', `${context} img`, (result) => {
      result.value.forEach((value) => {
        this.api.elementIdAttribute(value.ELEMENT, 'alt', (result) => {
          assert.ok(result.value !== '', 'images must contain alt text')
        })
      })
    })

    if (options.meta) {
      this.api.getTitle((value) => {
        // TODO: what's the length for French & other languages?
        assert.ok(value.length <= 65, '<title/> cannot exceed 65 characters')
        assert.ok(/- TELUS.com$/.test(value), '<title/> must have company name as suffix')
      })

      this.api.getAttribute('meta[name=description]', 'content', (result) => {
        // TODO: what's the length for French & other languages?
        assert.ok(result.value && result.value.length <= 155, 'description content must be 155 chars or less')
      })
    }
  }
}
