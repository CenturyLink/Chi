<template lang="pug">
  div
    h2 JavaScript

    h3.mt--2 Methods
    section.chi-table.chi-table__methods.-bordered.-my--3
      div
        table.-text(cellpadding='0', cellspacing='0')
          thead
            tr
              th
                div Method
              th
                div Description
              th
                div Returns
          tbody
            tr
              td
                div
                  code= 'hide() => void'
              td
                div
                  | Hides the accordion or individual accordion item (if provided)
              td
                div
                  | Type: void
            tr
              td
                div
                  code= 'show() => void'
              td
                div
                  | Shows the accordion or individual accordion item (if provided)
              td
                div
                  | Type: void
            tr
              td
                div
                  code= 'toggle() => void'
              td
                div
                  | Toggles active state (show/hide) of the accordion or accordion item (if provided)
              td
                div
                  | Type: void
            tr
              td
                div
                  code= 'expandAll() => void'
              td
                div
                  | Expands all the accordion items
              td
                div
                  | Type: void
            tr
              td
                div
                  code= 'collapseAll() => void'
              td
                div
                  | Collapses all the accordion items
              td
                div
                  | Type: void

    h3 Preventing memory leaks
    p.-text
      | Accordion component has a dispose function to free all the resources attached to the element, such as event listeners
      | and object data. You should call this method when you want to remove the component.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory1" class="javascript"></code>
    </pre>

    p.-text
      | It is safe to call the <code>accordion</code> method more than once, as it will return any previously created accordion component
      | associated with the element.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory2" class="javascript"></code>
    </pre>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeMemory1: `
        var elem = document.getElementById('accordion-1');
        var accordion = chi.accordion(elem);
        // do stuff
        accordion.dispose();
      `,
      codeMemory2: `
        var elem = document.getElementById('accordion-2');
        var accordion = chi.accordion(elem);
        var elem2 = document.getElementById('accordion-2');
        var accordion2 = chi.accordion(elem2);
        accordion === accordion2; // returns true

        accordion.dispose(); // Only have to do it once.
      `,
    }
  }
})
export default class Properties extends Vue {
}
</script>
