<template lang="pug">
  <ComponentExample title="Responsive background-color examples" id="responsive-background-examples" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    <Wrapper slot="example">
      .-mb--3
        .-text.-b--1.-p--3.-m--1(
          v-for="example in examples"
          :class="example.className"
          :style="`color:${example.textColor ? example.textColor : 'white'}`") {{ example.className }}
    </Wrapper>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      examples: [
        {
          className: '-bg--primary'
        },
        {
          className: '-bg-sm--secondary',
          textColor: 'black'
        },
        {
          className: '-bg-md--warning'
        },
        {
          className: '-bg-lg--danger'
        },
        {
          className: '-bg-xl--black'
        },
        {
          className: '-bg--none',
          textColor: 'black'
        }
      ],
      codeSnippets: {
        htmlblueprint: `<!-- background-color primary on all breakpoints -->
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
<div class="-bg--none"></div>`
      }
    };
  }
})
export default class ResponsiveBackgroundExamples extends Vue {}
</script>
