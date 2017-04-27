import { Kartik6048Page } from './app.po';

describe('kartik6048 App', () => {
  let page: Kartik6048Page;

  beforeEach(() => {
    page = new Kartik6048Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
