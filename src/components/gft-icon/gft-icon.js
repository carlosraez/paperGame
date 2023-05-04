import { LitElement, html } from 'lit';

import styles from './gft-icon-style.js';

class GftIcon extends LitElement {
  static get properties() {
    return {
      /**
       * Nombre del icono.
       * @type {String}
       */
      name: { type: String },
      /**
       * Indica si se debe agregar la clase 'iconContainer'.
       * @type {Boolean}
       */
      iconOptionGameClass: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.name = '';
    this.iconOptionGameClass = false;
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`<div class="iconContainer">
      <span class="material-icons">${this.name}</span>
    </div>`;
  }
}

customElements.define('gft-icon', GftIcon);
