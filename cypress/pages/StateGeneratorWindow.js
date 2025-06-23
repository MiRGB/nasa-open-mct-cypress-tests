const selectors = {
    stateGenName: '#form-name',
    stateGenDuration: 'input[aria-label="State Duration (seconds)"]',
};

class StateGeneratorWindow {
    get stateGenName() {
        return cy.get(selectors.stateGenName);
    }

    get stateGenDuration() {
        return cy.get(selectors.stateGenDuration);
    }

    get stateGenCreateBtn() {
        return cy.contains('button', 'Ok');
    }

    createStateGen() {
        this.stateGenCreateBtn.click();
    }

    fillName(name) {
        this.stateGenName.clear().type(name);
    }

    fillDuration(duration) {
        this.stateGenDuration.clear().type(duration);
    }
}

export default new StateGeneratorWindow();