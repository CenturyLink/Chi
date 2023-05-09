<template lang="pug">
  <ComponentExample title="Brand" id="brand-icon-color" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Brand icon colors reinforce Lumen's brand. Use primary and secondary as accents, and dark, grey, and light as neutrals.
    <Wrapper slot="example">
      .-mb--3
        .chi-grid.-no-gutter
          .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center
            i(v-for="icon in iconsForLightBg" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
          .chi-col.-w--12.-w-md--6.-bg--black.-p--1.-d--flex.-justify-content--center
            i(v-for="icon in iconsForDarkBg" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
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
      iconsForLightBg: ['icon--dark', 'icon--primary', 'icon--grey'],
      iconsForDarkBg: ['icon--secondary', 'icon--light'],
      codeSnippets: {
        htmlblueprint: `<!-- For light backgrounds -->
<i class="chi-icon icon-atom -md -icon--dark" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--primary" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--grey" aria-hidden="true"></i>
<!-- For dark backgrounds -->
<i class="chi-icon icon-atom -md -icon--secondary" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--light" aria-hidden="true"></i>`
      }
    };
  }
})
export default class BrandIconColor extends Vue {}
</script>
