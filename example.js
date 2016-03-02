'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _path = require('path');

/* global window */
var base = typeof window === 'object' ? window.location.pathname : '';
var pathPrefix = '';
if (base === '/') {
  pathPrefix = '';
} else if (/\/$/.test(base)) {
  pathPrefix = base;
} else if (base) {
  pathPrefix = _path.dirname(base);
} else {
  pathPrefix = '';
}

var svgUri = pathPrefix + '/assets/icons.svg';
exports['default'] = _react2['default'].createElement(
  'div',
  { className: 'example' },
  _react2['default'].createElement(
    'p',
    null,
    'Default version'
  ),
  _react2['default'].createElement(
    'div',
    null,
    _2['default'].options.icon.map(function (iconType) {
      var key = 'default--' + iconType;
      return _react2['default'].createElement(_2['default'], { icon: iconType, uri: svgUri, key: key });
    })
  ),
  _react2['default'].createElement(
    'p',
    null,
    'Rounded'
  ),
  _react2['default'].createElement(
    'div',
    null,
    _2['default'].options.icon.map(function (iconType) {
      var key = 'rounded--' + iconType;
      return _react2['default'].createElement(_2['default'], { icon: iconType, uri: svgUri,
        color: 'white',
        background: 'black', key: key,
        rounded: true
      });
    })
  ),
  _react2['default'].createElement(
    'p',
    null,
    'Icons in a background-image'
  ),
  _react2['default'].createElement(
    'div',
    null,
    _2['default'].options.icon.map(function (iconType) {
      var className = 'icon icon--' + iconType;
      return _react2['default'].createElement(
        'span',
        { className: className, key: className },
        'Text for a11y and SEO purposes.'
      );
    })
  ),
  _react2['default'].createElement(
    'p',
    null,
    'Icons in a background-image (london color)'
  ),
  _react2['default'].createElement(
    'div',
    { style: { background: '#333' } },
    _2['default'].options.icon.map(function (iconType) {
      var className = 'icon icon--' + iconType + '-london';
      if (iconType !== 'economist' && iconType !== 'economist-small') {
        return _react2['default'].createElement(
          'span',
          { className: className, key: className },
          'Text for a11y and SEO purposes.'
        );
      }
    })
  ),
  _react2['default'].createElement(
    'p',
    null,
    'Icons in a background-image (chicago color)'
  ),
  _react2['default'].createElement(
    'div',
    { style: { background: '#333' } },
    _2['default'].options.icon.map(function (iconType) {
      var className = 'icon icon--' + iconType + '-chicago';
      if (iconType !== 'economist' && iconType !== 'economist-small') {
        return _react2['default'].createElement(
          'span',
          { className: className, key: className },
          'Text for a11y and SEO purposes.'
        );
      }
    })
  )
);
module.exports = exports['default'];