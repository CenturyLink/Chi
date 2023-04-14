<template lang="pug">
div
  TitleBar(title="Display" description="Use shorthand display utility classes to quickly change an element's display value.")
  section.chi-grid__container.-pt--3
    AnchorTitle(title="Notation", tag="h2", :anchor="`?theme=${$store.state.themes.theme}#notation`")
    p.-text
      | Display utility classes can be defined using the format <code>-d-{breakpoint}--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    AnchorTitle(title="Target all breakpoints", tag="h3", :anchor="`?theme=${$store.state.themes.theme}#target-all-breakpoints`")
    p.-text Display utility classes with no breakpoint defined apply to all screen sizes.

    section.chi-table.-bordered.-mt--3.-mb--3
      div
        table.-text(cellpadding='0', cellspacing='0')
          thead
            tr
              th Display Class
              th Value
          tbody
            each type in ['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']
              tr
                td(width='40%')
                  code=`-d--${type}`
                td
                  code=`display: ${type};`

    AnchorTitle(title="Target specific breakpoints", tag="h3", :anchor="`?theme=${$store.state.themes.theme}#target-specific-breakpoints`")
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

    AnchorTitle(title="Special display classes", tag="h3", :anchor="`?theme=${$store.state.themes.theme}#special-display-classes`")
    p.-text
      | To target screen readers only or a specific media type (@media screen or @media print), use the below classes.

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

    UtilityExample(title="Examples", id="examples", titleSize="h2", additionalClasses="-show--example")
      fragment(slot="example")
        .-text.-p--3.-m--1.-d--none.-d-xl--inline-flex -d--none -d-xl--inline-flex
        .-text.-p--3.-m--1.-d--flex.-d-sm--none -d-sm--none
        .-text.-p--3.-m--1.-d--inline-flex -d--inline-flex
        .-text.-p--3.-m--1.-d--flex -d--flex
      <pre class="language-html" slot="code-example">
        <code v-highlight="$data.codeSnippet" class="html"></code>
      </pre>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Fragment } from "vue-fragment";

  @Component({
    components: {
      Fragment
    },
    data: ()=> {
      return {
        codeSnippet: `<!-- hidden on all breakpoints except xl -->
<div class="-d--none -d-xl--inline-flex"></div>
<!-- hidden on sm breakpoints -->
<div class="-d-sm--none"></div>
<!-- inline-flex on all breakpoints -->
<div class="-d--inline-flex"></div>
<!-- flex on all breakpoints -->
<div class="-d--flex"></div>`,
      }
    }
  })

  export default class Color extends Vue {}
</script>
