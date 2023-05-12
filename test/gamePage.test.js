import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import { LocalStorage } from 'mock-local-storage';

import '../src/components/gft-disconnect/gft-disconnect.js';
import '../src/components/gft-game-options/gft-game-options.js';
import '../src/pages/gamePage/gamePage.js';

describe('GamePage', () => {
  let component;

  beforeEach(async () => {
    const localStorageMock = new LocalStorage();

    global.localStorage = localStorageMock;
    const gameData = {
      playerName: 'test-player',
      score: 5,
      result: 'test-result',
      botSelection: 'paper'
    };
    localStorage.setItem('gameData', JSON.stringify(gameData));
    component = await fixture(html`<game-page></game-page>`);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should display the correct game state when loading from localStorage', async () => {
    expect(component.playerName).to.equal('test-player');
    expect(component.score).to.equal(5);
    expect(component.result).to.equal('test-result');
    expect(component.botSelection).to.equal('paper');

    localStorage.removeItem('gameData');
  });
});
