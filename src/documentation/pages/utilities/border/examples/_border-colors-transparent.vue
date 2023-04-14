<template lang="pug">
fragment
  UtilityExample(title="Transparent", id="border-colors-transparent", titleSize="h4")
    p.-text(slot="example-description")
      | Use the transparent border color as a method to hide an element's border without altering its size.
    .-p--1(slot="example")
      .chi-grid.-no-gutter.-text.-text--center
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--transparent.-bg--grey-10 Transparent
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
        codeSnippet: `<div class="-b--1 -b--transparent"></div>`,
      }
    }
  })

  export default class BorderColorsTransparent extends Vue {}
</script>
