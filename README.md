[![npm](https://img.shields.io/npm/dt/@three11/dom-helpers.svg)](https://www.npmjs.com/package/@three11/dom-helpers)

# dom-helpers

Helper functions for faster DOM scripting

## Install

```
yarn add @three11/dom-helpers
```

or

```
npm i @three11/dom-helpers
```

## Usage

```
import * as helpers from '@three11/dom-helpers';
```

or

Import each function separately.

See functions list below.

or

Just download this repository and link the files located in dist folder:

```
<script src="dist/index.min.js"></script>
```

## Functions

*   `byID` - retrieves an element by ID
*   `single` - retrieves an element by a given valid css selector
*   `multi` - retrieves a collection of elements and normalizes the return value
*   `addListener` - attaches an event listener to element
