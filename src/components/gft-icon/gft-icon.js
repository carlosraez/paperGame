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
      },
      /**
       * Indica el id del icono.
       * @type {Boolean}
       */
      iconId: { type: String },
      /**
       * Indica si el botón está deshabilitado para evitar clicks repetidos.
       * @type {Boolean}
       */
      clickDisabled: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.name = '';
    this.iconOptionGameClass = false;
    this.iconId = '';
    this.clickDisabled = false;
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`<button
      class="iconContainer"
      @click=${this.handleClick}
      ?disabled=${this.clickDisabled}
    >
      <span class="material-icons">${this.name}</span>
    </button>`;
  }

  /**
   * Manejador de eventos para el click en el icono.
   * Dispara un evento personalizado con el nombre del icono.
   * @fires CustomEvent#icon-clicked
   * @emits {Object} CustomEvent
   * @emits {String} CustomEvent.detail.iconName - El nombre del icono que fue clickeado.
   * @returns {void}
   */
  handleClick() {
    const event = new CustomEvent('icon-clicked', {
      bubbles: true,
      composed: true,
      detail: {
        iconName: this.iconId
      }
    });
    this.dispatchEvent(event);
  }
}

customElements.define('gft-icon', GftIcon);
