[![GitHub stars](https://img.shields.io/github/stars/three11/dom-helpers.svg?style=social&label=Stars)](https://github.com/three11/dom-helpers)
[![GitHub forks](https://img.shields.io/github/forks/three11/dom-helpers.svg?style=social&label=Fork)](https://github.com/three11/dom-helpers/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/dom-helpers/dist/index.min.js.svg)](https://github.com/three11/dom-helpers/)
[![Build Status](https://travis-ci.org/three11/dom-helpers.svg?branch=master)](https://travis-ci.org/three11/dom-helpers)
[![npm](https://img.shields.io/npm/dt/@three11/dom-helpers.svg)](https://www.npmjs.com/package/@three11/dom-helpers)
[![npm](https://img.shields.io/npm/v/@three11/dom-helpers.svg)](https://www.npmjs.com/package/@three11/dom-helpers)
[![license](https://img.shields.io/github/license/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/dom-helpers/README.md)](https://github.com/three11/dom-helpers/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/three11/dom-helpers/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/three11/dom-helpers/graphs/commit-activity)

[![ForTheBadge built-with-love](https://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/three11/) [![Greenkeeper badge](https://badges.greenkeeper.io/three11/dom-helpers.svg)](https://greenkeeper.io/)

# dom-helpers

Helper functions for faster DOM scripting

## Install

```console
yarn add @three11/dom-helpers
```

or

```console
npm i @three11/dom-helpers
```

## Usage

```javascript
import * as helpers from '@three11/dom-helpers';
```

or

Import each function separately.

See functions list below.

or

Just download this repository and link the files located in dist folder:

```html
<script src="dist/index.min.js"></script>
```

## Functions

*   `byID` - retrieves an element by ID
*   `single` - retrieves an element by a given valid css selector
*   `multi` - retrieves a collection of elements and normalizes the return value
*   `addListener` - attaches an event listener to element
