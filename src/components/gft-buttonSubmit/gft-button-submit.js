import { LitElement, html } from 'lit';

import styles from './gft-button-submit-style.js';

class GftButtonSubmit extends LitElement {
  static get properties() {
    return {
      /**
       * El valor del título del botón.
       * @type {String}
       */
      label: { type: String },

      /**
       * Indica si está o no desactivado el botón.
       * @type {Boolean}
       */
      disabledButton: { type: Boolean },

      /**
       * Indica tipo de botón.
       * @type {string}
       */
      type: { type: String, reflect: true }
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.label = 'Join';
    this.disabledButton = false;
  }

  render() {
    return html`
      <div>
        <button class="buttonJoin">${this.label}</button>
      </div>
    `;
  }
}

customElements.define('gft-button-submit', GftButtonSubmit);
