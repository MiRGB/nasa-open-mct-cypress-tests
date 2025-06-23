/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import ClockWindow from "../pages/ClockWindow";
import Notifications from "../pages/Notifications";

describe('Notification verify', () => {
    let components;

    before(() => {
        cy.fixture("components.json").then((data) => {
            components = data;
        });
    });

    it('visit dashboard', () => {
        Base.startOpenMCT();
        // logo should be visible
        MainScreen.mainLogo.should('be.visible');
    });

    it('add clock in my items', () => {
        // create element
        MainScreen.createElementMenu();
        CreateMenu.createClockElement();
       
        // set name
        ClockWindow.fillName(components.clock.title);
       
        // click OK and verify
        ClockWindow.createClock();
        MainScreen.activeName.should('have.text', components.clock.title);

        // success alert verify
        Notifications.successAlert.should('be.visible');

        // number of new alerts verify
        Notifications.notificationsNumberBar.should('exist');
    });

    it('notification verify', () => {
        // check notifications panel
        Notifications.openNotificationWindow();
        Notifications.notificationItem.should('be.visible');
        Notifications.notificationTitle.should('exist');

        // clear notifications panel
        Notifications.clearAllNotifications();
        Notifications.notificationsNumberBar.should('not.exist');
    });

    it('delete clock', () => {
        // delete element and verify
        MainScreen.deleteCurrentElement();
        MainScreen.timezoneTitle.should('not.exist');
    });
});
