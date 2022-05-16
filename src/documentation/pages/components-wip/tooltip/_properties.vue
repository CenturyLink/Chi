<template lang="pug">
  div
    h2 Chi Vue
    h3 Props
    section.chi-table.-bordered.-my--3
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
                code message
            td
              div To set the tooltip message to display
            td
              div
                code string
            td
              div
                em undefined
          tr
            td
              div
                code position
            td
              div To set position of the tooltip
            td
              div
                code 'top' | 'right' | 'bottom' | 'left'
            td
              div
                em 'top'
          tr
            td
              div
                code color
            td
              div To set the background color of the tooltip
            td
              div
                code 'base' | 'light'
            td
              div
                em 'base'

    h3 Events
    section.chi-table.-bordered.-my--3
      table(cellpadding='0' cellspacing='0')
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
                code chiTooltipShow
            td
              div Tooltip show method has been executed.
          tr
            td
              div
                code chiTooltipHide
            td
              div Tooltip hide method has been executed.
          tr 
            td
              div 
                code chiTooltipShown
            td
              div Tooltip has been shown to the user and is fully visible.
          tr 
            td
              div 
                code chiTooltipHidden          
            td
              div Tooltip has been hidden to the user.

    h2 JavaScript
    h3 Events
    section.chi-table.-bordered.-my--3
      table(cellpadding='0' cellspacing='0')
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
                code chiTooltipShow
            td
              div Tooltip show method has been executed.
          tr
            td
              div
                code chiTooltipHide
            td
              div Tooltip hide method has been executed.

    h3 Preventing memory leaks
    p.-text
      | Tooltip components have a dispose function to free all resources attached to the element, 
      | such as event listeners and object data. You must call this method when you want to remove the component.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory1" class="javascript"></code>
    </pre>

    p.-text
      span.chi-badge.-dark.-sm.-mr--1
        span Tip
      | It is safe to call the <code>tooltip</code> method more than once, as it will return any previously created tooltip component
      | associated to the element.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory2" class="javascript"></code>
    </pre>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeMemory1: `var elem = document.getElementById('tooltip');
var tooltip = chi.tooltip(elem);
// do stuff
tooltip.dispose();`,
      codeMemory2: `var elem = document.getElementById('tooltip-1');
var tooltip = chi.tooltip(elem);
var elem2 = document.getElementById('tooltip-1');
var tooltip2 = chi.tooltip(elem2);
tooltip === tooltip2; // returns true

tooltip.dispose(); // Only have to do it once.`,
    };
  }
})
export default class Properties extends Vue {}
</script>
