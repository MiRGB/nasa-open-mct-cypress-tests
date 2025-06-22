/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import ClockWindow from "../pages/ClockWindow";
import { clockTitle } from "../fixtures/clockElement.json";

describe('Create and delete clock element', () => {
    it('visit dashboard', () => {
        Base.startOpenMCT();
        // logo should be visible
        MainScreen.mainLogo.should('be.visible');
    });

    it('add clock', () => {
        // create element
        MainScreen.createElementMenu();
        CreateMenu.createClockElement();
       
        // set name
        ClockWindow.fillName(clockTitle);
       
        // click OK and verify
        ClockWindow.createClock();
        MainScreen.activeName.should('have.text', clockTitle);
    });

    it('delete clock', () => {
        // delete element and verify
        MainScreen.moreActions();
        MainScreen.removeElement();
        MainScreen.acceptDelete();
        MainScreen.timezoneTitle.should('not.exist');
    });
});