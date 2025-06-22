class CreateMenu {
    get sineWaveGenerator() {
        return cy.get('li[aria-label="Sine Wave Generator"]');
    }

    get clockElement() {
        return cy.get('ul > li.icon-clock');
    }

    get overlayPlot() {
        return cy.get('li[aria-label="Overlay Plot"]');
    }

    get displayLayout() {
        return cy.get('li[aria-label="Display Layout"]');
    }

    get cameraImg() {
        return cy.get('li[aria-label="Example Imagery"]');
    }

    createCameraImg() {
        this.cameraImg.click();
    }

    createDisplayLayout() {
        this.displayLayout.click();
    }

    createOverlayPlotElement() {
        this.overlayPlot.click();
    }

    createSineWaveGeneratorElement() {
        this.sineWaveGenerator.click();
    }

    createClockElement() {
        this.clockElement.click();
    }
}

export default new CreateMenu();