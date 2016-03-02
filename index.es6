import React from 'react';

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
    return {
      className: '',
      uri: '/assets/icons.svg',
      size: '60px',
      rounded: false,
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
      ],
    };
  }

  render() {
    /* eslint "react/no-danger": 0 */
    let width = '';
    // Change ratio for The Economist original logo
    switch (this.props.icon) {
      case 'economist':
        width = `${ this.props.size.replace('px', '') * 2 }px`;
        break;
      default:
        width = this.props.size;
        break;
    }
    const props = {
      role: 'img',
      'aria-labelledby': 'title',
      className: `Icon Icon-${this.props.icon}`,
      dangerouslySetInnerHTML: {
        // use string literals here to avoid extraneous newlinw chars
        '__html':
          `<title id="title">${this.props.icon} icon</title>` +
          '<use ' +
          'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
          `xlink:href="${this.props.uri}#${this.props.icon}"` +
        '></use>',
      },
    };
    if (this.props.color) {
      props.fill = this.props.color;
    }
    if (this.props.size) {
      props.width = width;
      props.height = this.props.size;
    }
    if (this.props.className) {
      props.className += ` ${this.props.className}`;
    }
    let html = '';
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
      html = (
        <span className={`Icon--rounded ${props.className}`} {...roundedProps}>
          <svg {...props}/>
        </span>);
    } else {
      if (this.props.background) {
        props.style = { background: this.props.background };
      }
      html = (<svg {...props}/>);
    }
    return html;
  }
}
