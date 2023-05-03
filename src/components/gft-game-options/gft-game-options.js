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
          <gft-icon name="exit_to_app"></gft-icon>
          <p>Papel</p>
        </div>
        <div class="img-container">
          <gft-icon name="exit_to_app"></gft-icon>
          <p>Papel</p>
        </div>
        <div class="img-container">
          <gft-icon name="exit_to_app"></gft-icon>
          <p>Tijera</p>
        </div>
      </div>
    `;
  }
}

customElements.define('gft-game-options', GftGameOptions);
