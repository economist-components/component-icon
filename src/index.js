import React from 'react';

let configObj = {};
export function config(opts) {
  configObj = opts;
}

export default class Icon extends React.Component {

  static get propTypes() {
    return {
      icon: React.PropTypes.oneOf(Icon.options.icon).isRequired,
      background: React.PropTypes.string,
      color: React.PropTypes.string,
      size: React.PropTypes.string,
      className: React.PropTypes.string,
      uri: React.PropTypes.string,
      rounded: React.PropTypes.bool,
    };
  }

  static get defaultProps() {
    const defaultConfig = {
      className: '',
      uri: '/assets/icons.svg',
      size: '60px',
      rounded: false,
    };
    return Object.assign(defaultConfig, configObj);
  }

  static get options() {
    return {
      icon: [
        'economist-small',
        'economist',
        'up',
        'down',
        'right',
        'left',
        'minus',
        'plus',
        'hamburger',
        'home',
        'magnifier',
        'user',
        'close',
        'share',
        'facebook',
        'twitter',
        'googleplus',
        'instagram',
        'linkedin',
        'mail',
        'rss',
        'tumblr',
        'whatsapp',
        'youtube',
        'bookmark',
        'print',
        'worldif',
        'film',
        'headset',
        'video',
        'apps',
        'radio',
        'balloon',
        'camera',
        'more',
        'reprints',
      ],
    };
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.icon !== nextProps.icon ||
      this.props.background !== nextProps.background ||
      this.props.color !== nextProps.color ||
      this.props.size !== nextProps.size ||
      this.props.className !== nextProps.className ||
      this.props.uri !== nextProps.uri
    );
  }

  render() {
    /* eslint "react/no-danger": 0 */
    let width = '';
    let iconTitle = [
      this.props.icon,
      'icon',
    ].join(' ');
    // Change ratio for The Economist original logo
    switch (this.props.icon) {
      case 'economist':
        width = `${ this.props.size.replace('px', '') * 2 }px`;
        iconTitle = 'the economist';
        break;
      default:
        width = this.props.size;
        break;
    }

    const props = {
      role: 'img',
      className: `Icon Icon-${ this.props.icon }`,
    };
    if (this.props.color) {
      props.fill = this.props.color;
    }
    if (this.props.size) {
      props.width = width;
      props.height = this.props.size;
    }
    if (this.props.className) {
      props.className += ` ${ this.props.className }`;
    }
    if (this.props.background) {
      props.style = { background: this.props.background };
    }
    const svg = (
      <svg {...props} >
        <title>{iconTitle}</title>
        <use xlinkHref={`${ this.props.uri }#${ this.props.icon }`} />
      </svg>
    );
    if (this.props.rounded) {
      const roundedProps = {
        style: {
          height: props.height,
          width: props.width,
        },
      };
      if (this.props.background) {
        roundedProps.style.background = this.props.background;
      }
      return (
        <span className={`Icon--rounded ${ props.className }`} {...roundedProps}>
          {svg}
        </span>
      );
    }

    return svg;
  }
}
