describe('Doctor page', async () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('Check page title', async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('Open modal window to add a doctor', async () => {
    await $('[routerlink="/doctors"]').click();
    await $('.specialization-types button.e-control').click();
    await expect($('.new-doctor-dialog')).toBeDisplayed();
  });

  it('Add a new doctor', async () => {
    await $('[routerlink="/doctors"]').click();
    await $('.specialization-types button.e-control').click();
    await $('.new-doctor-dialog').waitForDisplayed();
    await $('[name="Name"]').setValue('John Dou');
    await $('[name="Mobile"]').setValue('0123456789');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');
    await $('.e-footer-content button.e-primary').click();
    await expect($('.new-doctor-dialog')).not.toBeDisplayed();
    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Dou', { ignoreCase: true });
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', { ignoreCase: true });
  });

  it('Close a modal window for adding a new doctor', async () => {
    await $('[routerlink="/doctors"]').click();
    await $('.specialization-types button.e-control').click();
    await $('.new-doctor-dialog').waitForDisplayed();
    await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
    await expect($('.new-doctor-dialog')).not.toBeDisplayed();
  });
});
