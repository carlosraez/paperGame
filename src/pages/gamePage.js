import { LitElement, html } from 'lit';

class GamePage extends LitElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <button>Game</button>
      </div>
    `;
  }
}

customElements.define('game-page', GamePage);
