const AddDoctorComponent = require('../components/doctors/add-doctor.component');
const ListHeaderComponent = require('../components/doctors/list-header.component');

class DoctorsPage {
  constructor() {
    this.addDoctorModal = new AddDoctorComponent();
    this.doctorListHeader = new ListHeaderComponent();
  }

  async open() {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
  }
}

module.exports = DoctorsPage;
