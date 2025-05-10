const DashboardPage = require('../po/pages/dashboard.page');
const DoctorsPage = require('../po/pages/doctors.page');

const dashboardPage = new DashboardPage();
const doctorPage = new DoctorsPage();

describe('Doctor page', async () => {
  beforeEach(async () => {
    await dashboardPage.open();
  });

  it('Check page title', async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('Open modal window to add a doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorPage.doctorListHeader.addNewDoctorButton.click();
    await expect(doctorPage.addDoctorModal.rootEl).toBeDisplayed();
  });

  it('Add a new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorPage.doctorListHeader.addNewDoctorButton.click();
    await doctorPage.addDoctorModal.rootEl.waitForDisplayed();
    await $('[name="Name"]').setValue('John Dou');
    await $('[name="Mobile"]').setValue('0123456789');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');
    await $('.e-footer-content button.e-primary').click();
    await expect(doctorPage.addDoctorModal.rootEl).not.toBeDisplayed();
    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Dou', { ignoreCase: true });
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', { ignoreCase: true });
  });

  it('Close a modal window for adding a new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorPage.doctorListHeader.addNewDoctorButton.click();
    await doctorPage.addDoctorModal.rootEl.waitForDisplayed();
    await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
    await expect(doctorPage.addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
