<template lang="pug">
UtilityExample(title="Responsive background-color examples", id="responsive-background-color-examples", titleSize="h3")
  div(slot="example")
    .-text.-b--1.-p--3.-m--1.-bg--primary(style="color:white;") -bg--primary
    .-text.-b--1.-p--3.-m--1.-bg-sm--secondary(style="color:black;") -bg-sm--secondary
    .-text.-b--1.-p--3.-m--1.-bg-md--warning(style="color:white;") -bg-md--warning
    .-text.-b--1.-p--3.-m--1.-bg-lg--danger(style="color:white;") -bg-lg--danger
    .-text.-b--1.-p--3.-m--1.-bg-xl--black(style="color:white;") -bg-xl--black
    .-text.-b--1.-p--3.-m--1.-bg--none(style="color:black;") -bg--none
  <pre class="language-html" slot="code-example">
    <code v-highlight="$data.codeSnippet" class="html"></code>
  </pre>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    data: ()=> {
      return {
        codeSnippet: `<!-- background-color primary on all breakpoints -->
<div class="-bg--primary"></div>
<!-- background-color secondary from sm -->
<div class="-bg-sm--secondary"></div>
<!-- background-color warning from md -->
<div class="-bg-md--warning"></div>
<!-- background-color danger from lg -->
<div class="-bg-lg--danger"></div>
<!-- background-color black from xl -->
<div class="-bg-xl--black"></div>
<!-- background none on all breakpoints -->
<div class="-bg--none"></div>`,
      }
    }
  })

  export default class ResponsiveBackgroundColorExamples extends Vue {}
</script>
