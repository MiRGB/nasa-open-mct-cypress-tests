/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import UserInterface from "../pages/UserInterface";

describe('Hide and show UI panels', () => {
    it('visit dashboard', () => {
        Base.startOpenMCT();
        // logo should be visible
        MainScreen.mainLogo.should('be.visible');
    });

    it('inspect panel', () => {
        // click on hide button and verify
        UserInterface.hideInspectPanel();
        UserInterface.inspectField.should('not.be.visible');

        // click on show button and verify
        UserInterface.showInspectPanel();
        UserInterface.inspectField.should('be.visible');
    });

    it('browse panel', () => {
        // click on hide button and verify
        UserInterface.hideBrowsePanel();
        UserInterface.browseField.should('not.be.visible');

        // click on show button and verify
        UserInterface.showBrowsePanel();
        UserInterface.browseField.should('be.visible');
    });

    it('snapshot panel', () => {
        // click on show button and verify
        UserInterface.showSnapshots();
        UserInterface.snapshotsText.should('be.visible');

        // click on hide button and verify
        UserInterface.hideSnapshots();
        UserInterface.snapshotsText.should('not.be.visible');
    });
});