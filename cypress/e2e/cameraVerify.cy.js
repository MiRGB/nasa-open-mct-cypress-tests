/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import DisplayLayoutWindow from "../pages/DisplayLayoutWindow";
import Notifications from "../pages/Notifications";
import CameraWindow from "../pages/CameraWindow";
import CameraScreen from "../pages/CameraScreen";
import { cameraTitle, delayValue } from "../fixtures/cameraElement.json";
import { displayLayoutTitle } from "../fixtures/displayLayout.json";

describe('Camera screen', () => {
    it('visit dashboard', () => {
        Base.startOpenMCT();
        // logo should be visible
        MainScreen.mainLogo.should('be.visible');
    });

    it('add display layout', () => {
        // create element
        MainScreen.createElementMenu();
        CreateMenu.createDisplayLayout();

        // set name
        DisplayLayoutWindow.fillName(displayLayoutTitle);
        DisplayLayoutWindow.displayLayoutName.should('have.value', displayLayoutTitle);

        // click on My Items and save overlay plot element
        DisplayLayoutWindow.selectMyItemsElement();
        DisplayLayoutWindow.createDisplayLayout();
        DisplayLayoutWindow.displayLayoutBarName.should('contain.text', displayLayoutTitle);
        MainScreen.saveEditingElement();
        MainScreen.saveAndFinish();
        
        // success alert verify
        Notifications.successAlert.should('be.visible');
    });

    it('add camera', () => {
        // create element
        MainScreen.createElementMenu();
        CreateMenu.createCameraImg();

        // set name
        CameraWindow.fillName(cameraTitle);
        CameraWindow.cameraName.should('have.value', cameraTitle);

        // set load delay
        CameraWindow.setLoadDelay(delayValue);
        CameraWindow.loadDelayInput.should('have.value', delayValue);

        // save element
        CameraWindow.createCamera();

        // image verify
        MainScreen.imageCanvas.should('be.visible');

        // success alert verify
        Notifications.successAlert.should('be.visible');
    });

    it('camera verify', () => {
        // select real time
        MainScreen.openTimeMenu();
        MainScreen.openTimeMode();
        MainScreen.setRealTime();

        // verify
        MainScreen.timeBar.should('have.css', 'background-color', 'rgb(68, 88, 144)');

        // stop images and verify
        CameraScreen.stopCamera();
        CameraScreen.stopCameraBtn.should('have.css', 'background-color', 'rgb(255, 153, 0)');

        // Switch the image and compare its src with the previous one
        CameraScreen.compareImagesSrc();
    });

    it('delete dashboard', () => {
        // show all items
        MainScreen.showAllItems();

        // delete dashboard element
        MainScreen.clickDashboardElement();
        MainScreen.moreActions();
        MainScreen.removeElement();
        MainScreen.acceptDelete();
        MainScreen.animateElement.should('not.exist');
    });
});