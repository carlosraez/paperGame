import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/gft-buttonSubmit/gft-button-submit.js';

describe('gft-button-submit', () => {
  const createButton = async (label, disabled) => {
    const el = await fixture(html`
      <gft-button-submit
        label="${label}"
        ?disabledButton="${disabled}"
      ></gft-button-submit>
    `);
    const button = el.shadowRoot.querySelector('.buttonJoin');
    return { el, button };
  };

  it('renders a button with the correct label and disabled state', async () => {
    const label = 'Join Game';
    const disabled = true;
    const { button } = await createButton(label, disabled);

    expect(button.innerText).to.equal(label);
    expect(button.disabled).to.equal(disabled);
  });

  it('dispatches a custom event when clicked', async () => {
    const label = 'Join Game';
    const disabled = true;
    const { el, button } = await createButton(label, disabled);

    const spy = sinon.spy();
    el.addEventListener('gft-button-click', spy);

    button.dispatchEvent(
      new CustomEvent('gft-button-click', {
        composed: true,
        bubbles: true
      })
    );

    expect(spy).to.have.been.calledOnce;
  });
});
