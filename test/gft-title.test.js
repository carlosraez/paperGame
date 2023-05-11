import { fixture, html, expect } from '@open-wc/testing';
import '../src/components/gft-title/gft-title.js';

describe('GftTitle', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`<gft-title></gft-title>`);
    await el.updateComplete;
  });

  it('renders the component', () => {
    const container = el.shadowRoot.querySelector('.containerTitle');
    const icon = el.shadowRoot.querySelector('gft-icon');
    const title = el.shadowRoot.querySelector('.titleText');

    expect(container).to.exist;
    expect(icon).to.exist;
    expect(title).to.exist;
  });

  it('renders the correct title text', () => {
    const title = el.shadowRoot.querySelector('.titleText');

    expect(title.textContent.trim()).to.equal('Create new Player');
  });

  it('renders the correct icon', () => {
    const icon = el.shadowRoot.querySelector('gft-icon');

    expect(icon.getAttribute('name')).to.equal('videogame_asset');
  });
});
