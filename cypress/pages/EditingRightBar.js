class EditingRightBar {
    get plotSeriesItem() {
        return cy.get('span[aria-label="Expand SensorA Plot Series Options"]');
    }

    get valueOption() {
        return cy.get('ul.c-tree li:nth-child(1) div.grid-cell.value > select');
    }

    get alarmMarkersCheckbox() {
        return cy.get('#alarm-markers-checkbox');
    }

    get colourBtn() {
        return cy.get('.c-color-swatch');
    }

    get darkYellowBtn() {
        return cy.get('div[style="background: rgb(149, 177, 38);"]');
    }

    get logModeCheckbox() {
        return cy.get('#log-mode-input-1');
    }

    get stylesOptionsBtn() {
        return cy.get('div[title="Styles"]');
    }

    get bgColourBtn() {
        return cy.get('button[title="Set background color"]');
    }

    get blackColour() {
        return cy.get('div[title="#000000"]');
    }

    get bgColourPointer() {
        return cy.get('.icon-paint-bucket .c-swatch');
    }

    get fontColourBtn() {
        return cy.get('button[title="Set text color"]');
    }

    get orangeColour() {
        return cy.get('div[title="#ff9900"]');
    }

    get fontColourPointer() {
        return cy.get('.icon-font .c-swatch');
    }

    changeToOrange() {
        this.orangeColour.click();
    }

    changeFontColour() {
        this.fontColourBtn.click();
    }

    changeToBlack() {
        this.blackColour.click();
    }

    changeBgColour() {
        this.bgColourBtn.click();
    }

    goToStyles() {
        this.stylesOptionsBtn.click();
    }

    turnOnLogMode() {
        this.logModeCheckbox.click();
    }

    switchToDarkYellow() {
        this.darkYellowBtn.click();
    }

    changeColour() {
        this.colourBtn.click();
    }

    turnOffAlarmMarkers() {
        this.alarmMarkersCheckbox.uncheck();
    }

    openPlotSeriesItem() {
        this.plotSeriesItem.click();
    }
}

export default new EditingRightBar();