/// <reference types="cypress" />

import Base from "../pages/Base";
import MainScreen from "../pages/MainScreen";
import CreateMenu from "../pages/CreateMenu";
import ClockWindow from "../pages/ClockWindow";

describe('Clock element basic flow', () => {
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

  it('add clock', () => {
    // create element
    MainScreen.createElementMenu();
    CreateMenu.createClockElement();
   
    // set name
    ClockWindow.fillName(components.clock.title);
   
    // click OK and verify
    ClockWindow.createClock();
    MainScreen.activeName.should('have.text', components.clock.title);
  });

  it('delete clock', () => {
    // delete element and verify
    MainScreen.deleteCurrentElement();
    MainScreen.timezoneTitle.should('not.exist');
  });
});
