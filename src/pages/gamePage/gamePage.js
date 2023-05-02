import { LitElement, html } from 'lit';

import '../../components/gft-disconnect/gft-disconnect.js';
import styles from './gamePage-styles.js';

class GamePage extends LitElement {
  static get properties() {
    return {
      playerName: { type: String }
    };
  }

  constructor() {
    super();
    this.playerName = '';
  }

  static get styles() {
    return [styles];
  }

  connectedCallback() {
    super.connectedCallback();
    this.playerName = localStorage.getItem('playerName');
  }

  render() {
    return html`
      <div>
        <div class="titleGameUser">
        <p>Name: <span>${this.playerName}</p>
        <p><gft-disconnect></gft-disconnect></p>
        </div>
        <button>Game</button>
      </div>
    `;
  }
}

customElements.define('game-page', GamePage);
