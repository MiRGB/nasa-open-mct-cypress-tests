const selectors = {
    snapshotElement: '.c-snapshot',
    alertMessage: '.c-message__action-text',
    snapshotMenuBtn: '.c-ne__embed__actions',
    deleteSnapshotBtn: 'li[aria-label="Delete Snapshot"]',
};

class Snapshots {
    get snapshotElement() {
        return cy.get(selectors.snapshotElement);
    }

    get alertMessage() {
        return cy.get(selectors.alertMessage);
    }

    get acceptAlertBtn() {
        return cy.contains('button', 'Ok');
    }

    get snapshotMenuBtn() {
        return cy.get(selectors.snapshotMenuBtn);
    }

    get deleteSnapshotBtn() {
        return cy.get(selectors.deleteSnapshotBtn);
    }

    deleteSnapshotClick() {
        this.deleteSnapshotBtn.click();
    }

    openSnapshotMenu() {
        this.snapshotMenuBtn.click();
    }

    acceptAlert() {
        this.acceptAlertBtn.click();
    }

    deleteSnapshot() {
        this.openSnapshotMenu();
        this.deleteSnapshotClick();
    }
}

export default new Snapshots();