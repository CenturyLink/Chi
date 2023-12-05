<template lang="pug">
  <ComponentExample padding="-p--0" title="Brand complimentary" id="brand-complimentary" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | More text colors that can be used to compliment the primary brand palette.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-p--1.-d--flex.-justify-content--center.-flex--wrap
        .-p--1.-p-sm--2.-text--center(v-for="className in ['navy', 'orange']")
          p.-text(:class="`-text--${className}`") -text--{{ className }}
    <pre class="language-html" slot="code-htmlblueprint">
       <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
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
      ]
    };
  }
})
export default class Complimentary extends Vue {
  codeSnippets = {
    htmlblueprint: `<p class="-text--navy">-text--navy</p>
<p class="-text--orange">-text--orange</p>`
  }
}
</script>
