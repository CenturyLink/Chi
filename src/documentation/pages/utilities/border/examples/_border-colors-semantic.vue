<template lang="pug">
fragment
  UtilityExample(title="Semantic", id="border-colors-semantic", titleSize="h4")
    p.-text(slot="example-description")
      | Use semantic border colors to communicate meaning to users.
      | Use green (success) for positive, blue (info) for informative,
      | red (danger) for negative, and yellow (warning) for needs attention.
    .-p--1(slot="example")
      .chi-grid.-no-gutter.-text.-text--center
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--success Success
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--success-light.-bg--success-lighter Success Light
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--info Info
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--info-light.-bg--info-lighter Info Light
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--danger Danger
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--danger-light.-bg--danger-lighter Danger Light
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--warning Warning
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-b--warning-light.-bg--warning-lighter Warning Light
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
        codeSnippet: `<div class="-b--1 -b--success"></div>
<div class="-b--1 -b--success-light"></div>
<div class="-b--1 -b--info"></div>
<div class="-b--1 -b--info-light"></div>
<div class="-b--1 -b--danger"></div>
<div class="-b--1 -b--danger-light"></div>
<div class="-b--1 -b--warning"></div>
<div class="-b--1 -b--warning-light"></div>`,
      }
    }
  })

  export default class BorderColorsSemantic extends Vue {}
</script>
