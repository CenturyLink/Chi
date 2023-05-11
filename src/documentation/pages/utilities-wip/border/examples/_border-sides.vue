<template lang="pug">
  <ComponentExample title="Border Sides" id="border-sides" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Apply borders to specific sides of an element by adding <code>t</code>,
      | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
      | to the class name.
    <Wrapper slot="example">
      .chi-grid.-text.-no-gutter.-text--center
        .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="index in 6" :key="index")
          .-m--1.-p--1.-py--5.-bt--1.-bg--grey-10 -bt--1
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
      codeSnippets: {
        htmlblueprint: `<div class="-bt--1"></div>
<div class="-br--1"></div>
<div class="-bb--1"></div>
<div class="-bl--1"></div>
<div class="-bx--1"></div>
<div class="-by--1"></div>`
      }
    };
  }
})
export default class BorderSides extends Vue {}
</script>
