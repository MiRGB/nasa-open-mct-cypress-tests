class DisplayLayout {
    get displayLayoutName() {
        return cy.get('#form-name');
    }

    get myItemsElement() {
        return cy.get('body > div.l-overlay-wrapper.l-overlay-dialog > div > div.c-overlay__outer > div > div > div > div > form > div.c-form__section.grows > div > div.c-form-row__controls > div > div.c-tree-and-search__tree.c-tree > div.c-tree__scrollable > div > div:nth-child(1) > div > a > div.c-tree__item__name.c-object-label__name');
    }
    
    get displayLayoutCreateBtn() {
        return cy.contains('button', 'Ok');
    }

    get displayLayoutBarName() {
        return cy.get('span[aria-label="Browse bar object name"]');
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