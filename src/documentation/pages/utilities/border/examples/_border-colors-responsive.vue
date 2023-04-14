<template lang="pug">
fragment
  UtilityExample(title="Responsive", id="border-colors-responsive", titleSize="h4")
    p.-text(slot="example-description")
      | Use breakpoint classes to change an element's border color on different viewports.
      | Follow the format <code>-b[-{breakpoint}]--{color}</code>.
    .-p--1(slot="example")
      .chi-grid.-no-gutter.-text.-text--center
        .chi-col.-w--8
          .-m--1.-p--1.-py--4.-b--1.-b--primary.-b-sm--dark.-b-md--danger.-b-lg--success.-b-xl--warning.-bg--grey-10
            | -b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning
    <pre class="language-html" slot="code-example">
      <code v-highlight="$data.codeSnippet" class="html"></code>
    </pre>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Fragment } from 'vue-fragment'

  @Component({
    components: {
      Fragment
    },
    data: ()=> {
      return {
        codeSnippet: `<div class="-b--1 -b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning"></div>`,
      }
    }
  })

  export default class BorderColorsResponsive extends Vue {}
</script>
