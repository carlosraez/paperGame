import { LitElement, html } from 'lit';

import '../components/gft-input/gft-input.js';
import '../components/gft-title/gft-title.js';
import '../components/gft-buttonSubmit/gft-button-submit.js';

class HomePage extends LitElement {
  constructor() {
    super();
    this._inputValue = '';
  }

  /**
   * Función de devolución de llamada que se llama cuando cambia el valor del texto del input de entrada.
   *  @param {CustomEvent} e - El evento personalizado que contiene el valor del texto del input de entrada.
   */
  _handleInputChange(e) {
    this._inputValue = e.detail.text;
  }

  render() {
    return html`
      <div class="form-login">
        <gft-title></gft-title>
        <gft-input
          .text="${this._inputValue}"
          @gft-input-change="${this._handleInputChange}"
        ></gft-input>
        <gft-button-submit></gft-button-submit>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);

export default HomePage;
