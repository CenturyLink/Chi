/// <reference types="Cypress" />

const CAROUSEL_CLASS = 'chi-carousel';
const CAROUSEL_ITEM_CLASS = 'chi-carousel__item';
const CAROUSEL_PREVIOUS_CLASS = '-previous';
const CAROUSEL_NEXT_CLASS = '-next';
const CAROUSEL_DOTS_CLASS = 'chi-carousel__dots';
const CAROUSEL_PAGINATION_CLASS = 'chi-carousel__pagination';
const CAROUSEL_VIEW_CHANGE_EVENT = 'chiViewChange';
const ACTIVE_CLASS = '-active';

describe('Carousel', () => {
  before(() => {
    cy.visit('tests/custom-elements/carousel.html');
  });

  describe('Base', () => {
    beforeEach(() => {
      cy.get("[data-cy='base']").as('base');
    });

    it(`Should contain ${CAROUSEL_CLASS} class`, () => {
      cy.get('@base').find(`.${CAROUSEL_CLASS}`).should.exist;
    });

    it('Should have 8 carousel items', () => {
      cy.get('@base')
        .find(`.${CAROUSEL_ITEM_CLASS}`)
        .should('have.length', 8);
    });

    it('Should show the previous button as disabled by default', () => {
      cy.get('@base')
        .find(`.${CAROUSEL_PREVIOUS_CLASS}`)
        .find('button')
        .should('be.disabled');
    });

    it('Should show the next button as disabled once the last item is shown', () => {
      cy.get('@base')
        .find(`.${CAROUSEL_NEXT_CLASS}`)
        .find('button')
        .as('nextButton')
        .click()
        .click()
        .then(() => {
          cy.get('@nextButton').should('be.disabled');
        });
    });

    it('Should show the previous button as disabled once the first item is shown', () => {
      cy.get('@base')
        .find(`.${CAROUSEL_PREVIOUS_CLASS}`)
        .find('button')
        .as('prevButton')
        .click()
        .click()
        .then(() => {
          cy.get('@prevButton').should('be.disabled');
        });
    });

    it.skip(`Should trigger the ${CAROUSEL_VIEW_CHANGE_EVENT} event`, () => {
      const spy = cy.spy();

      cy.get('body').then(el => {
        el.on(CAROUSEL_VIEW_CHANGE_EVENT, spy);
      });

      cy.get('@base')
        .find(`.${CAROUSEL_NEXT_CLASS}`)
        .find('button')
        .click()
        .then(() => {
          expect(spy).to.be.calledOnce;
        });
    });
  });

  describe('Single element per view', () => {
    beforeEach(() => {
      cy.get("[data-cy='single']").as('single');
      cy.get("[data-cy='single-one-item']").as('singleOneItem');
    });

    it('Should show the next button as disabled when going to the last item', () => {
      cy.get('@single')
        .find(`.${CAROUSEL_NEXT_CLASS}`)
        .find('button')
        .as('nextButton');
      for (let i = 0; i < 7; i++) {
        cy.get('@nextButton').click();
      }
      cy.get('@nextButton').should('be.disabled');
    });

    it('Should show the previous button as disabled when going back to the first item', () => {
      cy.get('@single')
        .find(`.${CAROUSEL_PREVIOUS_CLASS}`)
        .find('button')
        .as('prevButton');
      for (let i = 0; i < 7; i++) {
        cy.get('@prevButton').click();
      }
      cy.get('@prevButton').should('be.disabled');
    });

    it('Should not have the next and previous button with only one item', () => {
      cy.get('@singleOneItem')
        .find(`.${CAROUSEL_PREVIOUS_CLASS}`)
        .should('not.exist');
      cy.get('@singleOneItem')
        .find(`.${CAROUSEL_NEXT_CLASS}`)
        .should('not.exist');
    });
  });

  describe('Dots', () => {
    beforeEach(() => {
      cy.get("[data-cy='dots']").as('dots');
      cy.get('@dots')
        .find(`.${CAROUSEL_DOTS_CLASS}`)
        .children()
        .as('controls');
    });

    it('Should have 3 dot controls', () => {
      cy.get('@controls').should('have.length', 3);
    });

    it('Should show the first dot as active by default', () => {
      cy.get('@controls')
        .first()
        .should('have.class', ACTIVE_CLASS);
    });

    it('Should show the next button as disabled when going to the last item', () => {
      cy.get('@dots')
        .find(`.${CAROUSEL_NEXT_CLASS}`)
        .find('button')
        .as('nextButton')
        .click()
        .then(() => {
          cy.get('@controls')
            .eq(1)
            .should('have.class', ACTIVE_CLASS);
        });
      cy.get('@nextButton')
        .click()
        .then(() => {
          cy.get('@controls')
            .last()
            .should('have.class', ACTIVE_CLASS);
          cy.get('@nextButton').should('be.disabled');
        });
    });

    it('Should show the previous button as disabled when going back to the first item', () => {
      cy.get('@dots')
        .find(`.${CAROUSEL_PREVIOUS_CLASS}`)
        .find('button')
        .as('prevButton')
        .click()
        .then(() => {
          cy.get('@controls')
            .eq(1)
            .should('have.class', ACTIVE_CLASS);
        });
      cy.get('@prevButton')
        .click()
        .then(() => {
          cy.get('@controls')
            .first()
            .should('have.class', ACTIVE_CLASS);
          cy.get('@prevButton').should('be.disabled');
        });
    });
  });

  describe('Pagination', () => {
    beforeEach(() => {
      cy.get("[data-cy='pagination']").as('pagination');
    });

    it('Should show pagination of 1 of 8 by default', () => {
      cy.get('@pagination')
        .find(`.${CAROUSEL_PAGINATION_CLASS}`)
        .should('contain', '1 of 8');
    });

    it('Should show the next button as disabled when going to the last item', () => {
      cy.get('@pagination')
        .find(`.${CAROUSEL_NEXT_CLASS}`)
        .find('button')
        .as('nextButton');
      for (let i = 1; i < 8; i++) {
        cy.get('@pagination')
          .find(`.${CAROUSEL_PAGINATION_CLASS}`)
          .should('contain', `${i} of 8`);
        cy.get('@nextButton').click();
      }
      cy.get('@nextButton').should('be.disabled');
    });

    it('Should show the previous button as disabled when going back to the first item', () => {
      cy.get('@pagination')
        .find(`.${CAROUSEL_PREVIOUS_CLASS}`)
        .find('button')
        .as('prevButton');
      for (let i = 7; i > 0; i--) {
        cy.get('@prevButton').click();
        cy.get('@pagination')
          .find(`.${CAROUSEL_PAGINATION_CLASS}`)
          .should('contain', `${i} of 8`);
      }
      cy.get('@prevButton').should('be.disabled');
    });
  });

  describe('No Button Controllers', () => {
    beforeEach(() => {
      cy.get("[data-cy='no-button-controllers']").as('no-button-controllers');
      cy.get("[data-cy='base']").as('base');
    });

    it('Should hide buttons when no-button-controllers is true', () => {
      cy.get('@no-button-controllers')
        .should('have.attr', 'no-button-controllers')
      cy.get('@no-button-controllers')
        .find(`.${CAROUSEL_PREVIOUS_CLASS}`)
        .should('not.be.visible');
      cy.get('@no-button-controllers')
        .find(`.${CAROUSEL_NEXT_CLASS}`)
        .should('not.be.visible');
    });

    it('Should show buttons when no-button-controllers is false', () => {
      cy.get('@base')
        .should('not.have.attr', 'no-button-controllers')
      cy.get('@base')
      .find(`.${CAROUSEL_NEXT_CLASS}`)
      .should('be.visible');
      cy.get('@base')
      .find(`.${CAROUSEL_PREVIOUS_CLASS}`)
      .should('be.visible');
    });
  });

  describe('Autoplay', () => {
    beforeEach(() => {
      cy.get("[data-cy='autoplay']").as('autoplay');
      cy.get('@autoplay')
      .find('.chi-carousel__item')
      .as('items')
    });

    it('Should autoplay when the prop autoplay is true', () => {
      cy.get('@autoplay')
        .should('have.attr', 'autoplay')
    });

    it('Should have the prop interval', () => {
      cy.get('@autoplay')
        .should('have.attr', 'interval')
    });

    it('Normal autoplay and interval functionality', () => {
      const interval = 3000;

      cy.get('@items')
        .should('have.length', 8);
    
      cy.get('@autoplay')
        .find('.chi-carousel__item')
        .eq(0)
        .as('activeItem');

      cy.get('@activeItem')
        .should('contain', '1')

      cy.wait(interval);
    
      cy.get('@items')
        .eq(3)
        .as('activeItem')
      cy.get('@activeItem')
        .should('contain', '4')

      cy.wait(interval);
    
      cy.get('@items')
        .eq(6)
        .as('activeItem');
      cy.get('@activeItem')
        .should('contain', '7') 
    });

    it('Wait for autoplay to return to the first view', () => {
      const interval = 3000;

      cy.wait(interval);
    
      cy.get('@items')
        .eq(0)
        .as('activeItem');
      cy.get('@activeItem')
        .should('contain', '1')
    });
});
