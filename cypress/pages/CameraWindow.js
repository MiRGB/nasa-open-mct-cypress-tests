const selectors = {
    cameraName: '#form-name',
    loadDelayInput: 'input[aria-label="Image load delay (milliseconds)"]',
};

class CameraWindow {
    get cameraName() {
        return cy.get(selectors.cameraName);
    }

    get loadDelayInput() {
        return cy.get(selectors.loadDelayInput);
    }

    get createCameraBtn() {
        return cy.contains('button', 'Ok');
    }

    createCamera() {
        this.createCameraBtn.click();
    }

    setLoadDelay(value) {
        this.loadDelayInput.clear().type(value);
    }

    fillName(name) {
        this.cameraName.clear().type(name);
    }
}

export default new CameraWindow();
