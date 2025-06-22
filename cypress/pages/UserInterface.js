class UserInterface {
    get hideInspectPanelBtn() {
        return cy.get('button[name="Collapse Inspect Pane"]');
    }

    get inspectField() {
        return cy.get('.c-inspector__content');
    }

    get showInspectPanelBtn() {
        return cy.get('button[name="Expand Inspect Pane"]');
    }

    get hideBrowsePanelBtn() {
        return cy.get('button[name="Collapse Browse Pane"]');
    }

    get browseField() {
        return cy.get('div[aria-label="Main Tree"]');
    }

    get showBrowsePanelBtn() {
        return cy.get('button[name="Expand Browse Pane"]');
    }

    get snapshotsText() {
        return cy.contains('div', 'Notebook Snapshots');
    }

    get showSnapshotsBtn() {
        return cy.get('button[aria-label="Show Snapshots"]');
    }

    get hideSnapshotsBtn() {
        return cy.get('button[aria-label="Hide Snapshots"]');
    }

    showSnapshots() {
        this.showSnapshotsBtn.click();
    }

    hideSnapshots() {
        this.hideSnapshotsBtn.click()
    }

    showBrowsePanel() {
        this.showBrowsePanelBtn.click();
    }

    hideBrowsePanel() {
        this.hideBrowsePanelBtn.click();
    }

    showInspectPanel() {
        this.showInspectPanelBtn.click();
    }

    hideInspectPanel() {
        this.hideInspectPanelBtn.click();
    }
}

export default new UserInterface();