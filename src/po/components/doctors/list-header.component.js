const BaseComponent = require('../common/basecomponent');

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super('.specialization-types');
  }

  get addNewDoctorButton() {
    return this.rootEl.$('button.e-control');
  }
}

module.exports = ListHeaderComponent;
