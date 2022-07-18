const EXPANSION_PANEL_DATA_CY = {
  BASE: {
    EXPANSION_PANEL_FIRST: '[data-cy="base-expansion-panel-1"]',
    EXPANSION_PANEL_SECOND: '[data-cy="base-expansion-panel-2"]',
    EXPANSION_PANEL_THIRD: '[data-cy="base-expansion-panel-3"]',
    NEXT_BUTTON: `[data-chi-epanel-action='next']`,
    PREVIOUS_BUTTON: `[data-chi-epanel-action='previous']`,
    CHANGE_BUTTON: `[data-chi-epanel-action='change']`
  },
  STATE: {
    EXPANSION_PANEL_DONE: '[data-cy="state-expansion-panel-done"]',
    EXPANSION_PANEL_ACTIVE: '[data-cy="state-expansion-panel-active"]',
    EXPANSION_PANEL_PENDING: '[data-cy="state-expansion-panel-pending"]',
  },
  NUMBER: {
    NUMBERED_EXPANSION_PANEL: '[data-cy="number-expansion-panel-numbered"]',
    NON_NUMBERED_EXPANSION_PANEL: '[data-cy="number-expansion-panel-non-numbered"]'
  },
  BORDER: {
    BORDERED_EXPANSION_PANEL: '[data-cy="border-expansion-panel-bordered"]',
    NON_BORDERED_EXPANSION_PANEL: '[data-cy="border-expansion-panel-non-bordered"]',
  },
  SLOT: {
    ACTIVE_EXPANSION_PANEL: `[data-cy="slot-expansion-panel-active"]`,
    DONE_EXPANSION_PANEL: `[data-cy="slot-expansion-panel-done"]`
  }
};
const ACTIVE_CLASS = '-active';
const DONE_CLASS = '-done';
const PENDING_CLASS = '-pending';

const NUMBER_CLASS = 'chi-epanel__number';

const BORDER_CLASS= '-bordered';

const SLOT_CLASS_ACTIVE= 'chi-epanel__content-active';
const SLOT_CLASS_CHANGE= 'change-slot';
const SLOT_CLASS_DONE= 'done-slot';
const SLOT_CLASS_FOOTER= 'chi-epanel__footer';
const SLOT_CLASS_FOOTER_START= 'footer-start-slot';
const SLOT_CLASS_FOOTER_END= 'footer-end-slot';

describe('Expansion Panel', () => {
  before(() => {
    cy.visit('tests/chi-vue/expansion-panel.html');
  });

  describe('Base', () => {
    it('Should check if the first expansion panel is active', () => {
      cy.get(`${EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST}`).first().should('have.class', `${ACTIVE_CLASS}`);
    });

    it('Should check if clicking Continue opens the next expansion panel and closes the current one', () => {
      // Given - first panel is active/open and second panel is collapsed/pending
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).should('have.class', `${ACTIVE_CLASS}`);
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_SECOND).should('have.class', `${PENDING_CLASS}`);

      // When - continue button is clicked
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).find(EXPANSION_PANEL_DATA_CY.BASE.NEXT_BUTTON).click();
      
      // Then - First panel item is collapsed/done and second panel item is open/active
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).should('have.class', `${DONE_CLASS}`);
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_SECOND).should('have.class', `${ACTIVE_CLASS}`);
    });

    it('Should check if clicking Previous opens the previous expansion panel and closes the current one', () => {
      // When - previous button is clicked
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_SECOND).find(EXPANSION_PANEL_DATA_CY.BASE.PREVIOUS_BUTTON).click();
      
      // Then - First panel item is open/active and second panel item is collapsed/pending
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).should('have.class', `${ACTIVE_CLASS}`);
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_SECOND).should('have.class', `${PENDING_CLASS}`);
    });

    it('Should check if clicking the Change button enables the expansion panel of the current one and closes the opened panel', () => {
      // Given - First Panel is done as continue button for first panel was clicked
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).find(EXPANSION_PANEL_DATA_CY.BASE.NEXT_BUTTON).click();

      // When - change button of first panel is clicked
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).find(EXPANSION_PANEL_DATA_CY.BASE.CHANGE_BUTTON).click();
      
      // Then - First panel item is collapsed/done and second panel item is open/active
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).should('have.class', `${ACTIVE_CLASS}`);
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_SECOND).should('have.class', `${PENDING_CLASS}`);
    });

    it('Should check if clicking the Finish button completes the selection steps of all the panels with read only state', () => {
      // When - change button of first panel is clicked
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).find(EXPANSION_PANEL_DATA_CY.BASE.NEXT_BUTTON).click();
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_SECOND).find(EXPANSION_PANEL_DATA_CY.BASE.NEXT_BUTTON).click();
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_THIRD).find(EXPANSION_PANEL_DATA_CY.BASE.NEXT_BUTTON).click();

      // Then - All panels have are collapsed/done
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_FIRST).should('have.class', `${DONE_CLASS}`);
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_SECOND).should('have.class', `${DONE_CLASS}`);
      cy.get(EXPANSION_PANEL_DATA_CY.BASE.EXPANSION_PANEL_THIRD).should('have.class', `${DONE_CLASS}`);
    });
  });

  describe('State', () => {
    it('Should check if expansion panel has state as done', () => {      
      // Assert - Panel item has state done
      cy.get(EXPANSION_PANEL_DATA_CY.STATE.EXPANSION_PANEL_DONE).should('have.class', `${DONE_CLASS}`);
    });

    it('Should check if expansion panel has state as active', () => {
      // Assert - Panel item has state active
      cy.get(EXPANSION_PANEL_DATA_CY.STATE.EXPANSION_PANEL_ACTIVE).should('have.class', `${ACTIVE_CLASS}`);
    });

    it('Should check if expansion panel has state as pending', () => {
      // Assert - Panel item has state pending
      cy.get(EXPANSION_PANEL_DATA_CY.STATE.EXPANSION_PANEL_PENDING).should('have.class', `${PENDING_CLASS}`);
    });
  });

  describe('Number', () => {
    it('Should check if expansion panel has step number', () => {
      // Assert - Panel has number class
      cy.get(`${EXPANSION_PANEL_DATA_CY.NUMBER.NUMBERED_EXPANSION_PANEL}`).find(`.${NUMBER_CLASS}`).should('exist');
    });

    it('Should check if expansion panel has no step number', () => {
      // Assert - Panel does not have number class
      cy.get(`${EXPANSION_PANEL_DATA_CY.NUMBER.NON_NUMBERED_EXPANSION_PANEL}`).find(`.${NUMBER_CLASS}`).should('not.exist');
    });
  });

  describe('Border', () => {
    it('Should check if bordered expansion panel has border', () => {
      // Assert - Panel has border class
      cy.get(`${EXPANSION_PANEL_DATA_CY.BORDER.BORDERED_EXPANSION_PANEL}`).should('have.class', BORDER_CLASS);
    });

    it('Should check if non bordered expansion panel has no border', () => {
      // Assert - Panel does not have border class
      cy.get(`${EXPANSION_PANEL_DATA_CY.BORDER.NON_BORDERED_EXPANSION_PANEL}`).should('not.have.class', BORDER_CLASS);
    });
  });

  describe('Slot', () => {
    it('Should check if active slot is available in the panel', () => {
      // Assert - Panel has active slot class and it is visible when expansion panel state is active
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.ACTIVE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_ACTIVE}`).should('exist').should('be.visible');
      // Assert - Panel has active slot class but it is visible if expansion panel state is not active
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.DONE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_ACTIVE}`).should('exist').should('not.be.visible');
    });

    it('Should check if done slot is available in the panel', () => {
      // Assert - Panel has done slot class and it is visible when expansion panel state is done
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.DONE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_DONE}`).should('exist').should('be.visible');
      // Assert - Panel has done slot class and it is not visible when expansion panel state is not done
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.ACTIVE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_DONE}`).should('exist').should('not.be.visible');
    });

    it('Should check if change slot is available in the panel', () => {
      // Assert - Panel has change slot class and it is visible when expansion panel state is done
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.DONE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_CHANGE}`).should('exist').should('be.visible');
      // Assert - Panel has change slot class and it is not visible when expansion panel state is not done
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.ACTIVE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_CHANGE}`).should('exist').should('not.be.visible');
    });

    it('Should check if footer slot is available in the panel', () => {
      // Assert - Panel has footer slot class and it is visible when expansion panel state is active
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.ACTIVE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_FOOTER}`).should('exist').should('be.visible');
      // Assert - Panel has footer slot class and it is not visible when expansion panel state is not done
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.DONE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_FOOTER}`).should('exist').should('not.be.visible');
    });

    it('Should check if footer start slot is available in the panel', () => {
      // Assert - Panel has footer start slot class and it is visible when expansion panel state is active
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.ACTIVE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_FOOTER_START}`).should('exist').should('be.visible');
      // Assert - Panel has footer start slot class and it is not visible when expansion panel state is not done
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.DONE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_FOOTER_START}`).should('exist').should('not.be.visible');
    });

    it('Should check if footer end slot is available in the panel', () => {
      // Assert - Panel has footer end slot class and it is visible when expansion panel state is active
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.ACTIVE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_FOOTER_END}`).should('exist').should('be.visible');
      // Assert - Panel has footer end slot class and it is not visible when expansion panel state is not done
      cy.get(`${EXPANSION_PANEL_DATA_CY.SLOT.DONE_EXPANSION_PANEL}`).find(`.${SLOT_CLASS_FOOTER_END}`).should('exist').should('not.be.visible');
    });
  });
});
