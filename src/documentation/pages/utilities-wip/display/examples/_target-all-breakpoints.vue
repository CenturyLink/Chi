<template lang="pug">
fragment
  <AnchorTitle title="Target all breakpoints" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#target-all-breakpoints`" />
  p.-text Display utility classes with no breakpoint defined apply to all screen

  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Display Class
            th
              div Value
        tbody
          each type in ['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']
            tr
              td(width='40%')
                code=`-d--${type}`
              td
                code=`display: ${type};`
</template>
