const selectors = {
    plotSeriesItem: 'span[aria-label="Expand SensorA Plot Series Options"]',
    valueOption: 'ul.c-tree li:nth-child(1) div.grid-cell.value > select',
    alarmMarkersCheckbox: '#alarm-markers-checkbox',
    colourBtn: '.c-color-swatch',
    darkYellowBtn: 'div[style="background: rgb(149, 177, 38);"]',
    logModeCheckbox: '#log-mode-input-1',
    stylesOptionsBtn: 'div[title="Styles"]',
    bgColourBtn: 'button[title="Set background color"]',
    whiteColour: 'div[title="#ffffff"]',
    bgColourPointer: '.icon-paint-bucket .c-swatch',
    fontColourBtn: 'button[title="Set text color"]',
    orangeColour: 'div[title="#ff9900"]',
    fontColourPointer: '.icon-font .c-swatch',
};

class EditingRightBar {
    get plotSeriesItem() {
        return cy.get(selectors.plotSeriesItem);
    }

    get valueOption() {
        return cy.get(selectors.valueOption);
    }

    get alarmMarkersCheckbox() {
        return cy.get(selectors.alarmMarkersCheckbox);
    }

    get colourBtn() {
        return cy.get(selectors.colourBtn);
    }

    get darkYellowBtn() {
        return cy.get(selectors.darkYellowBtn);
    }

    get logModeCheckbox() {
        return cy.get(selectors.logModeCheckbox);
    }

    get stylesOptionsBtn() {
        return cy.get(selectors.stylesOptionsBtn);
    }

    get bgColourBtn() {
        return cy.get(selectors.bgColourBtn);
    }

    get whiteColour() {
        return cy.get(selectors.whiteColour);
    }

    get bgColourPointer() {
        return cy.get(selectors.bgColourPointer);
    }

    get fontColourBtn() {
        return cy.get(selectors.fontColourBtn);
    }

    get orangeColour() {
        return cy.get(selectors.orangeColour);
    }

    get fontColourPointer() {
        return cy.get(selectors.fontColourPointer);
    }

    changeToOrange() {
        this.orangeColour.click();
    }

    changeFontColour() {
        this.fontColourBtn.click();
    }

    changeToWhite() {
        this.whiteColour.click();
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
