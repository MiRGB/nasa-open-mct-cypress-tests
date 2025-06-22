class CameraWindow {
    get cameraName() {
        return cy.get('#form-name');
    }

    get loadDelayInput() {
        return cy.get('input[aria-label="Image load delay (milliseconds)"]');
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