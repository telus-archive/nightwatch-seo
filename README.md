# Nightwatch SEO [![version][npm-version]][npm-url] [![License][license-image]][license-url]

> Nightwatch.js utility assertion for SEO testing in accordance to TELUS digital [SEO rules](#seo-rules)

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
# using npm
npm install --only=production --save @telusdigital/nightwatch-seo

# using yarn
yarn add @telusdigital/nightwatch-seo --dev
```

## Usage

Update your nightwatch config:

```js
{
  custom_assertions_path: ["./node_modules/@telusdigital/nightwatch-seo/assertions"]
}
```

Use in your tests:

```js
module.exports = {
  'Test': function (browser) {
    browser.assert.seo('#app', {
      scoped: true
    })
  }
}
```

## API

### `browser.assert.seo(context, options)`

Analyzes the defined `context` against [SEO rules](#seo-rules)

Name          | Type     | Default  | Required | Description
------------- | -------- | -------- | -------- | -----------
**`context`** | `String` | `'html'` | `✖️`      | A CSS selector that selects the portion(s) of the document that must be analyzed
**`options`** | `Object` | `null`   | `✖️`      | configure how SEO assertion operates

#### `options`

Name       | Type      | Default | Required | Description
---------- | --------- | ------- | -------- | -----------
**`meta`** | `Boolean` | `false` | `✖️`      | check page meta

## SEO Rules

---
> :copyright: [TELUS digital](https://labs.telus.com/)  · 
> License: [ISC][license-url]  · 
> Github: [@telusdigital](https://github.com/telusdigital)  · 
> Twitter: [@telusdigital](https://twitter.com/telusdigital)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/telusdigital/nightwatch-seo.svg?style=flat-square

[travis-url]: https://travis-ci.org/telusdigital/nightwatch-seo
[travis-image]: https://img.shields.io/travis/telusdigital/nightwatch-seo.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@telusdigital/nightwatch-seo
[npm-version]: https://img.shields.io/npm/v/@telusdigital/nightwatch-seo.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/@telusdigital/nightwatch-seo.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/telusdigital/nightwatch-seo
[codeclimate-quality]: https://img.shields.io/codeclimate/github/telusdigital/nightwatch-seo.svg?style=flat-square

[david-url]: https://david-dm.org/telusdigital/nightwatch-seo
[david-image]: https://img.shields.io/david/telusdigital/nightwatch-seo.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/telusdigital/nightwatch-seo
[dependencyci-image]: https://dependencyci.com/github/telusdigital/nightwatch-seo/badge?style=flat-square
