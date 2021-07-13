describe('My First Test', () => {
  // List of labels found on page
  const labels = [
    'Pagination',
    'Data Table example'
  ];

  const pageContains = (value) => {
    cy.contains(value)
  };

  before(() => {
    cy.visit('');
  });

  it('Labels Exist', () => {

    labels.forEach(item => {
      pageContains(item);
    });
  })
})