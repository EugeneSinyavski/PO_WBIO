const AddDoctorComponent = require('../components/doctors/add-doctor.component');
const BasePage = require('./basepage');
const ListHeaderComponent = require('../components/doctors/list-header.component');

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.addDoctorModal = new AddDoctorComponent();
    this.doctorListHeader = new ListHeaderComponent();
  }
}

module.exports = DoctorsPage;
