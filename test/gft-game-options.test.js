import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/gft-game-options/gft-game-options.js';

describe('gft-game-options', () => {
  it('renders the correct number of icons', async () => {
    const el = await fixture(html` <gft-game-options></gft-game-options> `);

    expect(el.shadowRoot.querySelectorAll('gft-icon')).to.have.lengthOf(3);
  });

  it('renders the icons with the correct properties', async () => {
    const el = await fixture(html`
      <gft-game-options
        .disabledIcons=${{
          stone: true,
          paper: false,
          scissors: true
        }}
      ></gft-game-options>
    `);

    const icons = el.shadowRoot.querySelectorAll('gft-icon');
    console.log(icons[0]);

    expect(icons[0].getAttribute('name')).to.equal('lens');
    expect(icons[0].getAttribute('iconID')).to.equal('stone');
    expect(icons[0].getAttribute('clickDisabled')).to.equal('');

    expect(icons[1].getAttribute('name')).to.equal('back_hand');
    expect(icons[1].getAttribute('iconID')).to.equal('paper');
    expect(icons[1].getAttribute('clickDisabled')).to.equal(null);

    expect(icons[2].getAttribute('name')).to.equal('content_cut');
    expect(icons[2].getAttribute('iconID')).to.equal('scissors');
    expect(icons[2].getAttribute('clickDisabled')).to.equal('');
  });
});
