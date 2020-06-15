import { newSpecPage } from '@stencil/core/testing';
import { JrTable } from './jr-table';

describe('jr-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JrTable],
      html: `<jr-table></jr-table>`,
    });
    expect(page.root).toEqualHtml(`
      <jr-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jr-table>
    `);
  });
});
