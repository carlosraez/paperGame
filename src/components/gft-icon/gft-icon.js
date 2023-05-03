import { LitElement, html } from 'lit';

import styles from './gft-icon-style.js';

class GftIcon extends LitElement {
  static get properties() {
    return {
      /**
       * Nombre del icono.
       * @type {String}
       */
      name: { type: String }
    };
  }

  constructor() {
    super();
    this.name = '';
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html` <span class="material-icons">${this.name}</span> `;
  }
}

customElements.define('gft-icon', GftIcon);
