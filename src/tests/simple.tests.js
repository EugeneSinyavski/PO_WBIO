const { pages } = require('../po');

describe('Doctor page', async () => {
  beforeEach(async () => {
    await pages('dashboard').open();
  });

  it('Check page title', async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('Open modal window to add a doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorButton.click();
    await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();
  });

  it('Add a new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorButton.click();
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
    await pages('doctors').addDoctorModal.input('name').setValue('John Dou');
    await pages('doctors').addDoctorModal.input('mobile').setValue('0123456789');
    await pages('doctors').addDoctorModal.input('email').setValue('test@test.com');
    await pages('doctors').addDoctorModal.input('education').setValue('Basic');
    await pages('doctors').addDoctorModal.input('designation').setValue('Test');
    await pages('doctors').addDoctorModal.saveBtn.click();
    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Dou', { ignoreCase: true });
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', { ignoreCase: true });
  });

  it('Close a modal window for adding a new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorButton.click();
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
    await pages('doctors').addDoctorModal.closeBtn.click();
    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
