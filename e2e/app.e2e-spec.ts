import { Ang4completecoursePage } from './app.po';

describe('ang4completecourse App', () => {
  let page: Ang4completecoursePage;

  beforeEach(() => {
    page = new Ang4completecoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
