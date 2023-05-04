import { LitElement, html } from 'lit';

import '../../components/gft-disconnect/gft-disconnect.js';
import '../../components/gft-game-options/gft-game-options.js';
import styles from './gamePage-styles.js';

class GamePage extends LitElement {
  static get properties() {
    return {
      playerName: { type: String },
      disabledIcons: { type: Object }
    };
  }

  constructor() {
    super();
    this.playerName = '';
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

  handleIconClicked(event) {
    const { iconName } = event.detail;

    if (!this.disabledIcons[iconName]) {
      this.disabledIcons = {
        ...this.disabledIcons,
        [iconName]: true
      };
      this.requestUpdate();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('icon-clicked', this.handleIconClicked);
  }

  _getTitleApp() {
    console.log(this.disabledIcons);
    return html`<div class="titleGameUser">
    <gft-disconnect></gft-disconnect>
    <p>Name: <span>${this.playerName}</p>
    <div>Score: 2</div>
    <gft-game-options .disabledIcons=${this.disabledIcons}></gft-game-options>
    </div>`;
  }

  render() {
    return html` <div>${this._getTitleApp()}</div> `;
  }
}

customElements.define('game-page', GamePage);
