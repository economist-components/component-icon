import React from 'react';
import Icon from './';

import { dirname } from 'path';
/* global window */
const base = typeof window === 'object' ? window.location.pathname : '';
let pathPrefix = '';
if (base === '/') {
  pathPrefix = '';
} else if (/\/$/.test(base)) {
  pathPrefix = base;
} else if (base) {
  pathPrefix = dirname(base);
} else {
  pathPrefix = '';
}

const svgUri = `${pathPrefix}/assets/icons.svg`;
export default (
  <div className="example">
   <p>Default version</p>
    <div>
      {Icon.options.icon.map((iconType) => {
        const key = `default--${iconType}`;
        return <Icon icon={iconType} uri={svgUri} key={key} />;
      })}
    </div>
    <p>Rounded</p>
    <div>
      {Icon.options.icon.map((iconType) => {
        const key = `rounded--${iconType}`;
        return (
            <Icon icon={iconType} uri={svgUri}
              color="white"
              background="black" key={key}
              rounded
            />);
      })
      }
    </div>
    <p>Icons in a background-image</p>
    <div>
      {Icon.options.icon.map((iconType) => {
        const className = `icon icon--${iconType}`;
        return (
            <span className={className} key={className}>
              Text for a11y and SEO purposes.
            </span>);
      })}
    </div>
    <p>Icons in a background-image (london color)</p>
    <div style={{ background: '#333' }}>
      {Icon.options.icon.map((iconType) => {
        const className = `icon icon--${iconType}-london`;
        if (iconType !== 'economist' && iconType !== 'economist-small') {
          return (
               <span className={className} key={className}>
                 Text for a11y and SEO purposes.
               </span>);
        }
      })}
    </div>
    <p>Icons in a background-image (chicago color)</p>
    <div style={{ background: '#333' }}>
      {Icon.options.icon.map((iconType) => {
        const className = `icon icon--${iconType}-chicago`;
        if (iconType !== 'economist' && iconType !== 'economist-small') {
          return (
               <span className={className} key={className}>
                 Text for a11y and SEO purposes.
               </span>);
        }
      })}
    </div>
  </div>
);
