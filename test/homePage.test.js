import { html, fixture, fixtureCleanup, expect } from '@open-wc/testing';
import '../src/pages/homePage/homePage.js';
import '../src/game-paper-lit.js';

describe('HomePage', () => {
  let homePageElement;

  beforeEach(async () => {
    homePageElement = await fixture(html`<home-page></home-page>`);
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

    input.value = 'John Doe';

    button.click();

    localStorage.setItem('playerName', input.value);

    expect(localStorage.getItem('playerName')).to.equal('John Doe');
  });
});
