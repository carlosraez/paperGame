import { LitElement, html } from 'lit';
import '../components/gft-disconnect/gft-disconnect.js';

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

  connectedCallback() {
    super.connectedCallback();
    this.playerName = localStorage.getItem('playerName');
  }

  render() {
    return html`
      <div>
        <p>Name: <span>${this.playerName}<span><gft-disconnect></gft-disconnect></p>
        <button>Game</button>
      </div>
    `;
  }
}

customElements.define('game-page', GamePage);
