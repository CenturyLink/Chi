<template lang="pug">
  div
    h2 Web Component
    <PropertiesGenerator tag="chi-expansion-panel" />

    h2 Chi Vue
    h3 Props
    section.chi-table.chi-table__options.-bordered.-my--3
      div(style='overflow-x:auto;')
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Property
              th
                div Description
              th
                div Type
              th
                div Default
          tbody
            tr
              td
                div
                  code state
              td
                div to set expansion panel state. Possible values are: {'done', 'active', 'pending' (default value), and 'disabled'}
              td
                div
                  code string
              td
                div
                  em 'pending'
            tr
              td
                div
                  code step
              td
                div to set a step number next to the title of the panel
              td
                div
                  code string
              td
                div
                  em undefined
            tr
              td
                div
                  code bordered
              td
                div to set the panel style to bordered
              td
                div
                  code boolean
              td
                div
                  em undefined
            tr
              td
                div
                  code stateIcon
              td
                div to render a state icon within the panel
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code title
              td
                div to define expansion panel title
              td
                div
                  code string
              td
                div
                  code undefined
    h2 JavaScript
    h3 Actions
    p.-text
      | You can bind actions to activators inside the expansion panel with the <code>data-chi-epanel-action</code> attribute.
    table.chi-table.chi-table__options.-bordered
      thead
        tr
          th Action
          th Description
      tbody
        tr
          td
            code(style='word-break: initial') pending
          td
            | Sets the panel to the pending state. All the contents under the <code>-active--only</code> and the
            | <code>-done--only</code> will not be visible.
        tr
          td
            code(style='word-break: initial') active
          td Sets the panel to the active state. All the contents under the <code>-active--only</code> will be visible.
        tr
          td
            code(style='word-break: initial') toggle
          td
            | In the case the panel is previously set to active, this action sets it to pending. It sets to active state
            | otherwise.
        tr
          td
            code(style='word-break: initial') done
          td Sets the panel to the done state. All the contents under the <code>-done--only</code> will be visible.
        tr
          td
            code(style='word-break: initial') disabled
          td
            | Sets the panel to the disabled state. All the contents under the <code>-active--only</code> and the
            | <code>-done--only</code> will not be visible, and the title will render in a soft grey color.
        tr
          td
            code(style='word-break: initial') inactive
          td Is a synonym for <code>pending</code>.
        tr
          td
            code(style='word-break: initial') next
          td Sets the next panel in <code>active</code> status.
        tr
          td
            code(style='word-break: initial') previous
          td Sets the previous panel in <code>active</code> status.
    p.-text
      | You can freely add, remove or change the <code>data-chi-epanel-action</code> attribute on the fly, as is the main
      | element with the <code>chi-epanel</code> class, the one which listens for the events.
    h3 Preventing memory leaks
    p.-text
      | Expansion panel components have a dispose function to free all resources attached to the element, such as event
      | listeners and object data. You should call this method when you want to remove the component.
    pre.language-javascript
      code.javascript(v-highlight="$data.code1")
    p.-text
      | It is safe to call the <code>expansionPanel</code> method more than once, as it will return any previously created
      | expansion panel component associated to the element.
    pre.language-javascript
      code.javascript(v-highlight="$data.code2")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      code1: `var elemArray = document.querySelectorAll('[data-chi-epanel-group="groupName"]');
var expansionPanelsArray = chi.expansionPanel(elemArray);
// do stuff
expansionPanelsArray.forEach(function (expansionPanel) {
  expansionPanel.dispose();
});`,
      code2: `var elem = document.getElementById('expansion-panel-1');
var expansionPanelComponent = chi.expansionPanel(elem);
var elem2 = document.getElementById('expansion-panel-1');
var expansionPanelComponent2 = chi.expansionPanel(elem2);
expansionPanelComponent === expansionPanelComponent2; // returns true

expansionPanelComponent.dispose(); // Only have to do it once.`
    };
  }
})
export default class Properties extends Vue {}
</script>
