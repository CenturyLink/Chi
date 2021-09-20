<template lang="pug">
//- TODO: uncomment once stencilDoc is implemented
//- :stencilDoc(name='chi-alert')

//- TODO: remove below code once stencilDoc is implemented
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
                code center
            td
              div
                code center
            td
              div to center the alert content.
            td
              div
                code boolean
            td
              div
                code false
          tr
            td
              div
                code closable
            td
              div
                code closable
            td
              div to make the alert dismissible.
            td
              div
                code boolean
            td
              div
                code false
          tr
            td
              div
                code color
            td
              div
                code color
            td
              div to set alert state.
            td
              div
                code "danger" | "info" | "muted" | "success" | "warning"
            td
              div 
                em undefined
          tr
            td
              div
                code icon
            td
              div
                code icon
            td
              div to avoid the necessity of adding &lt;chi-icon&gt; to alert markup.
            td
              div
                code string
            td
              div
                em undefined
          tr
            td
              div
                code mutable
            td
              div
                code mutable
            td
              div to hide the alert when dismissed.
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
              div to set alert size { sm, md, lg }.
            td
              div
                code string
            td
              div
                code 'md'
          tr
            td
              div
                code title
            td
              div
                code title
            td
              div to define alert title.
            td
              div
                code string
            td
              div
                em undefined
          tr
            td
              div
                code type
            td
              div
                code type
            td
              div to set alert type { bubble, banner, toast }.
            td
              div
                code string
            td
              div
                code 'bubble'

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
                code dismissAlert
            td
              div
                | custom event when trying to dismiss an alert.
            td
              div
                code CustomEvent&lt;void&gt;
</template>
