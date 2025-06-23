const selectors = {
    displayLayoutName: '#form-name',
    myItemsElement: 'div.c-form-row__controls > div > div.c-tree-and-search__tree.c-tree > div.c-tree__scrollable > div > div:nth-child(1)',
    displayLayoutBarName: 'span[aria-label="Browse bar object name"]',
};

class DisplayLayout {
    get displayLayoutName() {
        return cy.get(selectors.displayLayoutName);
    }

    get myItemsElement() {
        return cy.get(selectors.myItemsElement);
    }

    get displayLayoutCreateBtn() {
        return cy.contains('button', 'Ok');
    }

    get displayLayoutBarName() {
        return cy.get(selectors.displayLayoutBarName);
    }

    createDisplayLayout() {
        this.displayLayoutCreateBtn.click();
    }

    selectMyItemsElement() {
        this.myItemsElement.click();
    }

    fillName(name) {
        this.displayLayoutName.clear().type(name);
    }
}

export default new DisplayLayout();
