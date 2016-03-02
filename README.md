# component-icon

React component that provides SVG icons from a hardcoded set

Includes a set of CSS backgrounds for rendering SVG, and color variations.

# How to use the CSS backgrounds

To use this you need to add `@import "@economist/component-icon";` and `@import "@economist/component-icon/backgrounds/ICONNAME.css";` to your postCSS.

Then, use the`.icon .icon--ICONNAME` classes on any element.


## How to use the color variations?

By default, the background icons are black.

To use a color variation, add `-COLORNAME` to the class name. For example, `icon icon-facebook` would become `icon icon-facebook-london`. If that color variation is not there (we don't want to add them all at once!), you need to change this project and publish it again with the new color there.


## I'm a developer. How do I add more colors?

Have a look at color-variations.json. Then, run the compile-backgrounds script to update the `backgrounds/*` file.


## Why do I have to import the color variation from the same file as the original icon?

(technical explanation)

It doesn't make the CSS heavier this way.

Gzip will deduplicate the color variation and the original, turning each variation into only a few more bytes than just the original. But only if they are close to each other. By forcing you to import both of them at the same time, I'm forcing them to be together in the output CSS file and thus save a lot of space!

This of course won't work if you encode the SVG in base64, so don't do it.

## Note for designers 

Please check wiki: https://github.com/economist-components/component-icon/wiki/Icon-use-when-exported-from-Sketch
