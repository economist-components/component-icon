[![By:Economist](
  https://img.shields.io/badge/By-Economist-e3120b.svg?style=flat-square
)](
  http://www.economist.com/
)[![Build Status](
  https://img.shields.io/npm/v/@economist%2Fcomponent-icon.svg?style=flat-square
)](
  https://www.npmjs.com/package/@economist%2Fcomponent-icon
)[![Build Status](
  https://img.shields.io/travis/economist-components/component-icon/master.svg?style=flat-square
)](
  https://travis-ci.org/economist-components/component-icon/branches
)[![Coverage Status](
  https://img.shields.io/coveralls/economist-components/component-icon/master.svg?style=flat-square
)](
  https://coveralls.io/github/economist-components/component-icon?branch=master
)

# Icon
> Provides SVG icons images, and classes with SVG background-images.

## Usage

### How to use the CSS backgrounds

To use this you need to add `@import "@economist/component-icon";` and `@import "@economist/component-icon/backgrounds/ICONNAME.css";` to your postCSS.

Then, use the`.icon .icon--ICONNAME` classes on any element.

### How to use the color variations?

By default, the background icons are black.

To use a color variation, add `-COLORNAME` to the class name. For example, `icon icon-facebook` would become `icon icon-facebook-london`. If that color variation is not there (we don't want to add them all at once!), you need to change this project and publish it again with the new color there.

### How to use inline icons?

To inline icon to your HTML, import React component and use it in your code. Each icon is available by name as a single component and takes `className` as an argument. 

Icon does not have default styles.

Example:
```js
import IconTwitter from '@economist/component-icon/lib/inline-icons/twitter';

...

<IconTwitter className="myIcon" />

```


## Install

```bash
npm i -S @economist/component-icon
```

## Run tests

```bash
npm test
```

## FAQ

### I'm a developer. How do I add more colors?

Have a look at color-variations.json. Then, run the compile-backgrounds script to update the `backgrounds/*` file.

### I'm a designer. How do I export a Sketch file to the icons properly?

.svg exported from Sketch worked only after removing sketch:type="MSShapeGroup" attribute. Also, remember there should be no grouped elements in your asset.

## Why do I have to import the color variation from the same file as the original icon?

(technical explanation)

It doesn't make the CSS heavier this way.

Gzip will deduplicate the color variation and the original, turning each variation into only a few more bytes than just the original. But only if they are close to each other. By forcing you to import both of them at the same time, I'm forcing them to be together in the output CSS file and thus save a lot of space!

This of course won't work if you encode the SVG in base64, so don't do it.
