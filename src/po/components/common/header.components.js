const BaseComponent = require('./basecomponent');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('.planner-header');
  }

  get logoutBtn() {
    return this.rootEl.$('logout-icon-container');
  }
}

module.exports = BaseComponent;
