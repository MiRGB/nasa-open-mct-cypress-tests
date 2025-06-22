/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import SineWaveGeneratorWindow from "../pages/SineWaveGeneratorWindow";
import { sinWaveGenTitle, periodValue, amplitudeValue, offsetValue, dataRateValue } from "../fixtures/sineWaveGenerator.json";

describe('Create and delete sine wave generator', () => {
    it('visit dashboard', () => {
        Base.startOpenMCT();
        // logo should be visible
        MainScreen.mainLogo.should('be.visible');
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

    it('remove sine wave generator', () => {
        // delete element and verify
        MainScreen.moreActions();
        MainScreen.removeElement();
        MainScreen.acceptDelete();
        MainScreen.elementMainCanvas.should('not.exist');
    });
});