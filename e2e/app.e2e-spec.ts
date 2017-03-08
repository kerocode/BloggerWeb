import { BloggerWebPage } from './app.po';

describe('blogger-web App', () => {
  let page: BloggerWebPage;

  beforeEach(() => {
    page = new BloggerWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
