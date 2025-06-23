/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import SineWaveGeneratorWindow from "../pages/SineWaveGeneratorWindow";

describe('Sine wave generator basic flow', () => {
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

    it('add sine wave generator in my items', () => {
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

    it('remove sine wave generator', () => {
        // delete element and verify
        MainScreen.deleteCurrentElement();
        MainScreen.elementMainCanvas.should('not.exist');
    });
});
