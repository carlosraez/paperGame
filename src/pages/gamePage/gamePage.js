import { LitElement, html } from 'lit';

import '../../components/gft-disconnect/gft-disconnect.js';
import '../../components/gft-game-options/gft-game-options.js';
import { getBotSelection } from '../../services/botLogic.js';
import styles from './gamePage-styles.js';

class GamePage extends LitElement {
  static get properties() {
    return {
      /**
       * Nombre del jugador.
       * @type {String}
       */
      playerName: { type: String },
      /**
       * Objeto que describe el estado de los iconos.
       * @type {Object}
       */
      disabledIcons: { type: Object },
      /**
       * Una bandera que indica si la maquína se esta ejecutando la respuesta.
       * @type {Boolean}
       */
      isLoading: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.playerName = '';
    this.score = 0;
    this.result = '';
    this.playerSelection = '';
    this.botSelection = '';
    this.isLoading = false;
    this.disabledIcons = {
      paper: false,
      stone: false,
      scissors: false
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
      this._getSelectionUser();
      this._botIsRunning();
      this.requestUpdate();
    }
  }

  _botIsRunning() {
    setTimeout(() => {
      const userSelection = this.playerSelection;
      const { botSelection, result, newScore } = getBotSelection(
        userSelection,
        this.score
      );
      this.botSelection = botSelection;
      this.score = newScore;
      this.result = result;
      this.isLoading = false;
      this.disabledIcons = {
        paper: false,
        stone: false,
        scissors: false
      };
      this.requestUpdate();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('icon-clicked', this.handleIconClicked);
  }

  /**
   * Retorna el HTML del elemento seleccionado por el usuario.
   * @returns {string} HTML del elemento seleccionado por el usuario.
   */
  _getSelectionUser() {
    for (const [icon, disabled] of Object.entries(this.disabledIcons)) {
      if (disabled) {
        this.playerSelection = icon;
      }
    }
  }

  /**
   * Retorna el texto de las selecciones del usuario y la máquina.
   * @returns {TemplateResult} HTML template string.
   */
  _getResult() {
    return html` <p>You: ${this.playerSelection} - Bot: ${this.botSelection}</p>
      <p>${this.result}</p>`;
  }

  _getTitleApp() {
    return html`<div class="titleGameUser">
      <gft-disconnect></gft-disconnect>
      <p>Name: <span>${this.playerName}</span></p>
      <div>Score: ${this.score}</div>
      <gft-game-options .disabledIcons=${this.disabledIcons}></gft-game-options>
      ${this._getResult()}
    </div>`;
  }

  render() {
    return html` <div>${this._getTitleApp()}</div> `;
  }
}

customElements.define('game-page', GamePage);
