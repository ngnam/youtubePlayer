import { YoutubeplayerPage } from './app.po';

describe('youtubeplayer App', function() {
  let page: YoutubeplayerPage;

  beforeEach(() => {
    page = new YoutubeplayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
