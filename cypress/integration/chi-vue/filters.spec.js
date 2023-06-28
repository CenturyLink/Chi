const ACTIVE_CLASS = '-active';
const EXPANDED_CLASS = '-expanded';
const CLOSE_CLASS = '-close';
const BUTTON_CLASS = 'chi-button';
const ICON_CLASS = 'chi-icon';
const ICON_FILTER_CLASS = 'chi-filter';
const ICON_RELOAD_CLASS = 'icon-reset';
const SELECT_CLASS = 'chi-select';
const CHECKBOX_CLASS = 'chi-checkbox';
const INPUT_CLASS = 'chi-input';
const ACCORDION_CLASSES = {
  ACCORDION: 'chi-accordion',
  ITEM: 'chi-accordion__item',
  TRIGGER: 'chi-accordion__trigger'
};
const TOOLBAR_CLASSES = {
  FILTERS: 'chi-toolbar__filters',
};
const FILTERS_EVENTS = {
  FILTERS_CHANGE: 'chiFiltersChange',
};

const hasClassAssertion = (el, value) => {
  cy.get(el).should('have.class', value);
};

describe('Data Table Filters', () => {
  before(() => {
    cy.visit('tests/chi-vue/filters.html');
  });

  beforeEach(() => {
    cy.get(`[data-cy='data-table-filters']`)
      .as('filters');
  });

  it(`Should render all filters`, () => {
    cy.get('@filters')
      .children()
      .first()
      .children()
      .as('filters')
      .should('have.length', 4);
    cy
      .get('@filters')
      .first()
      .find(`.${SELECT_CLASS}`).should.exist;
    cy
      .get('@filters')
      .eq(1)
      .find(`.${INPUT_CLASS}`).should.exist;
    cy
      .get('@filters')
      .eq(2)
      .find(`.${CHECKBOX_CLASS}`).should.exist;
  });

  describe('Advanced filters', () => {
    beforeEach(() => {
      cy.get('@filters')
        .children()
        .first()
        .children()
        .last()
        .find(`.${BUTTON_CLASS}`)
        .first()
        .as('advancedFilter');
      cy.get('@filters')
        .find(`[title="Filters"]`)
        .as('popover');
    });

    it('Should render an advanced filters button when some filters are set to advanced', () => {
      cy.get('@advancedFilter').should.exist;
    });

    it('Should not render an advanced filters button on desktop when no filters are set to advanced', () => {
      cy.get('[data-cy="data-table-filters-no-advanced"]')
        .find(`.${TOOLBAR_CLASSES.FILTERS}-desktop`)
        .find(`.${ICON_CLASS}.${ICON_FILTER_CLASS}`)
        .should('not.exist');
    });

    it('Should open a chi popover on advanced filter click', () => {
      cy.get('@advancedFilter')
        .click()
        .then(() => {
          cy.get('@popover').should('have.attr', 'active');
        });
    });

    it('Should close the chi popover', () => {
      console.log("_____+++", cy.get('@popover'));
      cy.get('@popover')
        .find(`.${BUTTON_CLASS}`)
        .contains('Cancel')
        .click()
        .then(() => {
          cy.get('@popover').should('not.have.attr', 'active');
        });
      cy.get('@advancedFilter').click();
      cy.get('@advancedFilter')
        .click()
        .then(() => {
          cy.get('@popover').should('not.have.attr', 'active');
        });
      cy.get('@advancedFilter').click();
      cy.get('@popover')
        .find(`.${CLOSE_CLASS}`)
        .click()
        .then(() => {
          cy.get('@popover').should('not.have.attr', 'active');
        });
    });

    it('Should show an accordion within the chi popover that expands and collapses', () => {
      cy.get('@advancedFilter')
        .click()
        .then(() => {
          cy.get('@popover').find(`.${ACCORDION_CLASSES.ACCORDION}`).should
            .exist;
        });
      cy.get('@popover')
        .find(`.${ACCORDION_CLASSES.TRIGGER}`)
        .first()
        .as('firstTrigger')
        .click()
        .then(() => {
          cy.get(`.${ACCORDION_CLASSES.ITEM}`)
            .first()
            .as('firstAccordionItem');
          hasClassAssertion('@firstAccordionItem', `${EXPANDED_CLASS}`);
        });
      cy.get('@firstTrigger')
        .click()
        .then(() => {
          cy.get('@firstAccordionItem').should(
            'not.have.class',
            `${EXPANDED_CLASS}`
          );
        });
      cy.get('@popover')
        .find(`.${CLOSE_CLASS}`)
        .click();
    });

    it('Should contain all expected chi accordion items', () => {
      const labels = [
        'Status',
        'Textarea',
        'Advanced Checkbox',
        'Custom 1',
        'Custom 2'
      ];
      const types = [
        `.${SELECT_CLASS}`,
        'textarea',
        `.${CHECKBOX_CLASS}`,
        '#input-1',
        '#input-2',
        'chi-date-picker'
      ];

      cy.get('@advancedFilter').click();
      cy.get('@popover')
        .find(`.${ACCORDION_CLASSES.ITEM}`)
        .should('have.length', 5);
      labels.forEach(label => {
        cy.get('@popover').contains(label).should.exist;
      });
      types.forEach(type => {
        cy.get('@popover').find(type).should.exist;
      });
      cy.get('@popover')
        .find(`.${CLOSE_CLASS}`)
        .click();
    });

    it('Should show a disabled Apply button within the chi popover', () => {
      cy.get('@advancedFilter')
        .click()
        .then(() => {
          cy.get('@popover')
            .find(`.${BUTTON_CLASS}`)
            .contains('Apply')
            .should('have.attr', 'disabled');
        });
      cy.get('@popover')
        .find(`.${CLOSE_CLASS}`)
        .click();
    });

    it('Should show an enabled Apply button within the chi popover on filter change', () => {
      cy.get('@advancedFilter').click();
      cy.get('@popover')
        .find(`.${ACCORDION_CLASSES.TRIGGER}`)
        .first()
        .as('firstTrigger')
        .click();
      cy.get(`.${ACCORDION_CLASSES.ITEM}`)
        .first()
        .find('select')
        .select('Inactive')
        .then(() => {
          cy.get('@popover')
            .find(`.${BUTTON_CLASS}`)
            .contains('APPLYx')
            .should('not.have.attr', 'disabled');
          cy.get(`.${ACCORDION_CLASSES.ITEM}`)
            .first()
            .find('select')
            .select('Active');
        });
      cy.get('@firstTrigger').click();
      cy.get('@popover')
        .find(`.${CLOSE_CLASS}`)
        .click();
    });




    it('Should reset the chi popover filters and disable the Apply button on reset button click', () => {
      cy.get('@advancedFilter').click();
      cy.get('@popover')
        .find(`.${ACCORDION_CLASSES.TRIGGER}`)
        .first()
        .as('firstTrigger')
        .click()
        .then(() => {
          cy.get('@popover')
            .find(`.${ACCORDION_CLASSES.ITEM}`)
            .first()
            .find('select')
            .as('select')
            .select('Inactive');
        });
      cy.get('@popover')
        .find(`.${ICON_RELOAD_CLASS}`)
        .click()
        .then(() => {
          cy.get('@select').should('have.value', 'active');
          cy.get('@popover')
            .find(`.${BUTTON_CLASS}`)
            .contains('Apply')
            .should('have.attr', 'disabled');
        });
      cy.get('@firstTrigger').click();
      cy.get('@popover')
        .find(`.${CLOSE_CLASS}`)
        .click();
    });

    it('Should expand and collapse all advanced filters', () => {
      cy.get('@advancedFilter').click();
      cy.get('@popover')
        .find(`.${ACCORDION_CLASSES.ITEM}`)
        .as('items')
        .should('not.have.class', EXPANDED_CLASS);
      cy.get('@popover')
        .contains('Expand All')
        .click()
        .then(() => {
          hasClassAssertion('@items', EXPANDED_CLASS);
        });
      cy.get('@popover')
        .contains('Collapse All')
        .click()
        .then(() => {
          cy.get('@items').should('not.have.class', EXPANDED_CLASS);
        });
      cy.get('@popover')
        .find(`.${CLOSE_CLASS}`)
        .click();
    });

    it(`Should trigger the ${FILTERS_EVENTS.FILTERS_CHANGE} event`, () => {
      cy.window()
        .its('filtersExample')
        .then(filtersExample => {

          console.log("filtersExample.$refs", filtersExample.$refs);
          const component = filtersExample.$refs.filtersRef;
          const spy = cy.spy();

          component.$on(`${FILTERS_EVENTS.FILTERS_CHANGE}`, spy);
          cy.get('@advancedFilter').click();
          cy.get('@popover')
            .find(`.${ACCORDION_CLASSES.TRIGGER}`)
            .first()
            .as('firstTrigger')
            .click()
            .then(() => {
              cy.get('@popover')
                .find(`.${ACCORDION_CLASSES.ITEM}`)
                .first()
                .find('select')
                .as('select')
                .select('Inactive');
            });
          cy.get('@popover')
            .find(`.${BUTTON_CLASS}`)
            .contains('Apply')
            .click()
            .then(() => {
              expect(spy).to.be.called;
            });
          cy.get('@popover')
            .find(`.${CLOSE_CLASS}`)
            .click();
        });
    });
  });

});
