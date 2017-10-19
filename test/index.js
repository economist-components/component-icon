import 'babel-polyfill';
import Icon, { config as configIcon } from '../src';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import chai from 'chai';
chai.should();

const renderer = new ShallowRenderer();
/* eslint react/no-danger: 0, id-match: 0 */
describe('Icon', () => {
  it('is compatible with React.Component', () => {
    Icon.should.be.a('function')
      .and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Icon icon="facebook" />).should.equal(true);
  });

  describe('config Icon', () => {
    before(() => configIcon({
      className: 'foo',
      uri: '/foo/bar.lel',
      size: '1337px',
    }));

    // Clean up
    after(() => configIcon({}));

    it('renders a svg.Icon with an <use> tag with diff defaultProps', () => {
      renderer.render(<Icon icon="facebook" />, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook foo"
          width="1337px"
          height="1337px"
          role="img"
        >
          <title>facebook icon</title>
          <use xlinkHref="/foo/bar.lel#facebook" />
        </svg>
      );
    });

  });

  describe('Rendering', () => {
    it('renders a svg.Icon with an <use> tag', () => {
      renderer.render(<Icon icon="facebook" />, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          width="60px"
          height="60px"
          role="img"
        >
          <title>facebook icon</title>
          <use xlinkHref="/assets/icons.svg#facebook" />
        </svg>
      );
    });

    it('renders "Icon-*" className based on this.props.icon', () => {
      renderer.render(<Icon icon="facebook" />, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          width="60px"
          height="60px"
          role="img"
        >
          <title>facebook icon</title>
          <use xlinkHref="/assets/icons.svg#facebook" />
        </svg>
      );
    });

    it('adds this.props.className to svg className when supplied', () => {
      renderer.render(<Icon icon="facebook" className="facebook" />, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook facebook"
          width="60px"
          height="60px"
          role="img"
        >
          <title>facebook icon</title>
          <use xlinkHref="/assets/icons.svg#facebook" />
        </svg>
      );
    });

    it('renders width/height based on this.props.size', () => {
      renderer.render(<Icon icon="facebook" size="10em" />, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          width="10em"
          height="10em"
          role="img"
        >
          <title>facebook icon</title>
          <use xlinkHref="/assets/icons.svg#facebook" />
        </svg>
      );
    });

    it('renders fill attribute based on this.props.color', () => {
      renderer.render(<Icon icon="facebook" color="black" />, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          fill="black"
          width="60px"
          height="60px"
          role="img"
        >
          <title>facebook icon</title>
          <use xlinkHref="/assets/icons.svg#facebook" />
        </svg>
      );
    });

    it('renders style attribute based on this.props.background', () => {
      renderer.render(<Icon icon="facebook" background="url()" />, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          style={{ background: 'url()' }}
          width="60px"
          height="60px"
          role="img"
        >
          <title>facebook icon</title>
          <use xlinkHref="/assets/icons.svg#facebook" />
        </svg>
      );
    });

    it('changes xlink:href based on this.props.uri', () => {
      renderer.render(<Icon icon="facebook" uri="/foo/bar.svg" />, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          width="60px"
          height="60px"
          role="img"
        >
          <title>facebook icon</title>
          <use xlinkHref="/foo/bar.svg#facebook" />
        </svg>
      );
    });

  });

  describe('Rendering:custom biz rules', () => {
    it('renders economist icon with the title "the economist" and width shoud be multiplied by 2', () => {
      renderer.render(<Icon icon="economist" />, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-economist"
          width="120px"
          height="60px"
          role="img"
        >
          <title>the economist</title>
          <use xlinkHref="/assets/icons.svg#economist" />
        </svg>
      );
    });

  });

});
