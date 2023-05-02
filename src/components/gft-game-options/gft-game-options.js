import { LitElement, html } from 'lit';

import styles from './gft-game-options-style.js';

class GftGameOptions extends LitElement {
  constructor() {
    super();
    this.text = '';
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="containerOptions">
        <div class="img-container">
          <img src="" alt="Piedra" />
          <p>Piedra</p>
        </div>
        <div class="img-container">
          <img src="papel.png" alt="Papel" />
          <p>Papel</p>
        </div>
        <div class="img-container">
          <img src="tijera.png" alt="Tijera" />
          <p>Tijera</p>
        </div>
      </div>
    `;
  }
}

customElements.define('gft-game-options', GftGameOptions);
