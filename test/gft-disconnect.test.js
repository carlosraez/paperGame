import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import { Router } from '@vaadin/router';
import '../src/components/gft-disconnect/gft-disconnect.js';

describe('gft-button-disconnect', () => {
  it('displays exit button', async () => {
    const el = await fixture(html`<gft-disconnect></gft-disconnect>`);
    const button = el.shadowRoot.querySelector('.exit-button');
    expect(button).to.exist;
  });

  it('redirects to home on exit button click', async () => {
    const goSpy = sinon.spy(Router, 'go');
    const el = await fixture(html`<gft-disconnect></gft-disconnect>`);
    const button = el.shadowRoot.querySelector('.exit-button');
    button.click();
    expect(goSpy).to.have.been.calledWith('/home');
    goSpy.restore();
  });
});
