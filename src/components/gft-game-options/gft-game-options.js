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

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('icon-clicked', this.handleIconClicked);
  }

  static _handleIconClicked(event) {
    console.log(event.detail.iconName);
    // Aquí puedes hacer lo que necesites con el evento recibido
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('icon-clicked', this.handleIconClicked);
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
