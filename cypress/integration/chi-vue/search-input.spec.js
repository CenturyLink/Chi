const SEARCH_INPUTS_DATA_CY = {
  BASE: '[data-cy="base-search-input-test"]',
  DISABLED: '[data-cy="disabled-search-input-test"]',
  ATTRS: '[data-cy="attrs-search-input-test"]',
  DELETE: '[data-cy="delete-value-search-input-test"]',
  EVENTS: '[data-cy="chi-events-trigger-search-input-test"]'
};
const COMPONENT_CLASSES = {
  CHI_FORM_ITEM: 'chi-form__item',
  CHI_SEARCH_INPUT: 'chi-search__input',
  CLOSE: '-close',
  ICON_RIGHT: '-icon--right',
  PORTAL: '-icon--primary',
  SEARCH: '-flat'
};
const EVENT_EXAMPLES = {
  BLUR: 'eventExampleChiBlur',
  CHANGE: 'eventExampleChiChange',
  CLEAN: 'eventExampleChiClean',
  FOCUS: 'eventExampleChiFocus',
  INPUT: 'eventExampleChiInput',
  SEARCH: 'eventExampleChiSearch',
};
const EVENTS = {
  BLUR: 'chiBlur',
  CHANGE: 'chiChange',
  CLEAN: 'chiClean',
  FOCUS: 'chiFocus',
  INPUT: 'chiInput',
  SEARCH: 'chiSearch',
};

const checkSizeClass = (el, value) => {
  el.should('have.class', value);
};

const checkAttr = (el, attr, value) => {
  el.invoke('attr', attr).should('eq', value);
};

const checkPortalAttr = (el, value) => {
  el.should('have.class', value);
};

const checkValue = (el, value) => {
  el.should('have.value', value);
};

describe('Search Input', () => {
  before(() => {
    cy.visit('tests/chi-vue/search-input.html');
  });

  describe('Base', () => {
    it('Should exist base search input', () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.BASE}`)
    });

    it('Should exist check chi-for__item search input', () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.BASE}`)
        .should('have.class', `${COMPONENT_CLASSES.CHI_FORM_ITEM}`);
    });

    it('Should exist check -icon--right search input', () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.BASE}`)
        .find('div').should('have.class', `${COMPONENT_CLASSES.ICON_RIGHT}`);
    });

    it('Should exist check chi-search__input search input', () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.BASE}`)
        .find('div')
        .find('input').should('have.class', `${COMPONENT_CLASSES.CHI_SEARCH_INPUT}`);
    });
  });

  describe('Disabled', () => {
    it('Should disable search input', () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.DISABLED}`)
        .find('input')
        .should('have.attr', 'disabled');
    });
  });

  describe('Sizes', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'];

    sizes.forEach((size) => {
      it(`Should have the class -${size} size`, () => {
        checkSizeClass(cy.get(`[data-cy='${size}-search-input-test']`).find('input'), `-${size}`);
      });
    });
  });

  describe('Attrs', () => {
    const attrs = ['name', 'placeholder'];

    attrs.forEach((attr) => {
      it(`Should have ${attr} attr`, () => {
        checkAttr(cy.get(`${SEARCH_INPUTS_DATA_CY.ATTRS}`).find('input'), attr, 'test');
      });
    });

    it(`Should have the portal attr set to true`, () => {
      checkPortalAttr(cy.get(`${SEARCH_INPUTS_DATA_CY.ATTRS}`)
        .find('button')
        .find('div')
        .find('i'), `${COMPONENT_CLASSES.PORTAL}`);
    });


  });

  describe('Events', () => {
    it(`Should trigger chiBlur`, () => {
      cy.window()
        .its(`${EVENT_EXAMPLES.BLUR}`)
        .then(chiBlur => {
          const component = chiBlur.$refs.testEvents;
          const spy = cy.spy();

          component.$on(`${EVENTS.BLUR}`, spy);
          cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find(`input`).focus().blur()
            .then(() => {
              expect(spy).to.be.called;
            });
        });
    });

    it(`Should trigger chiChange`, () => {
      cy.window()
        .its(`${EVENT_EXAMPLES.CHANGE}`)
        .then(chiChange => {
          const component = chiChange.$refs.testEvents;
          const spy = cy.spy();
          const value = 'test change';

          component.$on(`${EVENTS.CHANGE}`, spy);
          cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find('input').type(value).blur()
            .then(() => {
              checkValue(cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find('input'), value);
              expect(spy).to.be.called;
            });
        });
    });

    it(`Should trigger chiClean`, () => {
      cy.window()
        .its(`${EVENT_EXAMPLES.CLEAN}`)
        .then(chiClean => {
          const component = chiClean.$refs.testEvents;
          const spy = cy.spy();

          component.$on(`${EVENTS.CLEAN}`, spy);
          cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find('input').type('test');
          cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find(`.${COMPONENT_CLASSES.CLOSE}`).click()
            .then(() => {
              checkValue(cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find('input'), '');
              expect(spy).to.be.called;
            });
        });
    });

    it(`Should trigger chiFocus`, () => {
      cy.window()
        .its(`${EVENT_EXAMPLES.FOCUS}`)
        .then(chiFocus => {
          const component = chiFocus.$refs.testEvents;
          const spy = cy.spy();

          component.$on(`${EVENTS.FOCUS}`, spy);
          cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find('input').focus()
            .then(() => {
              expect(spy).to.be.called;
            });
        });
    });

    it(`Should trigger chiInput`, () => {
      cy.window()
        .its(`${EVENT_EXAMPLES.INPUT}`)
        .then(chiInput => {
          const component = chiInput.$refs.testEvents;
          const spy = cy.spy();
          const value = 'test';

          component.$on(`${EVENTS.INPUT}`, spy);
          cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find('input').type(value)
            .then(() => {
              checkValue(cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find('input'), value);
              expect(spy).to.be.called;
            });
        });
    });

    it(`Should trigger chiSearch`, () => {
      cy.window()
        .its(`${EVENT_EXAMPLES.SEARCH}`)
        .then(chiSearch => {
          const component = chiSearch.$refs.testEvents;
          const spy = cy.spy();

          component.$on(`${EVENTS.SEARCH}`, spy);
          cy.get(`${SEARCH_INPUTS_DATA_CY.EVENTS}`).find(`.${COMPONENT_CLASSES.SEARCH}`).click()
            .then(() => {
              expect(spy).to.be.calledOnce;
            });
        });
    });
  });
});