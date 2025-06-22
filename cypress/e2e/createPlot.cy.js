/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import OverlayPlotWindow from "../pages/OverlayPlotWindow";
import SineWaveGeneratorWindow from "../pages/SineWaveGeneratorWindow";
import EditingRightBar from "../pages/EditingRightBar";
import { overlayPlotTitle } from "../fixtures/overlayPlot.json";
import { cosValue } from "../fixtures/data.json";
import { sinWaveGenTitle, periodValue, amplitudeValue, offsetValue, dataRateValue } from "../fixtures/sineWaveGenerator.json";

describe('Create and modify overlay plot', () => {
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
        OverlayPlotWindow.fillName(overlayPlotTitle);

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

    it('add sine wave generator', () => {
        // create element
        MainScreen.createElementMenu();
        CreateMenu.createSineWaveGeneratorElement();
        
        // set name and other properties and verify
        SineWaveGeneratorWindow.fillName(sinWaveGenTitle);
        SineWaveGeneratorWindow.sinWaveGenName.should('have.value', sinWaveGenTitle);
        SineWaveGeneratorWindow.fillPeriod(periodValue);
        SineWaveGeneratorWindow.sinWaveGenPeriod.should('have.value', periodValue);
        SineWaveGeneratorWindow.fillAmplitude(amplitudeValue);
        SineWaveGeneratorWindow.sinWaveGenAmplitude.should('have.value', amplitudeValue);
        SineWaveGeneratorWindow.fillOffset(offsetValue);
        SineWaveGeneratorWindow.sinWaveGenOffset.should('have.value', offsetValue);
        SineWaveGeneratorWindow.fillDataRate(dataRateValue);
        SineWaveGeneratorWindow.sinWaveGenDataRate.should('have.value', dataRateValue);
       
        // click OK and verify
        SineWaveGeneratorWindow.createSinWaveGen();
        MainScreen.elementMainCanvas.should('be.visible');
    });

    it('set real time and start animate', () => {
        // set real time data
        MainScreen.openTimeMenu();
        MainScreen.openTimeMode();
        MainScreen.setRealTime();

        // verify
        MainScreen.timeBar.should('have.css', 'background-color', 'rgb(68, 88, 144)');

        // set one minute time
        MainScreen.openTimeConductor();
        MainScreen.setOneMinute();

        // verify
        MainScreen.oneMinuteBarElement.should('exist');
    });

    it('modify look of overlay plot', () => {
        // show all items
        MainScreen.showAllItems();

        // start editing
        MainScreen.clickOnPlotElement();
        MainScreen.startEditing();

        // change sin to cos and verify
        EditingRightBar.openPlotSeriesItem();
        EditingRightBar.valueOption.select(cosValue);
        EditingRightBar.valueOption.should('have.value', cosValue);

        // hide alarm markers and verify
        EditingRightBar.turnOffAlarmMarkers();
        EditingRightBar.alarmMarkersCheckbox.should('not.be.checked');

        // change colour from default to dark yellow
        EditingRightBar.changeColour();
        EditingRightBar.switchToDarkYellow();
        EditingRightBar.colourBtn.should('have.css', 'background-color', 'rgb(149, 177, 38)');

        // save overlay plot
        MainScreen.saveEditingElement();
        MainScreen.saveAndFinish();
        MainScreen.animateElement.should('be.visible');
    });

    it('delete overlay plot', () => {
        // delete element
        MainScreen.moreActions();
        MainScreen.removeElement();
        MainScreen.acceptDelete();
        MainScreen.animateElement.should('not.exist');
    });
});