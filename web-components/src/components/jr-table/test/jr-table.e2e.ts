import { newE2EPage } from '@stencil/core/testing';

describe('jr-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jr-table></jr-table>');

    const element = await page.find('jr-table');
    expect(element).toHaveClass('hydrated');
  });
});
