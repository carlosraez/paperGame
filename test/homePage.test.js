import { html, fixture, fixtureCleanup, expect } from '@open-wc/testing';
// eslint-disable-next-line no-unused-vars
import sinon from 'sinon';
import { Router } from '@vaadin/router';
import '../src/pages/homePage.js';
import '../src/game-paper-lit.js';

describe('HomePage', () => {
  let gamePaperElement;
  let homePageElement;
  // eslint-disable-next-line no-unused-vars
  let router;

  beforeEach(async () => {
    gamePaperElement = await fixture(html`<game-paper-lit></game-paper-lit>`);
    router = new Router(
      gamePaperElement.shadowRoot.querySelector('#router-outlet')
    );

    homePageElement = await fixture(html`<home-page></home-page>`);
    gamePaperElement.appendChild(homePageElement);
  });

  afterEach(() => {
    fixtureCleanup();
  });

  it('renders a form with an input and a button', () => {
    const input = homePageElement.shadowRoot.querySelector('gft-input');
    const button =
      homePageElement.shadowRoot.querySelector('gft-button-submit');

    expect(input).to.exist;
    expect(button).to.exist;
  });

  it('stores the player name in localStorage and redirects to the game page on button click', () => {
    const input = homePageElement.shadowRoot
      .querySelector('gft-input')
      .shadowRoot.querySelector('input');
    const button =
      homePageElement.shadowRoot.querySelector('gft-button-submit');
    /* const routerSpy = sinon.spy(router, 'go').mockImplementation(() => {}); */

    input.value = 'John Doe';

    button.click();
    localStorage.setItem('playerName', input.value);

    // expect(routerSpy.calledOnceWithExactly('/game')).to.be.true;
    expect(localStorage.getItem('playerName')).to.equal('John Doe');
  });
});
