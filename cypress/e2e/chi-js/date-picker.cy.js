describe('Date picker', () => {
  beforeEach(() => {
    cy.visit('tests/components/date-picker.html');
  })

  describe('Date picker 1', () => {
    const datePickerInput = '#datepicker-1 input'; 
    const datePickerPopover = '#datepicker-1 .chi-popover';
    const toggleButton = '#toggle-datepicker';
    
    it('should show date picker popover when input is focused', () => {
      cy.get(datePickerInput).click();

      cy.get(datePickerPopover).should('exist').and('be.visible');

      // Should display month, day names and days
      cy.get(datePickerPopover).within(() => {
        cy.get('.chi-datepicker__month-row').should('exist');
        cy.get('.chi-datepicker__day-names').should('exist');
        cy.get('.chi-datepicker__days').should('exist');
      });
    });

    describe('Date limits: min and max', () => {
      it('should disable days before the min date (01/24/2019)', () => {
        cy.get(datePickerInput).click();

        cy.get(datePickerPopover).should('be.visible');

        // All days before 24 should have the .-disabled or .-inactive class
        cy.get(datePickerPopover).within(() => {
          cy.get('.chi-datepicker__day')
            .filter((index, el) => Number(el.innerText) < 24)
            .each($el => {
              cy.wrap($el).should('have.class', '-inactive'); // or '-disabled' depending on class naming
            });

          // The 24th should NOT be disabled
          cy.get('.chi-datepicker__day')
            .contains('24')
            .should('not.have.class', '-inactive')
        });
      })

      it('should disable days after the max date (01/28/2019)', () => {
        cy.get(datePickerInput).click();

        cy.get(datePickerPopover).should('be.visible');

        // Days after 28 should be marked inactive
        cy.get(datePickerPopover).within(() => {
          cy.get('.chi-datepicker__day')
            .filter((index, el) => Number(el.innerText) > 28)
            .each($el => {
              cy.wrap($el).should('have.class', '-inactive'); // or '-disabled'
            });

          // Day 28 should NOT be inactive
          cy.get('.chi-datepicker__day')
            .contains('28')
            .should('not.have.class', '-inactive')
        })
      });
    })

    it('should toggle the datepicker popover when clicking the input multiple times', () => {
      // Click the toggle button to open the datepicker
      cy.get(toggleButton).click();

      cy.get(datePickerPopover).should('be.visible');

      // Click the toggle button again to close it
      cy.get(toggleButton).click();

      // Popover should now be hidden
      cy.get(datePickerPopover).should('not.be.visible');
    });

    it('should set the date when clicking the setDate button', () => {
      const setDateButton = '#setDate-datepicker';
      const oldDate = '01/24/2019';
      const expectedDate = '01/25/2019';

      // Check the old date is in place
      cy.get(datePickerInput).should('have.value', oldDate);

      // Open datepicker
      cy.get(datePickerInput).click();

      // Check active date is equal to the old date
      cy.get(datePickerPopover).within(() => {
        cy.get('.chi-datepicker__day.-active')
          .should('exist')
          .and('have.attr', 'data-date', oldDate)
      })

      // Set a new date by clicking on the set date button
      cy.get(setDateButton).click();

      // Check that the new date is displayed as the active one in the date picker
      cy.get(datePickerPopover).within(() => {
        cy.get('.chi-datepicker__day.-active')
          .should('exist')
          .and('have.attr', 'data-date', expectedDate)
      })

      // Assert that the input value updates to the expected date
      cy.get(datePickerInput).should('have.value', expectedDate);

      //  The popover should be hidden
      cy.get(datePickerPopover).should('not.be.visible');
    });

    it('should update input and close popover when a date is clicked', () => {
      const expectedDate = '01/26/2019';

      // Open datepicker
      cy.get(toggleButton).click();

      // Click on the date "26"
      cy.get(datePickerPopover).within(() => {
        cy.get('.chi-datepicker__day')
          .contains('26')
          .click()
          .click(); // Double click needed to close the datepicker (only for testing)
      })

      // Input should have the new date
      cy.get(datePickerInput).should('have.value', expectedDate);

      //  The popover should be hidden
      cy.get(datePickerPopover).should('not.be.visible');
    });

    it('should dispose the date picker and prevent further interaction', () => {
      const disposeButton = '#dispose-datepicker';

      // Confirm datepicker works before disposal
      cy.get(datePickerInput).click();
      cy.get(datePickerPopover).should('exist').should('be.visible');

      // Close datepicker
      cy.get(toggleButton).click();
      cy.wait(500)
      cy.get(datePickerPopover).should('not.be.visible');

      // Click the dispose button to remove the datepicker
      cy.get(disposeButton).click()

      // Try to open it again, it should not appear or exist
      cy.get(datePickerInput).click();
      cy.get(datePickerPopover).should('not.exist');
    });
  })

  describe('Date picker 2', () => {
    const datePickerInput = '#datepicker-2 input';
    const datePickerPopover = '#datepicker-2 .chi-popover';
    
    describe('Next and Prev months', () => {
      it('should update the month label when clicking the next button', () => {
        cy.get(datePickerInput).click();

        cy.get(datePickerPopover).should('be.visible');

        // Popover should contain initial month
        cy.get(datePickerPopover).within(() => {
          cy.get('.chi-datepicker__month')
            .should('contain.text', 'January 2019');

          // Click the "next" month arrow
          cy.get('.next').click();

          // Assert that month label has updated
          cy.get('.chi-datepicker__month')
            .should('contain.text', 'February 2019');
        });
      });

      it('should update the month label when clicking the prev button', () => {
        cy.get(datePickerInput).click();

        cy.get(datePickerPopover).should('be.visible');

        // Popover should contain initial month
        cy.get(datePickerPopover).within(() => {
          cy.get('.chi-datepicker__month')
            .should('contain.text', 'January 2019');

          // Click the "next" month arrow
          cy.get('.prev').click();

          // Assert that month label has updated
          cy.get('.chi-datepicker__month')
            .should('contain.text', 'December 2018');
        });
      });
    })
  });

  describe('Date picker 3', () => {
    const datePickerInput = '#datepicker-3 input';
    const datePickerPopover = '#datepicker-3 .chi-popover';

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const currentDate = `${month}/${day}/${year}`;

    it('should display today\'s date in datepicker if it doesn\'t have a default date', () => {
      cy.get(datePickerInput).click();

      // Check the current date is visible
      cy.get(datePickerPopover).within(() => {
        cy.get('.chi-datepicker__day')
          .filter(`[data-date="${currentDate}"]`)
          .should('exist');
      })
    });

    it('should display today\'s date in datepicker after clearing the input', () => {
      cy.get(datePickerInput).type('01/25/2019').blur()

      cy.get(datePickerInput).clear().blur()

      // Check the current date is visible
      cy.get(datePickerPopover).within(() => {
        cy.get('.chi-datepicker__day')
          .filter(`[data-date="${currentDate}"]`)
          .should('exist');
      })
    });
  });

  describe('Date picker 4', () => {
    it('should not open the popover if the input is disabled', () => {
      cy.get('#datepicker-4 input').should('be.disabled').click({ force: true });
      cy.get('#datepicker-4 .chi-popover').should('not.exist');
    });
  })
})
