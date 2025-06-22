/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import VersionPopup from "../pages/VersionPopup";

describe('Version information', () => {
    it('visit dashboard', () => {
        Base.startOpenMCT();
        // logo should be visible
        MainScreen.mainLogo.should('be.visible');
    });

    it('show version information and verify', () => {
        // click on logo and verify popup
        MainScreen.mainLogo.click();
        VersionPopup.nasaPicture.should('be.visible');

        // close popup and verify
        VersionPopup.closeWindow();
        VersionPopup.nasaPicture.should('not.exist');
    });
});