<template lang="pug">
  div
    h2 Web Component
    h3 Properties
    section.chi-table.chi-table__options.-bordered.-my--3
      div(style='overflow-x:auto;')
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Property
              th
                div Attribute
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
                  code disabled
              td
                div
                  code disabled
              td
                div To disable Search input
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code name
              td
                div
                  code name
              td
                div To define name of Search input
              td
                div
                  code string
              td
                div
                  em undefined
            tr
              td
                div
                  code placeholder
              td
                div
                  code placeholder
              td
                div To define placeholder of Search input
              td
                div
                  code string
              td
                div
                  em undefined
            tr
              td
                div
                  code portal
              td
                div
                  code portal
              td
                div To enable portal styling
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code preventValueMutation
              td
                div
                  code prevent-value-mutation
              td
                div To disable Value attribute mutation
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code size
              td
                div
                  code size
              td
                div To define size of Search input
              td
                div
                  code "lg" | "md" | "sm" | "xl" | "xs"
              td
                div
                  code 'md'
            tr
              td
                div
                  code value
              td
                div
                  code value
              td
                div To define value of Search input
              td
                div
                  code string
              td
                div
                  code ''

        h3 Events
        section.chi-table.chi-table__options.-bordered.-my--3
          div(style='overflow-x:auto;')
            table.-text(cellpadding='0' cellspacing='0')
              thead
                tr
                  th
                    div Event
                  th
                    div Description
                  th
                    div Type
              tbody
                tr
                  td
                    div
                      code chiBlur
                  td
                    div Triggered when the element has lost focus.
                  td
                    div
                      code CustomEvent&lt;any&gt;
                tr
                  td
                    div
                      code chiChange
                  td
                    div Triggered when an alteration to the element&apos;s value is committed by the user
                  td
                    div
                      code CustomEvent&lt;string&gt;
                tr
                  td
                    div
                      code chiClean
                  td
                    div Triggered when the user clicked the X button.
                  td
                    div
                      code CustomEvent&lt;any&gt;
                tr
                  td
                    div
                      code chiFocus
                  td
                    div Triggered when the user sets focus on the element.
                  td
                    div
                      code CustomEvent&lt;any&gt;
                tr
                  td
                    div
                      code chiInput
                  td
                    div
                      | Triggered when the user changed the element&apos;s value but did not commit the change yet
                  td
                    div
                      code CustomEvent&lt;string&gt;
                tr
                  td
                    div
                      code chiSearch
                  td
                    div Triggered when the user clicked the Search button.
                  td
                    div
                      code CustomEvent&lt;any&gt;:stencilDoc(name='chi-search-input')

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
                  code disabled
              td
                div To disable Search input
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code name
              td
                div To define name of Search input
              td
                div
                  code string
              td
                div
                  em undefined
            tr
              td
                div
                  code placeholder
              td
                div To define placeholder of Search input
              td
                div
                  code string
              td
                div
                  em undefined
            tr
              td
                div
                  code portal
              td
                div To enable portal styling
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code size
              td
                div To define size of Search input
              td
                div
                  code &quot;lg&quot; | &quot;md&quot; | &quot;sm&quot; | &quot;xl&quot;
              td
                div
                  code &apos;md&apos;
            tr
              td
                div
                  code value
              td
                div To define value of Search input
              td
                div
                  code string
              td
                div
                  code &apos;&apos;

    h3 Events
    section.chi-table.chi-table__options.-bordered.-my--3
      div(style='overflow-x:auto;')
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Event
              th
                div Description
              th
                div Type
          tbody
            tr
              td
                div
                  code chiBlur
              td
                div Triggered when the element has lost focus.
              td
                div
                  code CustomEvent&lt;any&gt;
            tr
              td
                div
                  code chiChange
              td
                div Triggered when an alteration to the element&apos;s value is committed by the user
              td
                div
                  code CustomEvent&lt;string&gt;
            tr
              td
                div
                  code chiClean
              td
                div Triggered when the user clicked the X button.
              td
                div
                  code CustomEvent&lt;any&gt;
            tr
              td
                div
                  code chiFocus
              td
                div Triggered when the user sets focus on the element.
              td
                div
                  code CustomEvent&lt;any&gt;
            tr
              td
                div
                  code chiInput
              td
                div
                  | Triggered when the user changed the element&apos;s value but did not commit the change yet
              td
                div
                  code CustomEvent&lt;string&gt;
            tr
              td
                div
                  code chiSearch
              td
                div Triggered when the user clicked the Search button.
              td
                div
                  code CustomEvent&lt;any&gt;

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Properties extends Vue {}
</script>
