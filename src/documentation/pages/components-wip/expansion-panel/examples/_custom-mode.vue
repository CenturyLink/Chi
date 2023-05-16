<template lang="pug">
  <ComponentExample title="Custom mode" id="custom-mode" :tabs="exampleTabs" additionalClasses="-p--3 -p-lg--6 -bg--grey-10">
    p.-text(slot="example-description")
      | Write your own custom mode by adding a handler for state changes of the expansion panels in the configuration, and
      | writing your own functions for the <code>active</code>, <code>done</code>, <code>pending</code>,
      | <code>disabled</code>, <code>toggle</code>, <code>next</code> and <code>previous</code> actions. In the
      | example, the component behaves similar to the accordion but alternates between <code>done</code> and
      | <code>pending</code> states instead of <code>active</code> and <code>pending</code> states. The overridden action
      | functions are for documentation purposes only because they clone the functionality of the default ones.
    .-mw--720.-mx--auto(slot="example")
      .chi-epanel.-done(data-chi-epanel-group='example__custom-mode')
        .chi-epanel__header
          .chi-epanel__title(data-chi-epanel-action='done') Panel 1
          .chi-epanel__content
            .chi-epanel__collapse
              .-done--only
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
                | interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
                | Aenean eu sapien eget ante placerat pretium a sit amet ante.
      .chi-epanel(data-chi-epanel-group='example__custom-mode')
        .chi-epanel__header
          .chi-epanel__title(data-chi-epanel-action='done') Panel 2
          .chi-epanel__content
            .chi-epanel__collapse
              .-done--only
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
                | interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
                | Aenean eu sapien eget ante placerat pretium a sit amet ante.
      .chi-epanel(data-chi-epanel-group='example__custom-mode')
        .chi-epanel__header
          .chi-epanel__title(data-chi-epanel-action='done') Panel 3
          .chi-epanel__content
            .chi-epanel__collapse
              .-done--only
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
                | interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
                | Aenean eu sapien eget ante placerat pretium a sit amet ante.
      .chi-epanel(data-chi-epanel-group='example__custom-mode')
        .chi-epanel__header
          .chi-epanel__title(data-chi-epanel-action='done') Panel 4
          .chi-epanel__content
            .chi-epanel__collapse
              .-done--only
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
                | interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
                | Aenean eu sapien eget ante placerat pretium a sit amet ante.
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: false,
          id: 'webcomponent',
          label: 'Web Component',
          disabled: true
        },
        {
          id: 'vue',
          label: 'Vue',
          disabled: true
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        }
      ],
      codeSnippets: {
        htmlblueprint: `<div class="chi-epanel -done" data-chi-epanel-group="example__custom-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="done">Panel 1</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
          interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
          Aenean eu sapien eget ante placerat pretium a sit amet ante.
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__custom-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="done">Panel 2</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
          interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
          Aenean eu sapien eget ante placerat pretium a sit amet ante.
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__custom-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="done">Panel 3</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
          interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
          Aenean eu sapien eget ante placerat pretium a sit amet ante.
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__custom-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="done">Panel 4</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
          interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
          Aenean eu sapien eget ante placerat pretium a sit amet ante.
        </div>
      </div>
    </div>
  </div>
</div>
<!-- JavaScript -->
<script>
chi.expansionPanel(
  document.querySelectorAll('[data-chi-epanel-group="example__custom-mode"]'),
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
    },
    customActions: {
      active: (expansionPanel, epGroup) =>
        expansionPanel.setState(chi.EXPANSION_PANEL_STATES.ACTIVE.NAME),
      done: (expansionPanel, epGroup) =>
        expansionPanel.setState(chi.EXPANSION_PANEL_STATES.DONE.NAME),
      pending: (expansionPanel, epGroup) =>
        expansionPanel.setState(chi.EXPANSION_PANEL_STATES.PENDING.NAME),
      toggle: (expansionPanel, epGroup) => {
        if (expansionPanel._state === chi.EXPANSION_PANEL_STATES.ACTIVE) {
          expansionPanel.setState(chi.EXPANSION_PANEL_STATES.PENDING.NAME);
        } else {
          expansionPanel.setState(chi.EXPANSION_PANEL_STATES.ACTIVE.NAME);
        }
      },
      next: (expansionPanel, epGroup) => {
        epGroup.reset(expansionPanel);
        epGroup.next().setState(chi.EXPANSION_PANEL_STATES.ACTIVE.NAME);
      },
      previous: (expansionPanel, epGroup) => {
        epGroup.reset(expansionPanel);
        epGroup.previous().setState(chi.EXPANSION_PANEL_STATES.ACTIVE.NAME);
      },
      disabled: (expansionPanel, epGroup) =>
        expansionPanel.setState(chi.EXPANSION_PANEL_STATES.DISABLED.NAME)
    }
  }
);
<\/script>`
      }
    };
  }
})

export default class Base extends Vue {
  mounted() {
    const panel = document.querySelectorAll('[data-chi-epanel-group="example__custom-mode"]');
    chi.expansionPanel(panel);
  }
}

</script>
