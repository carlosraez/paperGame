import { LitElement, html } from 'lit';

import styles from './gft-input-styles.js';

class GftInput extends LitElement {
  static get properties() {
    return {
      /**
       * El valor actual del campo de entrada.
       * @type {String}
       */
      text: { type: String }
    };
  }

  constructor() {
    super();
    this.text = '';
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <input
        placeholder="Name *"
        class="inputText"
        type="text"
        .value="${this.text}"
        @input="${this._onChange}"
      />
    `;
  }

  /**
   * Maneja el evento de cambio de texto.
   *
   * @param {Event} event - El evento de cambio de texto.
   * @emits gft-input-change - Evento que se dispara cuando el valor de texto cambia.
   */
  _onChange(event) {
    this.text = event.target.value;
    const detail = { text: this.text };
    this.dispatchEvent(
      new CustomEvent('gft-input-change', {
        detail,
        bubbles: true,
        composed: true
      })
    );
  }
}

customElements.define('gft-input', GftInput);
