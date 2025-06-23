const selectors = {
    nasaPicture: '.c-about__image',
    closeWindowBtn: '.c-overlay__outer .c-overlay__close-button',
};

class VersionPopup {
    get nasaPicture() {
        return cy.get(selectors.nasaPicture);
    }

    get closeWindowBtn() {
        return cy.get(selectors.closeWindowBtn);
    }

    closeWindow() {
        this.closeWindowBtn.click();
    }
}

export default new VersionPopup();
