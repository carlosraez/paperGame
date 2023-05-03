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

  static _handleExit() {
    Router.go('/home');
  }

  render() {
    return html`
      <button @click="${GftDisconnect._handleExit}" class="exit-button">
        <gft-icon name="exit_to_app"></gft-icon>
      </button>
    `;
  }
}

customElements.define('gft-disconnect', GftDisconnect);
