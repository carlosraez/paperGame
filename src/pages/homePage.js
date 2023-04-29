import { LitElement, html } from 'lit';

class HomePage extends LitElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <button>Join</button>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
