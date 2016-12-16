import { browser, element, by } from 'protractor';

export class ComponentsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cmpnt-root h1')).getText();
  }
}
