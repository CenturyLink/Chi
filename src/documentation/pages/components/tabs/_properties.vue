<template lang="pug">
  div
    h2 JavaScript
    h3 Options
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
                  code= 'overflowMenu'
              td
                div
                  code= 'true'
              td
                div
                  | Only works for horizontal navigation components. It encloses overflowed tabs into a dropdown
                  | located at the end of the navigation component.
            tr
              td
                div
                  code= 'overflowMenuLabel'
              td
                div
                  code= 'See More...'
              td
                div
                  | Text for the overflow menu dropdown.
            tr
              td
                div
                  code= 'waitForAnimations'
              td
                div
                  code= 'false'
              td
                div
                  | Makes the browser wait for the sliding border to move to the clicked link.
                  | It only works with common links.

    h3 Preventing memory leaks
    h4 chi.tab()
    p.-text
      | Tab components have a dispose function to free all resources attached to the element, such as event listeners
      | and object data. You should call this method when you want to remove the component.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory1" class="javascript"></code>
    </pre>

    p.-text
      span.chi-badge.-dark.-sm.-mr--1
        span Tip
      | It is safe to call the tab method more than once, as it will return any previously created tabs component
      | associated with the trigger.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory2" class="javascript"></code>
    </pre>

    h4 chi.navigation()
    p.-text
      | Navigation components have a dispose function to free all resources attached to the element, such as event
      | listeners and object data. You should call this method when you want to remove the component. There is no need to
      | call to tab and dropdown inner components dispose function as the navigation one will free resources of all
      | internal components automatically.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory3" class="javascript"></code>
    </pre>

    p.-text
      span.chi-badge.-dark.-sm.-mr--1
        span Tip
      | It is safe to call the <code>navigation</code> factory function more than once, as it will return any previously
      | created navigation component associated to the element.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory4" class="javascript"></code>
    </pre>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeMemory1: `var elem = document.getElementById('example-tabs');
var tabComponent = chi.tab(elem);
// do stuff
tabComponent.dispose();`,
      codeMemory2: `var elem = document.getElementById('example-tabs');
var tabComponent = chi.tab(elem);
var elem2 = document.getElementById('example-tabs');
var tabComponent2 = chi.tab(elem2);
tabComponent === tabComponent2; // returns true

tabComponent.dispose(); // Only have to do it once.`,
      codeMemory3: `var navigationElem = document.getElementById('#navigationElementId');
var navigationComponent = chi.navigation(navigationElem);
// do stuff
navigationComponent.dispose();`,
      codeMemory4: `var elem = document.getElementById('navigation-1');
var navigationComponent = chi.navigation(elem);
var elem2 = document.getElementById('navigation-1');
var navigationComponent2 = chi.navigation(elem2);
navigationComponent === navigationComponent2; // returns true

navigationComponent.dispose(); // Only have to do it once.`
    };
  }
})
export default class Properties extends Vue {}
</script>
