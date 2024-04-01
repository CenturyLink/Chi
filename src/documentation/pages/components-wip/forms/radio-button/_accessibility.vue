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
        td Toggles the selection state of the radio button between checked and unchecked
  p.-text
    | For comprehensive details on keyboard support for input fields, refer to our <a :href="`${CHI_URL}/foundations/accessibility/using-keyboard/`" target="_blank">Keyboard Control Guide.</a>
  p.-text
    | Visit <a href="https://webaim.org/techniques/keyboard/" target="_blank">WebAIM</a> for keyboard techniques.

  .chi-grid
    .chi-col.-w-sm--12.-w-md--6.-w-lg--6.-mb--3
      .chi-card.-widget
        .chi-card__header 
          .chi-card__title.-text--normal Guidance for developers
        .chi-card__content 
          .chi-card__caption
            ul.-text
              li Use clear and descriptive labels for radio buttons to help users understand their purpose.
              li Ensure each radio button has an associated <code>label</code> element using the <code>for</code> attribute to match the <code>id</code> attribute of the radio button.
              li Assign unique <code>id</code> attributes to each radio button to maintain accessibility and prevent conflicts.
              li The <code>fieldset</code> surrounds the entire grouping of radio buttons. The <code>legend</code> provides a description for the grouping.
              li Use the <code>aria-describedby</code> attribute to associate error messages with radio buttons for accessibility.
              li Ensure that error messages are tagged with unique id attributes and referenced correctly with <code>aria-describedby</code> on corresponding radio buttons. 
    
    .chi-col.-w-sm--12.-w-md--6.-w-lg--6.-mb--3
      .chi-card.-widget
        .chi-card__header 
          .chi-card__title.-text--normal Guidance for designers
        .chi-card__content 
          .chi-card__caption 
            ul.-text
              li Ensure focus indicators are clearly visible to aid navigation for keyboard users.
              li Keep input labels visible, even when fields are focused.
              li Use contrasting colors for text and backgrounds to enhance readability.
              li Design clear error states and feedback for accessibility.
              li Use spacing, typography, and visual cues effectively.
              li Maintain consistency in the design of radio buttons to provide a cohesive user experience.

  p.-text 
    | Find live examples in the <a href="https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-radio-buttons" target="_blank">A11y style guide</a>.  

  h3 Roles and attributes
  p.-text 
    | WAI-ARIA provides a grouping role that functions similarly to fieldset and legend.
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
        td Identifies the <code>div</code> element as a group container for the radio buttons.

  h3 Resources
  ul.-text
    li
      a(href="https://www.w3.org/WAI/ARIA/apg/patterns/radio/" target="_blank") W3 Radio Button Group Example: 
      | Information about the radio button accessible behavior.
    li
      a(href="https://a11y-style-guide.com/style-guide/" target="_blank") A11y Style Guide:  
      | Gives core recommendations for the accessible radio buttons.
    li  
      a(href="https://www.w3.org/WAI/tutorials/forms/" target="_blank") W3C Forms Tutorial:  
      | Provides guidance on creating accessible forms.

  h3 Other recommendations
  p.-text
    | Explore additional accessibility tips in the general <a :href="`${CHI_URL}/foundations/accessibility/overview`" target="_blank">Accessibility Guide.</a>
  
  h3 WCAG 2.2 Guidelines
  ul.-text
    li
      a(href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#non-text-content" target="_blank") Non-text Content: 
      | All non-text content that is presented to the user has a text alternative that serves the equivalent purpose. (Level A)
    li
      a(href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-content-structure-separation-programmatic" target="_blank") Info and Relationships: 
      | Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)
    li 
      a(href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-navigation-mechanisms-descriptive" target="_blank") Headings and Labels: 
      | Headings and labels describe topic or purpose. (Level AA)
    li
      a(href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-minimize-error-cues" target="_blank") Labels or Instructions: 
      | Labels or instructions are provided when content requires user input. (Level A)
    li
      a(href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-ensure-compat-rsv" target="_blank") Name, Role, Value: 
      | For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A)   
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { TEMP_DEVELOPMENT_FALLBACK_URL as CHI_URL } from '~/constants/constants';

@NuxtComponent({})
export default class Accessibility extends Vue { 
	CHI_URL = CHI_URL
}
</script>