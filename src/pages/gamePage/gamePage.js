import { LitElement, html } from 'lit';

import '../../components/gft-disconnect/gft-disconnect.js';
import '../../components/gft-game-options/gft-game-options.js';
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

  _getTitleApp() {
    return html`<div class="titleGameUser">
    <gft-disconnect></gft-disconnect>
    <p>Name: <span>${this.playerName}</p>
    <div>Score: 2</div>
    <gft-game-options></gft-game-options>
    </div>`;
  }

  render() {
    return html` <div>${this._getTitleApp()}</div> `;
  }
}

customElements.define('game-page', GamePage);
