'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Icon = (function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    _React$Component.apply(this, arguments);
  }

  Icon.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.icon !== nextProps.icon || this.props.background !== nextProps.background || this.props.color !== nextProps.color || this.props.size !== nextProps.size || this.props.className !== nextProps.className || this.props.uri !== nextProps.uri;
  };

  Icon.prototype.render = function render() {
    /* eslint "react/no-danger": 0 */
    var width = '';
    // Change ratio for The Economist original logo
    switch (this.props.icon) {
      case 'economist':
        width = this.props.size.replace('px', '') * 2 + 'px';
        break;
      default:
        width = this.props.size;
        break;
    }
    var props = {
      role: 'img',
      'aria-labelledby': 'title',
      className: 'Icon Icon-' + this.props.icon,
      dangerouslySetInnerHTML: {
        // use string literals here to avoid extraneous newlinw chars
        '__html': '<title id="title">' + this.props.icon + ' icon</title>' + '<use ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + ('xlink:href="' + this.props.uri + '#' + this.props.icon + '"') + '></use>'
      }
    };
    if (this.props.color) {
      props.fill = this.props.color;
    }
    if (this.props.size) {
      props.width = width;
      props.height = this.props.size;
    }
    if (this.props.className) {
      props.className += ' ' + this.props.className;
    }
    var html = '';
    if (this.props.rounded) {
      var roundedProps = {
        style: {
          height: props.height,
          width: props.width
        }
      };
      if (this.props.background) {
        roundedProps.style.background = this.props.background;
      }
      html = _react2['default'].createElement(
        'span',
        _extends({ className: 'Icon--rounded ' + props.className }, roundedProps),
        _react2['default'].createElement('svg', props)
      );
    } else {
      if (this.props.background) {
        props.style = { background: this.props.background };
      }
      html = _react2['default'].createElement('svg', props);
    }
    return html;
  };

  _createClass(Icon, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        icon: _react2['default'].PropTypes.oneOf(Icon.options.icon).isRequired,
        background: _react2['default'].PropTypes.string,
        color: _react2['default'].PropTypes.string,
        size: _react2['default'].PropTypes.string,
        className: _react2['default'].PropTypes.string,
        uri: _react2['default'].PropTypes.string,
        rounded: _react2['default'].PropTypes.bool
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        className: '',
        uri: '/assets/icons.svg',
        size: '60px',
        rounded: false
      };
    }
  }, {
    key: 'options',
    get: function get() {
      return {
        icon: ['economist-small', 'economist', 'up', 'down', 'right', 'left', 'minus', 'plus', 'hamburger', 'home', 'magnifier', 'user', 'close', 'share', 'facebook', 'twitter', 'googleplus', 'instagram', 'linkedin', 'mail', 'rss', 'tumblr', 'whatsapp', 'youtube', 'bookmark', 'print', 'worldif', 'film', 'headset', 'video', 'apps', 'radio']
      };
    }
  }]);

  return Icon;
})(_react2['default'].Component);

exports['default'] = Icon;
module.exports = exports['default'];