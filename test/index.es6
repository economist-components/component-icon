import Icon from '..';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

/* eslint react/no-danger: 0, id-match: 0 */
describe('Icon', () => {
  it('is compatible with React.Component', () => {
    Icon.should.be.a('function')
      .and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Icon icon="facebook"/>).should.equal(true);
  });

  describe('Rendering', () => {
    const renderer = TestUtils.createRenderer();
    it('renders a svg.Icon with an <use> tag', () => {
      renderer.render(<Icon icon="facebook"/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          width="60px"
          height="60px"
          aria-labelledby="title"
          role="img"
          dangerouslySetInnerHTML={{
            __html: '<title id="title">facebook icon</title><use ' +
              'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
              `xlink:href="/assets/icons.svg#facebook"` +
            '></use>',
          }}
        />
      );
    });

    it('renders "Icon-*" className based on this.props.icon', () => {
      renderer.render(<Icon icon="facebook"/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          width="60px"
          height="60px"
          aria-labelledby="title"
          role="img"
          dangerouslySetInnerHTML={{
            __html: '<title id="title">facebook icon</title><use ' +
              'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
              `xlink:href="/assets/icons.svg#facebook"` +
            '></use>',
          }}
        />
      );
    });

    it('adds this.props.className to svg className when supplied', () => {
      renderer.render(<Icon icon="facebook" className="facebook"/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook facebook"
          width="60px"
          height="60px"
          aria-labelledby="title"
          role="img"
          dangerouslySetInnerHTML={{
            __html: '<title id="title">facebook icon</title><use ' +
              'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
              `xlink:href="/assets/icons.svg#facebook"` +
            '></use>',
          }}
        />
      );
    });

    it('renders width/height based on this.props.size', () => {
      renderer.render(<Icon icon="facebook" size="10em"/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          width="10em"
          height="10em"
          aria-labelledby="title"
          role="img"
          dangerouslySetInnerHTML={{
            __html: '<title id="title">facebook icon</title><use ' +
              'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
              `xlink:href="/assets/icons.svg#facebook"` +
            '></use>',
          }}
        />
      );
    });

    it('renders fill attribute based on this.props.color', () => {
      renderer.render(<Icon icon="facebook" color="black"/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          fill="black"
          width="60px"
          height="60px"
          aria-labelledby="title"
          role="img"
          dangerouslySetInnerHTML={{
            __html: '<title id="title">facebook icon</title><use ' +
              'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
              `xlink:href="/assets/icons.svg#facebook"` +
            '></use>',
          }}
        />
      );
    });

    it('renders fill attribute based on this.props.color', () => {
      renderer.render(<Icon icon="facebook" color="black"/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          fill="black"
          width="60px"
          height="60px"
          aria-labelledby="title"
          role="img"
          dangerouslySetInnerHTML={{
            __html: '<title id="title">facebook icon</title><use ' +
              'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
              `xlink:href="/assets/icons.svg#facebook"` +
            '></use>',
          }}
        />
      );
    });

    it('renders style attribute based on this.props.background', () => {
      renderer.render(<Icon icon="facebook" background="url()"/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          style={{ background: 'url()' }}
          width="60px"
          height="60px"
          aria-labelledby="title"
          role="img"
          dangerouslySetInnerHTML={{
            __html: '<title id="title">facebook icon</title><use ' +
              'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
              `xlink:href="/assets/icons.svg#facebook"` +
            '></use>',
          }}
        />
      );
    });

    it('changes xlink:href based on this.props.uri', () => {
      renderer.render(<Icon icon="facebook" uri="/foo/bar.svg"/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <svg
          className="Icon Icon-facebook"
          width="60px"
          height="60px"
          aria-labelledby="title"
          role="img"
          dangerouslySetInnerHTML={{
            __html: '<title id="title">facebook icon</title><use ' +
              'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
              `xlink:href="/foo/bar.svg#facebook"` +
            '></use>',
          }}
        />
      );
    });

  });


});
