/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import StateGeneratorWindow from "../pages/StateGeneratorWindow";
import UserInterface from "../pages/UserInterface";
import Snapshots from "../pages/Snapshots";

describe('Notebook snapshots', () => {
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

    it('save snapshot and open notebook snapshots', () => {
        // open menu save snapshot and verify
        MainScreen.saveSnapshot();
        MainScreen.numberOfSnapshots.should('be.visible');

        // open notebook snapshots bar and check new snapshot
        UserInterface.showSnapshots();
        Snapshots.snapshotElement.should('exist');
    });

    it('remove snapshot', () => {
        // oepn more options menu delete snapshot and verify
        Snapshots.deleteSnapshot();
        Snapshots.alertMessage.should('be.visible');

        // accept allert and verify
        Snapshots.acceptAlert();
        Snapshots.snapshotElement.should('not.exist');

        // hide notebook snapshots bar and verify
        UserInterface.hideSnapshots();
        UserInterface.snapshotsText.should('not.be.visible');
    });

    it('remove state generator', () => {
        // delete element and verify
        MainScreen.deleteCurrentElement();
        MainScreen.elementMainCanvas.should('not.exist');
    });
});