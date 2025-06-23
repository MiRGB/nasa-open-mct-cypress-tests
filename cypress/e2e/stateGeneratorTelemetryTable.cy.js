/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import StateGeneratorWindow from "../pages/StateGeneratorWindow";

describe('Telemetry table of state generator', () => {
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
    

    it('add state generator in my items', () => {
        // create element
        MainScreen.createElementMenu();
        CreateMenu.createStateGenerator();

        // set name and other properties and verify
        StateGeneratorWindow.fillName(components.stateGenerator.title);
        StateGeneratorWindow.stateGenName.should('have.value', components.stateGenerator.title);
        StateGeneratorWindow.fillDuration(components.stateGenerator.duration);
        StateGeneratorWindow.stateGenDuration.should('have.value', components.stateGenerator.duration);

        // click OK and verify
        StateGeneratorWindow.createStateGen();
        MainScreen.animateElement.should('be.visible');
    });

    it('set real time and start animate', () => {
        // set real time data and verify
        MainScreen.setRealTimeData();
        MainScreen.timeBar.should('have.css', 'background-color', 'rgb(68, 88, 144)');

        // set one minute time and verify
        MainScreen.setOneMinuteTime();
        MainScreen.oneMinuteBarElement.should('exist');
    });

    it('switches view to telemetry table of state generator', () => {
        // switch to telemetry table view
        MainScreen.switcherMenuOpen();
        MainScreen.telemetryTableScreen();

        // verify
        MainScreen.telemetryTableHeaders.should('be.visible');
    });

    it('search for data in telemetry table', () => {
        // click pause and verify
        MainScreen.pauseTelemetryTable();
        MainScreen.playBtn.should('be.visible');

        // type search phrase tap enter and verify
        MainScreen.searchForFakeData(components.telemetryTable.searchPhrase);
        MainScreen.fakeElement(components.telemetryTable.searchPhrase).should('not.exist');
    });

    it('remove state generator', () => {
        // delete element and verify
        MainScreen.deleteCurrentElement();
        MainScreen.elementMainCanvas.should('not.exist');
    });
});