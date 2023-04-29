import { LitElement, html } from 'lit';

import styles from './game-paper-lit-styles.js';
import './pages/homePage.js';

class GamePaperLit extends LitElement {
  static get styles() {
    return [styles];
  }

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="game-app">
        <h1 class="title">Piedra, Papel o Tijeras</h1>
        <home-page></home-page>
      </div>
    `;
  }
}

customElements.define('game-paper-lit', GamePaperLit);
