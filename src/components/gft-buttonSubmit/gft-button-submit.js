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
      disabledButton: { type: Boolean }
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.label = '';
    this.disabledButton = false;
  }

  render() {
    return html`
      <div>
        <button
          class="buttonJoin"
          @click="${this._onClick}"
          ?disabled="${this.disabledButton}"
        >
          ${this.label}
        </button>
      </div>
    `;
  }

  /**
   * Maneja el evento del click del boton.
   * @fires CustomEvent#gft-button-click
   */
  _onClick() {
    this.dispatchEvent(
      new CustomEvent('gft-button-click', {
        bubbles: true,
        composed: true
      })
    );
  }
}

customElements.define('gft-button-submit', GftButtonSubmit);
