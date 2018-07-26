[![GitHub release](https://img.shields.io/github/release/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/dom-helpers.svg)](https://github.com/three11/dom-helpers/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/dom-helpers/dist/dom-helpers.min.js.svg)](https://github.com/three11/dom-helpers/)
[![Build Status](https://travis-ci.org/three11/dom-helpers.svg?branch=master)](https://travis-ci.org/three11/dom-helpers)
[![npm](https://img.shields.io/npm/dt/@three11/dom-helpers.svg)](https://www.npmjs.com/package/@three11/dom-helpers)
[![npm](https://img.shields.io/npm/v/@three11/dom-helpers.svg)](https://www.npmjs.com/package/@three11/dom-helpers)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/dom-helpers/README.md)](https://github.com/three11/dom-helpers/)
[![Greenkeeper badge](https://badges.greenkeeper.io/three11/dom-helpers.svg)](https://greenkeeper.io/)

# dom-helpers

Helper functions for faster DOM scripting

## Install

```sh
yarn add @three11/dom-helpers
```

or

```sh
npm i @three11/dom-helpers
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="path-to-dom-helpers/dist/dom-helpers.min.js"></script>
```

or

Include it from Unpkg CDN

```html
<script src="//unpkg.com/@three11/dom-helpers/dist/dom-helpers.min.js"></script>
```

## Usage

```javascript
import { $, $$, enableListeners } from '@three11/dom-helpers';
```

or

Import each function separately.

See functions list below:

## Functions

-   `$` - queries the DOM and obtains a single element
-   `$$` - queries the DOM and obtains a collection of elements
-   `enableListeners` - enables the custom `on` method for attaching of event listeners

After you query your element(s) you can use jQuery-like syntax to add event listeners. Example below:

```
enableListeners();

const button = $('#button');

button.on('click', () => {
    console.log('clicked a single button');
});

const buttons = $$('.button');

buttons.on('click', () => {
    console.log('clicked a button in a collection');
});
```

## License

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
