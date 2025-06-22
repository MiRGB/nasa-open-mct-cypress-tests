class OverlayPlotWindow {
    get overlayPlotName() {
        return cy.get('input[name="name"]');
    }

    get createOverlayPlotBtn() {
        return cy.contains('button', 'Ok');
    }

    get myItemsFile() {
        return cy.get('body > div.l-overlay-wrapper.l-overlay-dialog > div > div.c-overlay__outer > div > div > div > div > form > div.c-form__section.grows > div > div.c-form-row__controls > div > div.c-tree-and-search__tree.c-tree > div.c-tree__scrollable > div > div:nth-child(1) > div > a > div.c-tree__item__name.c-object-label__name');
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