<template lang="pug">
fragment
  UtilityExample(title="Brand", id="border-colors-brand", titleSize="h4")
    p.-text(slot="example-description")
      | Brand border colors reinforce Lumen's brand. Use primary and secondary
      | as accents and base, black, and white as neutrals.
    .-p--1(slot="example")
      .chi-grid.-no-gutter.-text.-text--center.-mb--2
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--base-light.-bg--grey-10 Base Light
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-bg--grey-10 Base
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--base-dark.-bg--grey-10 Base Dark
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--primary.-bg--grey-10 Primary
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--black.-bg--grey-10 Black
      .chi-grid.-no-gutter.-text.-text--center.-bg--black.-text--white
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--secondary Secondary
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--white White
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
        codeSnippet: `<!-- For light backgrounds -->
<div class="-b--1 -b--base-light"></div>
<div class="-b--1 -b--base"></div>
<div class="-b--1 -b--base-dark"></div>
<div class="-b--1 -b--primary"></div>
<div class="-b--1 -b--black"></div>
<!-- For dark backgrounds -->
<div class="-b--1 -b--secondary"></div>
<div class="-b--1 -b--white"></div>`,
      }
    }
  })

  export default class BorderColorsBrand extends Vue {}
</script>
