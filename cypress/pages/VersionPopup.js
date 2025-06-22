class VersionPopup {
    get nasaPicture() {
        return cy.get('.c-about__image');
    }

    get closeWindowBtn() {
        return cy.get('.c-overlay__outer .c-overlay__close-button');
    }

    closeWindow() {
        this.closeWindowBtn.click();
    }
}

export default new VersionPopup();