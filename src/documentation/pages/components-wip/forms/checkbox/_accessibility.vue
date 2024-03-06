<template lang="pug">
  h2 Accessibility
  h3 Keyboard Navigation
  table.chi-table
    thead
      tr  
        th Key
        th Function
    tbody
      tr
        td <code>Tab</code>
        td Moves focus to the next focusable element          
      tr
        td <code>Shift + Tab</code>
        td Moves focus to the previous focusable element       
      tr
        td <code>Space</code>
        td Toggles checkbox between checked and unchecked states
  h3 Roles and attributes
  p.-text
    | The list below describes roles and attributes that component already has  
  table.chi-table
    thead
      tr
        th.-pr--8 Role                   
        th.-pr--8 Attribute  
        th Element
        th Usage
    tbody
      tr
        td <code>checkbox</code>
        td 
        td <code>div</code>
        td Identifies the <code>div</code> element as a checkbox. The child text content of this div provides the accessible name of the checkbox          
      tr
        td 
        td <code>tabIndex="0"</code>
        td <code>div</code>
        td Includes the checkbox in the page <code>Tab</code> sequence       
      tr
        td 
        td <code>aria-invalid</code>
        td <code>input</code>
        td Turns to true if <code>state=invalid</code> is provided

  h3 Considerations for developers
  ul.-text
    li Some assistive technology reads the legend text for each fieldset, so it should be brief and descriptive. This helps someone using assistive technology to understand the question they are answering with the group of radio buttons.
    li The <code>fieldset</code> surrounds the entire grouping of checkboxes or radio buttons. The <code>legend</code> provides a description for the grouping.

  p.-text 
    | Find live examples in the <a href="https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-checkboxes" target="_blank">A11y style guide</a>.  

  h3 Roles and attributes
  p.-text 
    | The list below will help you to keep in mind the necessary roles and attributes to make our components fully accessible in your interfaces.
  table.chi-table
    thead
      tr
        th Role
        th Element
        th Usage
    tbody
      tr
        td <code>group</code>
        td <code>div</code>
        td Identifies the <code>div</code> element as a group container for the checkboxes.

  h3 Resources
  ul.-text
    li
      a(href="https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/") W3 checkbox example: 
      | Detailed information about the accordion accessible behavior.
    li
      a(href="https://a11y-style-guide.com/ ") A11y Style Guide:  
      | Gives core recommendations for the accessible checkboxes. 
    li  
      a(href="https://www.w3.org/WAI/tutorials/forms/") W3C Forms Tutorial:  
      | Provides guidance on creating accessible forms.
    li  
      a(href="https://www.digitala11y.com/") DigitalA11y Project: 
      | Find examples of accessible checkboxes

  h3 Other recommendations
  p.-text
    | Explore additional accessibility tips in the general <a :href="`${CHI_URL}/foundations/accessibility/overview`">Accessibility Guide.</a>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { TEMP_DEVELOPMENT_FALLBACK_URL as CHI_URL } from '~/constants/constants';

@NuxtComponent({})
export default class Accessibility extends Vue { 
  CHI_URL = CHI_URL
}
</script>