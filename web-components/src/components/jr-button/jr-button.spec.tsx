import { newSpecPage } from '@stencil/core/testing';
import { JrButton } from './jr-button';

describe('jr-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JrButton],
      html: `<jr-button></jr-button>`,
    });
    expect(page.root).toEqualHtml(`
      <jr-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jr-button>
    `);
  });
});
