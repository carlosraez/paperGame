import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import '../components/gft-input/gft-input.js';
import '../components/gft-title/gft-title.js';
import '../components/gft-buttonSubmit/gft-button-submit.js';

class HomePage extends LitElement {
  static get properties() {
    return {
      /**
       * El valor del input.
       * @type {String}
       * @private
       */
      _inputValue: { type: String }
    };
  }

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

  /**
   * Guarda el nombre del jugador en localStorage y redirige al usuario a la pantalla de juego.
   * @private
   */
  _handleStart() {
    const playerName = this._inputValue;
    localStorage.setItem('playerName', playerName);
    Router.go(`/game`);
  }

  render() {
    return html`
      <div class="form-login">
        <gft-title></gft-title>
        <gft-input
          .text="${this._inputValue}"
          @gft-input-change="${this._handleInputChange}"
        ></gft-input>
        <gft-button-submit
          label="Join"
          ?disabledButton="${!this._inputValue}"
          @gft-button-click="${this._handleStart}"
        ></gft-button-submit>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);

export default HomePage;
