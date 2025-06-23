/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import DisplayLayoutWindow from "../pages/DisplayLayoutWindow";
import Notifications from "../pages/Notifications";
import CameraWindow from "../pages/CameraWindow";
import CameraScreen from "../pages/CameraScreen";

describe('Camera screen', () => {
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

  it('add display layout', () => {
    // create element
    MainScreen.createElementMenu();
    CreateMenu.createDisplayLayout();

    // set name
    DisplayLayoutWindow.fillName(components.displayLayout.title);
    DisplayLayoutWindow.displayLayoutName.should('have.value', components.displayLayout.title);

    // click on My Items and save overlay plot element
    DisplayLayoutWindow.selectMyItemsElement();
    DisplayLayoutWindow.createDisplayLayout();
    DisplayLayoutWindow.displayLayoutBarName.should('contain.text', components.displayLayout.title);
    MainScreen.saveElement();
    
    // success alert verify
    Notifications.successAlert.should('be.visible');
  });

  it('add camera', () => {
    // create element
    MainScreen.createElementMenu();
    CreateMenu.createCameraImg();

    // set name
    CameraWindow.fillName(components.camera.title);
    CameraWindow.cameraName.should('have.value', components.camera.title);

    // set load delay
    CameraWindow.setLoadDelay(components.camera.delay);
    CameraWindow.loadDelayInput.should('have.value', components.camera.delay);

    // save element
    CameraWindow.createCamera();

    // image verify
    MainScreen.imageCanvas.should('be.visible');

    // success alert verify
    Notifications.successAlert.should('be.visible');
  });

  it('camera verify', () => {
    // select real time
    MainScreen.setRealTimeData();

    // verify
    MainScreen.timeBar.should('have.css', 'background-color', 'rgb(68, 88, 144)');

    // stop images and verify
    CameraScreen.stopCamera();
    CameraScreen.stopCameraBtn.should('have.css', 'background-color', 'rgb(255, 153, 0)');

    // Switch the image and compare its src with the previous one
    CameraScreen.compareImagesSrc();
  });

  it('delete dashboard', () => {
    // show all items and click dashboard
    MainScreen.showAllItems();
    MainScreen.clickDashboardElement(components.displayLayout.title);

    // delete dashboard element
    MainScreen.deleteCurrentElement();
    MainScreen.animateElement.should('not.exist');
  });
});
