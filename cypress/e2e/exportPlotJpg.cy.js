/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import OverlayPlotWindow from "../pages/OverlayPlotWindow";
import SineWaveGeneratorWindow from "../pages/SineWaveGeneratorWindow";
import EditingRightBar from "../pages/EditingRightBar";

describe('Create modify and export overlay plot JPG file', () => {
    let components;
    let values;

    before(() => {
        cy.fixture("components.json").then((data) => {
            components = data;
        });
        cy.fixture("values.json").then((data) => {
            values = data;
        });
    });

    it('visit dashboard', () => {
        Base.startOpenMCT();
        // logo should be visible
        MainScreen.mainLogo.should('be.visible');
    });

    it('add overlay plot', () => {
        // create element
        MainScreen.createElementMenu();
        CreateMenu.createOverlayPlotElement();

        // set name
        OverlayPlotWindow.fillName(components.overlayPlot.title);
        OverlayPlotWindow.overlayPlotName.should('have.value', components.overlayPlot.title);

        // click on My Items and save overlay plot element
        OverlayPlotWindow.myItemsClick();
        OverlayPlotWindow.createOverlayPlot();

        // verify
        MainScreen.stopEditingBtn.should('be.visible');

        // cancel editing
        MainScreen.stopEditing();
        MainScreen.acceptAlert();

        // verify
        MainScreen.acceptAlertBtn.should('not.exist');
    });

    it('add sine wave generator inside overlay plot', () => {
        // create element
        MainScreen.createElementMenu();
        CreateMenu.createSineWaveGeneratorElement();
        
        // set name and other properties and verify
        SineWaveGeneratorWindow.fillName(components.sineWaveGenerator.title);
        SineWaveGeneratorWindow.sinWaveGenName.should('have.value', components.sineWaveGenerator.title);

        SineWaveGeneratorWindow.fillPeriod(components.sineWaveGenerator.period);
        SineWaveGeneratorWindow.sinWaveGenPeriod.should('have.value', components.sineWaveGenerator.period);

        SineWaveGeneratorWindow.fillAmplitude(components.sineWaveGenerator.amplitude);
        SineWaveGeneratorWindow.sinWaveGenAmplitude.should('have.value', components.sineWaveGenerator.amplitude);

        SineWaveGeneratorWindow.fillOffset(components.sineWaveGenerator.offset);
        SineWaveGeneratorWindow.sinWaveGenOffset.should('have.value', components.sineWaveGenerator.offset);

        SineWaveGeneratorWindow.fillDataRate(components.sineWaveGenerator.dataRate);
        SineWaveGeneratorWindow.sinWaveGenDataRate.should('have.value', components.sineWaveGenerator.dataRate);
       
        // click OK and verify
        SineWaveGeneratorWindow.createSinWaveGen();
        MainScreen.elementMainCanvas.should('be.visible');
    });

    it('set real time and start animate', () => {
        // set real time data and verify
        MainScreen.setRealTimeData();
        MainScreen.timeBar.should('have.css', 'background-color', 'rgb(68, 88, 144)');

        // set one minute time and verify
        MainScreen.setOneMinuteTime();
        MainScreen.oneMinuteBarElement.should('exist');
    });

    it('modify look of overlay plot', () => {
        // show all items
        MainScreen.showAllItems();

        // start editing
        MainScreen.clickOnPlotElement(components.overlayPlot.title);
        MainScreen.startEditing();

        // change sin to cos and verify
        EditingRightBar.openPlotSeriesItem();
        EditingRightBar.valueOption.select(values.mathValues.cos);
        EditingRightBar.valueOption.should('have.value', values.mathValues.cos);

        // hide alarm markers and verify
        EditingRightBar.turnOffAlarmMarkers();
        EditingRightBar.alarmMarkersCheckbox.should('not.be.checked');

        // change colour from default to dark yellow and verify
        EditingRightBar.changeColour();
        EditingRightBar.switchToDarkYellow();
        EditingRightBar.colourBtn.should('have.css', 'background-color', 'rgb(149, 177, 38)');

        // set on log mode and verify
        EditingRightBar.turnOnLogMode();
        EditingRightBar.logModeCheckbox.should('be.checked');

        // move to styles
        EditingRightBar.goToStyles();

        // change plot background colour and verify
        EditingRightBar.changeBgColour();
        EditingRightBar.changeToWhite();
        EditingRightBar.bgColourPointer.should('have.css', 'background-color', 'rgb(255, 255, 255)');

        // change plot font colour and verify
        EditingRightBar.changeFontColour();
        EditingRightBar.changeToOrange();
        EditingRightBar.fontColourPointer.should('have.css', 'background-color', 'rgb(255, 153, 0)');

        // save overlay plot
        MainScreen.saveOverlayPlot();
        MainScreen.animateElement.should('be.visible');
    });

    it('export jpg file', () => {
        // download jpg file
        MainScreen.moreActions();
        MainScreen.exportJpg();

        // wait for download
        cy.wait(2000);

        // verify jpg file
        cy.readFile(`cypress/downloads/${components.overlayPlot.title} - plot.jpeg`).should('exist');
    });

    it('delete overlay plot and sine wave generator', () => {
        // delete element
        MainScreen.deleteCurrentElement();
        MainScreen.animateElement.should('not.exist');
    });
});
