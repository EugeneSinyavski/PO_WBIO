const BasePage = require('./basepage');

class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
  }
}

module.exports = DashboardPage;
