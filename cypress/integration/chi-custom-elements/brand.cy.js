describe('Brand', () => {
  const assertion = (el, value) => {
    cy.get(el)
      .children()
      .first()
      .should('have.attr', 'data-brand-type')
      .and('include', value);
  };

  const selectors = ['brand-base-default', 'brand-inverse-sm', 'brand-white-md', 'brand-black-lg', 'brand-black-default', 'brand-white-xxl'];

  before(() => {
    cy.visit('tests/custom-elements/brand.html');
  });

  beforeEach(() => {
    selectors.forEach((s) => {
      cy.get(`[data-cy=${s}]`, { timeout: 5000 })
        .should('have.class', 'hydrated')
        .children()
        .first()
        .should('match', 'span.chi-brand')
        .as(s);
    });
  });

  it('Base brand should be included inside the custom element', () => {
    assertion('@brand-base-default', 'base');
  });

  it('Inverse brand should be included inside the custom element', () => {
    assertion('@brand-inverse-sm', 'inverse');
  });

  it('White brand should be included inside the custom element', () => {
    assertion('@brand-white-md', 'white');
  });

  it('Black brand should be included inside the custom element', () => {
    assertion('@brand-black-lg', 'black');
  });

  it('Brand should have default appropriate class for size', () => {
    cy.get('@brand-black-default')
      .should('not.have.class', '-md');
  });

  it('Sized brand should have appropriate class', () => {
    cy.get('@brand-white-xxl')
      .should('have.class', '-xxl');
  });
});
