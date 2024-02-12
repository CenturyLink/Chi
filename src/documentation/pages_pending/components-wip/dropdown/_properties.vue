<template lang="pug">
  div
    h2 JavaScript

    h3.mt--2 Properties

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
                  | Hides the dropdown
              td
                div
                  | Type: void
            tr
              td
                div
                  code= 'show() => void'
              td
                div
                  | Shows the dropdown
              td
                div
                  | Type: void
            tr
              td
                div
                  code= 'toggle() => void'
              td
                div
                  | Toggles active state (show/hide)
              td
                div
                  | Type: void

    h3 Events
    section.chi-table.-bordered.-my--3
      table(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Event
            th
              div Description
        tbody
          tr
            td
              div
                code chiDropdownShow
            td
              div Dropdown show has been triggered.
          tr
            td
              div
                code chiDropdownHide
            td
              div Dropdown hide has been triggered.

    h4 Preventing memory leaks
    p.-text
      | Dropdown components have a dispose function to free all resources attached to the element, such as event listeners
      | and object data. You must call this method when you want to remove the component.
    Copy(lang="javascript" :code="codeMemory1")

    p.-text
      | It is safe to call the <code>dropdown</code> method more than once, as it will return any previously created dropdown component
      | associated with the trigger.
    Copy(lang="javascript" :code="codeMemory2")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      codeMemory1: `var elem = document.getElementById('dropdown-3');
var dropdown = chi.dropdown(elem);
// do stuff
dropdown.dispose();`,
      codeMemory2: `var elem = document.getElementById('dropdown-4');
var dropdown = chi.dropdown(elem);
var elem2 = document.getElementById('dropdown-4');
var dropdown2 = chi.dropdown(elem2);
dropdown === dropdown2; // returns true`,
    };
  },
})
export default class Properties extends Vue { }
</script>
