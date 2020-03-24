document.addEventListener('DOMContentLoaded',
  function() {
    chi.expansionPanel(document.getElementById('example2'));
    chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example3"]'));
    chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example4"]'), {mode: 'accordion'});
    chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example5"]'), {mode: 'free'});

    chi.expansionPanel(
      document.querySelectorAll('[data-chi-epanel-group="example6"]'),
      {
        mode: 'custom',
        changeHandler: function (newState, oldState, expansionPanel, panelGroup) {
          if (newState === chi.EXPANSION_PANEL_STATES.DONE) {
            panelGroup.expansion_panels.forEach(function (exPa) {
              if (exPa !== expansionPanel) {
                exPa.setState(chi.EXPANSION_PANEL_STATES.PENDING.NAME);
              }
            });
          }
        }
      }
    );

    chi.tab(document.querySelectorAll('.docs-body__content .chi-tabs'));

  }
);
