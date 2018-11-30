
document.addEventListener('DOMContentLoaded',
  function() {

    const ep = chi.expansionPanel(document.getElementById('example1'));

    Array.prototype.forEach.call(
      document.querySelectorAll('input[name="example1"]'),
      function(input) {
        input.addEventListener('change', function() {
          if (this.checked) {
            ep.setState(this.value);
          }
        }, false);
      }
    );

    chi.expansionPanel(document.getElementById('example2'));
    chi.expansionPanel(document.querySelectorAll('[data-chi-ep-group="example3"]'));
    chi.expansionPanel(document.querySelectorAll('[data-chi-ep-group="example4"]'), {mode: 'accordion'});
    chi.expansionPanel(document.querySelectorAll('[data-chi-ep-group="example5"]'), {mode: 'free'});
    chi.expansionPanel(
      document.querySelectorAll('[data-chi-ep-group="example6"]'),
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
