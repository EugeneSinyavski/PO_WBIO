const BasePage = require('./basepage');
const { DoctorListHeader, AddDoctorModal } = require('../components/index');

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.addDoctorModal = new AddDoctorModal();
    this.doctorListHeader = new DoctorListHeader();
  }
}

module.exports = DoctorsPage;
