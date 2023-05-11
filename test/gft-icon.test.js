import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/gft-icon/gft-icon.js';

describe('GftIcon', () => {
  describe('when clickDisabled is true', () => {
    let el;

    beforeEach(async () => {
      el = await fixture(html`
        <gft-icon
          name="lens"
          iconOptionGameClass
          iconId="stone"
          clickDisabled
        ></gft-icon>
      `);
      await el.updateComplete;
    });

    it('renders icon with correct properties', async () => {
      const { shadowRoot } = el;

      const button = shadowRoot.querySelector('button');

      expect(button).to.exist;
      expect(button.classList.contains('iconContainer')).to.be.true;
      expect(button.hasAttribute('disabled')).to.be.true;

      const span = shadowRoot.querySelector('span');
      expect(span).to.exist;
      expect(span.textContent).to.equal('lens');
    });

    it('does not emit event when clicked', async () => {
      const handleClick = sinon.spy();
      el.addEventListener('icon-clicked', handleClick);
      const button = el.shadowRoot.querySelector('button');
      button.click();
      expect(handleClick).to.have.not.been.called;
    });
  });

  describe('when clickDisabled is false', () => {
    let el;

    beforeEach(async () => {
      el = await fixture(html`
        <gft-icon
          name="lens"
          iconOptionGameClass
          iconId="stone"
          .clickDisabled=${false}
        ></gft-icon>
      `);
      await el.updateComplete;
    });

    it('renders icon with correct properties', async () => {
      const { shadowRoot } = el;

      const button = shadowRoot.querySelector('button');

      expect(button).to.exist;
      expect(button.classList.contains('iconContainer')).to.be.true;
      expect(button.hasAttribute('disabled')).to.be.false;

      const span = shadowRoot.querySelector('span');
      expect(span).to.exist;
      expect(span.textContent).to.equal('lens');
    });

    it('emits event when clicked', async () => {
      const handleClick = sinon.spy();
      el.addEventListener('icon-clicked', handleClick);
      const button = el.shadowRoot.querySelector('button');
      button.click();
      expect(handleClick).to.have.been.calledOnce;
      const event = handleClick.getCall(0).args[0];
      expect(event.detail.iconName).to.equal('stone');
    });
  });
});
