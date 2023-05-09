<template lang="pug">
  <ComponentExample title="Brand complimentary" id="brand-complimentary-icon-color" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | More icon colors that can be used to compliment the primary brand palette.
    <Wrapper slot="example">
      .-mb--3
        .chi-grid.-no-gutter
          .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
            i(v-for="icon in icons" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
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
      icons: ['icon--navy', 'icon--orange'],
      codeSnippets: {
        htmlblueprint: `<i class="chi-icon icon-atom -md -icon--navy" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--orange" aria-hidden="true"></i>`
      }
    };
  }
})
export default class BrandComplimentaryIconColor extends Vue {}
</script>
