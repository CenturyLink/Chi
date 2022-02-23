<template lang="pug">
  div
    h2 Web Component
    <PropertiesGenerator tag="chi-number-input" />

    .chi-divider.-my--5

    h2 JavaScript
    p.-text This component accepts options to configure its behavior.

    section.chi-table.chi-table__options.-bordered.-my--3
      div
        table.-text(cellpadding='0', cellspacing='0')
          thead
            tr
              th(style='width: 10em')
                div Option
              th(style='width: 10em')
                div Default
              th
                div Description
          tbody
            tr
              td
                div
                  code= 'autofix'
              td
                div
                  code= 'false'
              td
                div
                  | Fixes automatically values that are out of range of defined by <code>max</code> and <code>min</code>
                  | attributes, and any value that doesn't fit the granularity defined by <code>step</code> and the
                  | <code>initial</code> value

    h3 Preventing memory leaks
    p.-text
      | Input number components have a dispose function to free all resources attached to the element, such as event
      | listeners and object data. You should call this method when you want to remove the component.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory1" class="javascript"></code>
    </pre>

    p.-text
      span.chi-badge.-dark.-sm.-mr--1
        span Tip
      | It is safe to call the <code>numberInput</code> method more than once, as it will return any previously created
      | number input component associated to the input.
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
var elem = document.getElementById('input-number-1');
var inputNumberComponent = chi.numberInput(elem);
// do stuff
inputNumberComponent.dispose();
      `,
      codeMemory2: `
var elem = document.getElementById('input-number-1');
var inputNumberComponent = chi.numberInput(elem);
var elem2 = document.getElementById('input-number-1');
var inputNumberComponent2 = chi.numberInput(elem2);
inputNumberComponent === inputNumberComponent2; // returns true

inputNumberComponent.dispose(); // Only have to do it once.
      `
    };
  }
})
export default class Properties extends Vue {}
</script>
