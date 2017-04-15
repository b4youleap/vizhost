import { VizhostPage } from './app.po';

describe('vizhost App', () => {
  let page: VizhostPage;

  beforeEach(() => {
    page = new VizhostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
