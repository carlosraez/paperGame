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
        <gft-icon name="lens" iconOptionGameClass></gft-icon>
        <gft-icon name="back_hand" iconOptionGameClass></gft-icon>
        <gft-icon name="content_cut" iconOptionGameClass></gft-icon>
      </div>
    `;
  }
}

customElements.define('gft-game-options', GftGameOptions);
