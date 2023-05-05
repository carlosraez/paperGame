import { LitElement, html } from 'lit';

import '../../components/gft-disconnect/gft-disconnect.js';
import '../../components/gft-game-options/gft-game-options.js';
import styles from './gamePage-styles.js';

class GamePage extends LitElement {
  static get properties() {
    return {
      playerName: { type: String },
      disabledIcons: { type: Object },
      isLoading: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.playerName = '';
    this.disabledIcons = {
      paper: false,
      stone: false,
      scissors: false,
      isLoading: false,
      botSelection: ''
    };
  }

  static get styles() {
    return [styles];
  }

  /**
   * Este método se llama automáticamente cuando el elemento es añadido al DOM.
   * Aquí se carga el valor del `playerName` desde el LocalStorage y se añade
   * un escuchador de eventos para el evento `icon-clicked`.
   */
  connectedCallback() {
    super.connectedCallback();
    this.playerName = localStorage.getItem('playerName');
    this.addEventListener('icon-clicked', this.handleIconClicked);
  }

  /**
  * Manejador de eventos que se dispara al hacer click en uno de los iconos del juego.
  * Deshabilita el icono clickeado y ejecuta la función _botIsRunning para simular
  * la jugada de la máquina.
  @param {Object} event - Objeto que contiene la información del evento lanzado.
  @param {Object} event.detail - Detalles del evento lanzado.
  @param {string} event.detail.iconName - Nombre del icono clickeado.
  @returns {void}
  */
  handleIconClicked(event) {
    const { iconName } = event.detail;

    if (!this.disabledIcons[iconName] && !this.isLoading) {
      this.disabledIcons = {
        ...this.disabledIcons,
        [iconName]: true
      };
      this.isLoading = true;
      this._botIsRunning();
      this.requestUpdate();
    }
  }

  _botIsRunning() {
    setTimeout(() => {
      const options = ['paper', 'stone', 'scissors'];
      this.botSelection = options[Math.floor(Math.random() * options.length)];
      this.requestUpdate();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('icon-clicked', this.handleIconClicked);
  }

  /**
   * Retorna un array de elementos HTML que representan los iconos seleccionados por el usuario.
   * @returns {Array<HTMLElement>} Array de elementos HTML que representan los iconos seleccionados por el usuario.
   */
  _getSelectionUser() {
    return Object.entries(this.disabledIcons).map(
      ([icon, disabled]) => html` ${disabled ? html`${icon}` : null} `
    );
  }

  /**
   * Retorna el texto de las selecciones del usuario y la máquina.
   * @returns {TemplateResult} HTML template string.
   */
  _getResult() {
    return html` <p>
      You: ${this._getSelectionUser()} - Bot: ${this.botSelection}
    </p>`;
  }

  _getTitleApp() {
    return html`<div class="titleGameUser">
    <gft-disconnect></gft-disconnect>
    <p>Name: <span>${this.playerName}</p>
    <div>Score: 2</div>
    <gft-game-options .disabledIcons=${this.disabledIcons}></gft-game-options>
    ${this._getResult()}
    </div>`;
  }

  render() {
    return html` <div>${this._getTitleApp()}</div> `;
  }
}

customElements.define('game-page', GamePage);
