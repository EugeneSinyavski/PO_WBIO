const BaseComponent = require('../common/basecomponent');

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super('.new-doctor-dialog');
  }

  get saveBtn() {
    return this.rootEl.$('.e-footer-content button.e-primary');
  }

  get closeBtn() {
    return this.rootEl.$('.new-doctor-dialog .e-dlg-closeicon-btn');
  }

  input(name) {
    const selectors = {
      name: '[name="Name"]',
      mobile: '[name="Mobile"]',
      email: '[name="Email"]',
      education: '[name="Education"]',
      designation: '[name="Designation"]' };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = AddDoctorComponent;
