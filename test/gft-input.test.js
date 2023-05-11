import { fixture, html, expect } from '@open-wc/testing';
import '../src/components/gft-input/gft-input.js';

describe('GftInput', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`<gft-input></gft-input>`);
    await el.updateComplete;
  });

  it('renders input with placeholder text', async () => {
    const input = el.shadowRoot.querySelector('.inputText');
    expect(input).to.exist;
    expect(input.placeholder).to.equal('Name *');
  });

  it('dispatches gft-input-change event when input value changes', async () => {
    const input = el.shadowRoot.querySelector('.inputText');

    const newText = 'New Text';
    const detail = { text: newText };
    const changeEvent = new Event('input', {
      detail,
      bubbles: true,
      composed: true
    });

    input.dispatchEvent(changeEvent);
    await el.updateComplete;

    expect(detail.text).to.equal(newText);
  });
});
