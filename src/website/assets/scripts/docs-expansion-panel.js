
document.addEventListener('DOMContentLoaded',
  function() {

    const epDom = document.getElementById('example1');
    const ePanel = chi.expansionPanel(epDom);

    const checkBoxes = document.querySelectorAll('input[name="example1"]');

    Array.prototype.forEach.call(
      checkBoxes,
      function(input) {
        input.addEventListener('change', function() {
          if (this.checked) {
            ePanel.setState(this.value);
          }
        }, false);
      }
    );

    epDom.addEventListener('chi.epanel.change', function() {
      const state = ePanel.getStateName();
      Array.prototype.forEach.call(
        checkBoxes,
        function(input) {
          if (input.value === state) {
            input.checked = true;
          }
        }
      );
    });

    chi.expansionPanel(document.getElementById('example2'));
    chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example3"]'));
    chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example4"]'), {mode: 'accordion'});
    chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example5"]'), {mode: 'free'});
    chi.expansionPanel(
      document.querySelectorAll('[data-chi-epanel-group="example6"]'),
      {
        mode: 'custom',
        changeHandler: function (newState, oldState, expansionPanel, panelGroup) {
          if (newState === chi.EXPANSION_PANEL_STATES.ACTIVE) {
            panelGroup.expansion_panels.forEach(function (exPa) {
              if (exPa !== expansionPanel) {
                exPa.setState(chi.EXPANSION_PANEL_STATES.DONE.NAME);
              }
            });
          }
        }
      }
    );

    chi.tab(document.querySelectorAll('.docs-body__content .a-tabs'));

  },
  false
);
