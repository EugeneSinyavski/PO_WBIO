class ListHeaderComponent {
  get rootEl() {
    return $('.specialization-types');
  }

  get addNewDoctorButton() {
    return this.rootEl.$('button.e-control');
  }
}

module.exports = ListHeaderComponent;
