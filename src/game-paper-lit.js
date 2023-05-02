import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { routes } from './router/routes.js';
import styles from './game-paper-lit-styles.js';

class GamePaperLit extends LitElement {
  static get styles() {
    return [styles];
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('#router-outlet'));
    router.setRoutes(routes);
  }

  render() {
    return html`
      <div class="game-app">
        <h1 class="title">Piedra, Papel o Tijeras</h1>
        <div id="router-outlet"></div>
      </div>
    `;
  }
}

customElements.define('game-paper-lit', GamePaperLit);
