import { LitElement, html } from 'lit';

import styles from './gft-game-options-style.js';

class GftGameOptions extends LitElement {
  static get properties() {
    return {
      disabledIcons: {
        type: Object,
        value: {
          stone: false,
          paper: false,
          scissors: false
        }
      }
    };
  }

  constructor() {
    super();
    this.disabledIcons = {
      stone: false,
      paper: false,
      scissors: false
    };
    this.icons = [
      { name: 'lens', iconID: 'stone' },
      { name: 'back_hand', iconID: 'paper' },
      { name: 'content_cut', iconID: 'scissors' }
    ];
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="containerOptions">
        ${this.icons.map(
          ({ name, iconID }) =>
            html`
              <gft-icon
                name=${name}
                iconID=${iconID}
                iconOptionGameClass
                ?clickDisabled=${this.disabledIcons[iconID]}
              ></gft-icon>
            `
        )}
      </div>
    `;
  }
}

customElements.define('gft-game-options', GftGameOptions);
