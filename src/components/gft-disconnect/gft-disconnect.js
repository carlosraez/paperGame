import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import styles from './gft-disconnect-style.js';

class GftDisconnect extends LitElement {
  constructor() {
    super();
    this.text = '';
  }

  static get styles() {
    return [styles];
  }

  _handleExit() {
    Router.go('/home');
  }

  render() {
    return html`
      <div>
        <button @click="${this._handleExit}" class="exit-button">
          <span class="material-icons">exit_to_app</span> Salir
        </button>
      </div>
    `;
  }
}

customElements.define('gft-disconnect', GftDisconnect);
