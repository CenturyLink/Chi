<template lang="pug">
fragment
  <AnchorTitle title="Special display classes" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#special-display-classes`" />
  p.-text To target screen readers only or a specific media type (@media screen or @media print), use the below classes.
  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table(cellpadding='0', cellspacing='0')
        thead
          tr
            th Display Class
            th Value
        tbody
          tr
            td(width='40%')
              code= '-sr--only'
            td Screen reader only
          tr
            td(width='40%')
              code= '-d-screen--only'
            td
              code= 'display: block;'
              | on @media screen,
              code= 'display: none;'
              | on @media print.
          tr
            td(width='40%')
              code= '-d-print--only'
            td
              code= 'display: none;'
              | on @media screen,
              code= 'display: block;'
              | on @media print.
</template>
