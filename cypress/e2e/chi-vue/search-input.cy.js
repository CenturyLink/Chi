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
  ICON_PRIMARY: '-icon--primary',
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
        .should('exist');
    });

    it(`Should have the class ${COMPONENT_CLASSES.CHI_FORM_ITEM}`, () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.BASE}`)
        .should('have.class', `${COMPONENT_CLASSES.CHI_FORM_ITEM}`);
    });

    it(`Should have the class ${COMPONENT_CLASSES.ICON_RIGHT}`, () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.BASE}`)
        .find('div').should('have.class', `${COMPONENT_CLASSES.ICON_RIGHT}`);
    });

    it(`Should render an input with the class ${COMPONENT_CLASSES.CHI_SEARCH_INPUT}`, () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.BASE}`)
        .find('input')
        .should('have.class', `${COMPONENT_CLASSES.CHI_SEARCH_INPUT}`);
    });
  });

  describe('Disabled', () => {
    it('Should have the attributed disabled', () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.DISABLED}`)
        .find('input')
        .should('have.attr', 'disabled');
    });
  });

  describe('Sizes', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'];

    sizes.forEach((size) => {
      it(`Should have the class -${size}`, () => {
        const element = cy.get(`[data-cy='${size}-search-input-test']`).find('input');
  
        checkSizeClass(element, `-${size}`);
      });
    });
  });

  describe('Attrs', () => {
    const attrs = ['name', 'placeholder'];

    attrs.forEach((attr) => {
      it(`Should have ${attr} attr`, () => {
        const inputElement = cy.get(`${SEARCH_INPUTS_DATA_CY.ATTRS}`).find('input');
  
        checkAttr(inputElement, attr, 'test');
      });
    });

    it(`Should have class ${COMPONENT_CLASSES.ICON_PRIMARY} when the portal attr is set to true`, () => {
      cy.get(`${SEARCH_INPUTS_DATA_CY.ATTRS}`)
        .find('button')
        .find('div')
        .find('i')
        .should('have.class', COMPONENT_CLASSES.ICON_PRIMARY);
    });
  });

  describe('Events', () => {
    it(`Should emit ${EVENTS.BLUR}`, () => {
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

    it(`Should emit ${EVENTS.CHANGE}`, () => {
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

    it(`Should emit ${EVENTS.CLEAN}`, () => {
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

    it(`Should emit ${EVENTS.FOCUS}`, () => {
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

    it(`Should emit ${EVENTS.INPUT}`, () => {
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

    it(`Should emit ${EVENTS.SEARCH}`, () => {
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
