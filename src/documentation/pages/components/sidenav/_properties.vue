<template lang="pug">
  div
    h2 JavaScript
    p.-text This component accepts options to configure its behavior.

    section.chi-table.chi-table__options.-bordered.-my--3
      div
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Option
              th
                div Default
              th
                div Description
          tbody
            tr
              td
                div
                  code= 'autoClose'
              td
                div
                  code= 'false'
              td
                div
                  | To automatically close the drawer when moving the cursor out of sidenav.
            tr
              td
                div
                  code= 'openOnHover'
              td
                div
                  code= 'false'
              td
                div
                  | To open a sidenav drawer when hovering on first level menu item.

    h3 Preventing memory leaks
    p.-text
      | Sidenav component has a dispose function to free all the resources attached to the element, such as event listeners
      | and object data. You should call this method when you want to remove the component.
    <pre class="language-javascript">
      <code v-highlight="$data.codeMemory1" class="javascript"></code>
    </pre>

    p.-text
      | It is safe to call the <code>sidenav</code> method more than once, as it will return any previously created sidenav component
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
      codeMemory1: `var elem = document.getElementById('sidenav-1');
var sidenav = chi.sidenav(elem);
// do stuff
sidenav.dispose();`,
      codeMemory2: `var elem = document.getElementById('sidenav-2');
var sidenav = chi.sidenav(elem);
var elem2 = document.getElementById('sidenav-2');
var sidenav2 = chi.sidenav(elem2);
sidenav === sidenav2; // returns true

sidenav.dispose(); // Only have to do it once.`
    };
  }
})
export default class Properties extends Vue {}
</script>
