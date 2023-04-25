<template lang="pug">
fragment
  <AnchorTitle title="Target specific breakpoints" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#target-specific-breakpoints`" />
  p.-text
    | To target a specific breakpoint, add the breakpoint abbreviation to the class. As a mobile first framework, it will
    | apply to that specific breakpoint and up.

  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Display Class
            th
              div Value
        tbody
          each type in ['sm', 'md', 'lg', 'xl']
            tr
              td(width='40%')
                code=`-d--${type}`
              td
                code=`display: ${type};`
</template>
