# Nightwatch SEO [![version][npm-version]][npm-url] [![License][license-image]][license-url]

> **DEPRECATED** in favor of [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

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
**`titleRegExp`** | `RegExp` | `/.* - TELUS.com/` | `✖️`      | configurable regex for <title> assertions

## SEO Rules

This is a work in progress, checklist below indicates what has been implemented to date:

###### Layout

- `<h1/>`
  - [x] element should be unique and found only once per page

- `<img>`
  - [x] element should have `alt` attributes
  - [ ] element `src` attribute should be separated by underscores

###### Meta

- Page URL
  - [ ] URL phrase should be separated with dashes (`-`) between each word

- `<link rel="canonical">`
  - [ ] element should exist and be unique
  - [ ] element `href` attribute should not be empty
  - [ ] element `href` attribute should exclude provincial parameters, tracking codes and any other extra parameters & query strings

- `<title>`
  - [x] element should exists and be unique
  - [x] element should conform to pattern (` - TELUS.com`)
  - [x] element content length should be not exceed `65` characters

- `<meta name="description">`
  - [x] element should exists and be unique
  - [x] element content length should not exceed `155` characters

###### Social Meta

- `<meta property="og:title">`
  - [ ] element should exists and be unique
  - [ ] element should contain company domain name (`TELUS.com`)
  - [ ] element should use a spaced dash (` - `) to separate sections
  - [ ] element content length should be not exceed `65` characters

- `<meta property="og:description">`
  - [ ] element should exists and be unique
  - [ ] element content length should not exceed `155` characters

- `<meta property="og:url">`
  - [ ] element should exists and be unique
  - [ ] element `content` attribute should not be empty
  - [ ] element `content` attribute should exclude provincial parameters, tracking codes and any other extra parameters & query strings

- `<meta property="og:image">`
  - [ ] element should exist and be unique
  - [ ] element should contain an image URL that best represents the page

###### Structured Data

##### For product detail pages ie phones and accessories

- `"@type": "Product"`
  - [ ] element should exist

- `"name"`
  - [ ] element should exist

- `"description"`
  - [ ] element should exist

- `"image"`
  - [ ] element should exist

- `"brand"`
  - [ ] element should exist

- `"@type": "Offer"`
  - [ ] element should exist

- `"price"`
  - [ ] element should exist

- `"priceCurrency"`
  - [ ] element should exist

- `"availability"`
  - [ ] element should exist

- `"url"`
  - [ ] element should exist

##### For video content types

- `"@type": "VideoObject"`
  - [ ] element should exist

- `"name"`
  - [ ] element should exist

- `"description"`
  - [ ] element should exist

- `"thumbnailUrl"`
  - [ ] element should exist

- `"uploadDate"`
  - [ ] element should exist and in ISO 8601 format

---
> :copyright: [TELUS digital](https://labs.telus.com/) · 
> License: [ISC][license-url] · 
> Github: [@telusdigital](https://github.com/telusdigital) · 
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
