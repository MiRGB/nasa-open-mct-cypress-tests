const selectors = {
    hideInspectPanelBtn: 'button[name="Collapse Inspect Pane"]',
    inspectField: '.c-inspector__content',
    showInspectPanelBtn: 'button[name="Expand Inspect Pane"]',
    hideBrowsePanelBtn: 'button[name="Collapse Browse Pane"]',
    browseField: 'div[aria-label="Main Tree"]',
    showBrowsePanelBtn: 'button[name="Expand Browse Pane"]',
    snapshotsText: 'Notebook Snapshots',
    showSnapshotsBtn: 'button[aria-label="Show Snapshots"]',
    hideSnapshotsBtn: 'button[aria-label="Hide Snapshots"]',
};

class UserInterface {
    get hideInspectPanelBtn() {
        return cy.get(selectors.hideInspectPanelBtn);
    }

    get inspectField() {
        return cy.get(selectors.inspectField);
    }

    get showInspectPanelBtn() {
        return cy.get(selectors.showInspectPanelBtn);
    }

    get hideBrowsePanelBtn() {
        return cy.get(selectors.hideBrowsePanelBtn);
    }

    get browseField() {
        return cy.get(selectors.browseField);
    }

    get showBrowsePanelBtn() {
        return cy.get(selectors.showBrowsePanelBtn);
    }

    get snapshotsText() {
        return cy.contains('div', selectors.snapshotsText);
    }

    get showSnapshotsBtn() {
        return cy.get(selectors.showSnapshotsBtn);
    }

    get hideSnapshotsBtn() {
        return cy.get(selectors.hideSnapshotsBtn);
    }

    showSnapshots() {
        this.showSnapshotsBtn.click();
    }

    hideSnapshots() {
        this.hideSnapshotsBtn.click();
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
