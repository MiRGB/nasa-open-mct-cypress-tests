const selectors = {
    mainLogo: '.l-shell__app-logo',
    createBtn: '.c-create-button',
    elementMainCanvas: '.js-main-canvas',
    moreActionsBtn: 'button[title="More actions"]',
    deleteBtn: 'li[aria-label="Remove"]',
    activeName: 'span[aria-label="Browse bar object name"]',
    timezoneTitle: 'div.c-clock__timezone',
    stopEditingBtn: 'button[title="Cancel Editing"]',
    timeMenuBtn: 'div[aria-label="Time Conductor Settings"]',
    timeModeBtn: 'button[aria-label="Time Conductor Mode Menu"]',
    realTimeBtn: 'li[aria-label="Real-Time"]',
    timeBar: 'div[aria-label="Global Time Conductor"]',
    timeConductorBtn: 'button[aria-label="Time Conductor History"]',
    oneMinuteBtn: 'li[aria-label="1 Minute"]',
    oneMinuteBarElement: 'div[title="Start offset: 00:01:00"]',
    showAllItemsBtn: 'button[aria-label="Show selected item in tree"]',
    editBtn: 'button[title="Edit Object"]',
    saveBtn: 'button[title="Save"]',
    saveAndFinishBtn: 'li[title="Save and Finish Editing"]',
    animateElement: '#webglContext',
    exportAsJpgBtn: 'li[aria-label="Export as JPG"]',
    imageCanvas: '.c-image-canvas',
    switcherMenu: 'button[title="Open the View Switcher Menu"]',
    telemetryTableBtn: 'li[aria-label="Telemetry Table"]',
    telemetryTableHeaders: '.c-telemetry-table__headers',
    pauseBtn: 'button[aria-label="Pause"]',
    playBtn: 'button[aria-label="Play"]',
    searchPhraseInput: 'input[aria-label="state filter input"]',
    numberOfSnapshots: '1 Snapshot ',
    snapshotMenuBtn: 'button[title="Open the Notebook Snapshot Menu"]',
    saveSnapshotBtn: 'li[aria-label="Save to Notebook Snapshots"]',
};

class MainScreen {
    get mainLogo() {
        return cy.get(selectors.mainLogo);
    }

    get createBtn() {
        return cy.get(selectors.createBtn);
    }

    get elementMainCanvas() {
        return cy.get(selectors.elementMainCanvas);
    }

    get moreActionsBtn() {
        return cy.get(selectors.moreActionsBtn);
    }

    get deleteBtn() {
        return cy.get(selectors.deleteBtn);
    }

    get acceptDeleteBtn() {
        return cy.contains('button', 'Ok');
    }

    get activeName() {
        return cy.get(selectors.activeName);
    }

    get timezoneTitle() {
        return cy.get(selectors.timezoneTitle);
    }

    get stopEditingBtn() {
        return cy.get(selectors.stopEditingBtn);
    }

    get acceptAlertBtn() {
        return cy.contains('button', 'Ok');
    }

    get timeMenuBtn() {
        return cy.get(selectors.timeMenuBtn);
    }

    get timeModeBtn() {
        return cy.get(selectors.timeModeBtn);
    }

    get realTimeBtn() {
        return cy.get(selectors.realTimeBtn);
    }

    get timeBar() {
        return cy.get(selectors.timeBar);
    }

    get timeConductorBtn() {
        return cy.get(selectors.timeConductorBtn);
    }

    get oneMinuteBtn() {
        return cy.get(selectors.oneMinuteBtn);
    }

    get oneMinuteBarElement() {
        return cy.get(selectors.oneMinuteBarElement);
    }

    get showAllItemsBtn() {
        return cy.get(selectors.showAllItemsBtn);
    }

    get editBtn() {
        return cy.get(selectors.editBtn);
    }

    get saveBtn() {
        return cy.get(selectors.saveBtn);
    }

    get saveAndFinishBtn() {
        return cy.get(selectors.saveAndFinishBtn);
    }

    get animateElement() {
        return cy.get(selectors.animateElement);
    }

    get exportAsJpgBtn() {
        return cy.get(selectors.exportAsJpgBtn);
    }

    get imageCanvas() {
        return cy.get(selectors.imageCanvas);
    }

    get switcherMenu() {
        return cy.get(selectors.switcherMenu);
    }

    get telemetryTableBtn() {
        return cy.get(selectors.telemetryTableBtn);
    }

    get telemetryTableHeaders() {
        return cy.get(selectors.telemetryTableHeaders);
    }

    get pauseBtn() {
        return cy.get(selectors.pauseBtn);
    }

    get playBtn() {
        return cy.get(selectors.playBtn);
    }

    get searchPhraseInput() {
        return cy.get(selectors.searchPhraseInput);
    }

    get snapshotMenuBtn() {
        return cy.get(selectors.snapshotMenuBtn);
    }

    get saveSnapshotBtn() {
        return cy.get(selectors.saveSnapshotBtn);
    }

    get numberOfSnapshots() {
        return cy.contains('span', selectors.numberOfSnapshots);
    }

    searchForFakeData(phrase) {
        this.searchPhraseInput.clear().type(`${phrase}{enter}`);
    }

    fakeElement(phrase) {
        return cy.get(`td[title="${phrase}"]`);
    }

    getPlotElement(title) {
        return cy.contains('div', title);
    }

    getDashboardElement(title) {
        return cy.contains('div', title);
    }

    clickOnPlotElement(title) {
        this.getPlotElement(title).click();
    }

    clickDashboardElement(title) {
        this.getDashboardElement(title).click();
    }

    pauseTelemetryTable() {
        this.pauseBtn.click();
    }

    switcherMenuOpen() {
        this.switcherMenu.click();
    }

    telemetryTableScreen() {
        this.telemetryTableBtn.click();
    }

    showAllItems() {
        this.showAllItemsBtn.click();
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

    openSnapshotMenu() {
        this.snapshotMenuBtn.click();
    }

    saveSnapshotClick() {
        this.saveSnapshotBtn.click();
    }

    deleteCurrentElement() {
        this.moreActions();
        this.removeElement();
        this.acceptDelete();
    }

    saveOverlayPlot() {
        this.saveEditingElement();
        this.saveAndFinish();
    }

    setRealTimeData() {
        this.openTimeMenu();
        this.openTimeMode();
        this.setRealTime();
    }

    setOneMinuteTime() {
        this.openTimeConductor();
        this.setOneMinute();
    }

    saveElement() {
        this.saveEditingElement();
        this.saveAndFinish();
    }

    saveSnapshot() {
        this.openSnapshotMenu();
        this.saveSnapshotClick();
    }
}

export default new MainScreen();
