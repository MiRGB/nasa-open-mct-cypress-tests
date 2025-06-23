const selectors = {
    overlayPlotName: 'input[name="name"]',
    myItemsFile: 'div.c-form-row__controls > div > div.c-tree-and-search__tree.c-tree > div.c-tree__scrollable > div > div:nth-child(1)'
};

class OverlayPlotWindow {
    get overlayPlotName() {
        return cy.get(selectors.overlayPlotName);
    }

    get createOverlayPlotBtn() {
        return cy.contains('button', 'Ok');
    }

    get myItemsFile() {
        return cy.get(selectors.myItemsFile);
    }

    myItemsClick() {
        this.myItemsFile.click();
    }

    createOverlayPlot() {
        this.createOverlayPlotBtn.click();
    }

    fillName(name) {
        this.overlayPlotName.clear().type(name);
    }
}

export default new OverlayPlotWindow();
