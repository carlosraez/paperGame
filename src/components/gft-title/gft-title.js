import { LitElement, html } from 'lit';

import styles from './gft-title-style.js';
import '../gft-icon/gft-icon.js';

class GftTitle extends LitElement {
  constructor() {
    super();
    this.text = '';
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="containerTitle">
        <gft-icon name="videogame_asset"></gft-icon>
        <h1 class="titleText">Create new Player</h1>
      </div>
    `;
  }
}

customElements.define('gft-title', GftTitle);
