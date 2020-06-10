import { newE2EPage } from '@stencil/core/testing';

describe('jr-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jr-button></jr-button>');

    const element = await page.find('jr-button');
    expect(element).toHaveClass('hydrated');
  });
});
