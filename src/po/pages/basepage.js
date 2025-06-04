const Header = require('../components/common/header.components');
const SideMenu = require('../components/common/sidemenu.component');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }

  async open() {
    return browser.url(this.url);
  }
}
module.exports = BasePage;
