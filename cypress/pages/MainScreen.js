class MainScreen {
    get mainLogo() {
        return cy.get('.l-shell__app-logo');
    }

    get createBtn() {
        return cy.get(".c-create-button");
    }

    get elementMainCanvas() {
        return cy.get(".js-main-canvas");
    }

    get moreActionsBtn() {
        return cy.get('button[title="More actions"]');
    }

    get deleteBtn() {
        return cy.get('li[aria-label="Remove"]');
    }

    get acceptDeleteBtn() {
        return cy.contains('button', 'Ok');
    }

    get activeName() {
        return cy.get('span[aria-label="Browse bar object name"]');
    }

    get timezoneTitle() {
        return cy.get('div[class="c-clock__timezone"]');
    }

    get stopEditingBtn() {
        return cy.get('button[title="Cancel Editing"]');
    }

    get acceptAlertBtn() {
        return cy.contains('button', 'Ok');
    }

    get timeMenuBtn() {
        return cy.get('div[aria-label="Time Conductor Settings"]');
    }

    get timeModeBtn() {
        return cy.get('button[aria-label="Time Conductor Mode Menu"]');
    }

    get realTimeBtn() {
        return cy.get('li[aria-label="Real-Time"]');
    }

    get timeBar() {
        return cy.get('div[aria-label="Global Time Conductor"]');
    }

    get timeConductorBtn() {
        return cy.get('button[aria-label="Time Conductor History"]');
    }

    get oneMinuteBtn() {
        return cy.get('li[aria-label="1 Minute"]');
    }

    get oneMinuteBarElement() {
        return cy.get('div[title="Start offset: 00:01:00"]');
    }

    get showAllItemsBtn() {
        return cy.get('button[aria-label="Show selected item in tree"]');
    }

    get plotElement() {
        return cy.contains('div', 'SensorA Plot');
    }

    get editBtn() {
        return cy.get('button[title="Edit Object"]');
    }

    get saveBtn() {
        return cy.get('button[title="Save"]');
    }

    get saveAndFinishBtn() {
        return cy.get('li[title="Save and Finish Editing"]');
    }

    get animateElement() {
        return cy.get('#webglContext');
    }

    get exportAsJpgBtn() {
        return cy.get('li[aria-label="Export as JPG"]');
    }

    get imageCanvas() {
        return cy.get('.c-image-canvas');
    }

    get dashboardElement() {
        return cy.contains('div', 'Dashboard');
    }

    showAllItems() {
        this.showAllItemsBtn.click();
    }

    clickDashboardElement() {
        this.dashboardElement.click();
    }

    exportJpg() {
        this.exportAsJpgBtn.click();
    }

    saveAndFinish() {
        this.saveAndFinishBtn.click();
    }

    saveEditingElement() {
        this.saveBtn.click();
    }

    startEditing() {
        this.editBtn.click();
    }

    clickOnPlotElement() {
        this.plotElement.click();
    }

    setOneMinute() {
        this.oneMinuteBtn.click();
    }

    openTimeConductor() {
        this.timeConductorBtn.click();
    }

    setRealTime() {
        this.realTimeBtn.click();
    }

    openTimeMode() {
        this.timeModeBtn.click();
    }

    openTimeMenu() {
        this.timeMenuBtn.click();
    }

    acceptAlert() {
        this.acceptAlertBtn.click();
    }

    stopEditing() {
        this.stopEditingBtn.click();
    }

    acceptDelete() {
        this.acceptDeleteBtn.click();
    }

    removeElement() {
        this.deleteBtn.click();
    }

    moreActions() {
        this.moreActionsBtn.click();
    }

    createElementMenu() {
        this.createBtn.click();
    }
}

export default new MainScreen();