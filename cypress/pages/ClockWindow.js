class ClockWindow {
    get clockName() {
        return cy.get('#form-name');
    }

    get createClockBtn() {
        return cy.contains('button', 'Ok');
    }

    createClock() {
        this.createClockBtn.click();
    }

    fillName(name) {
        this.clockName.clear().type(name);
    }
}

export default new ClockWindow();