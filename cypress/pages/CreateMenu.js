const selectors = {
    sineWaveGenerator: 'li[aria-label="Sine Wave Generator"]',
    clockElement: 'ul > li.icon-clock',
    overlayPlot: 'li[aria-label="Overlay Plot"]',
    displayLayout: 'li[aria-label="Display Layout"]',
    cameraImg: 'li[aria-label="Example Imagery"]',
    stateGenerator: 'li[aria-label="State Generator"]',
};

class CreateMenu {
    get sineWaveGenerator() {
        return cy.get(selectors.sineWaveGenerator);
    }

    get clockElement() {
        return cy.get(selectors.clockElement);
    }

    get overlayPlot() {
        return cy.get(selectors.overlayPlot);
    }

    get displayLayout() {
        return cy.get(selectors.displayLayout);
    }

    get cameraImg() {
        return cy.get(selectors.cameraImg);
    }

    get stateGenerator() {
        return cy.get(selectors.stateGenerator);
    }

    createStateGenerator() {
        this.stateGenerator.click();
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
