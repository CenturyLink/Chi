<template lang="pug">
  <ComponentExample title="Brand" id="brand" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Brand border colors reinforce Lumen's brand. Use primary and secondary as accents and base, black, and white as neutrals.
    <Wrapper slot="example">
      .-mb--3
        .-p--2
          .chi-grid.-text.-no-gutter.-text--center.-mb--2
            .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="border in borders" :key="border.className")
              .-m--1.-p--1.-py--5.-b--1.-b--.-bg--grey-10(:class="`-b--${border.className}`") {{ border.title }}
          .chi-grid.-no-gutter.-text.-text--center.-bg--black.-text--white
            .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="border in bordersLight" :key="border.className")
              .-m--1.-p--1.-py--5.-b--1(:class="`-b--${border.className}`") {{ border.title }}
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
        htmlblueprint: `<!-- For light backgrounds -->
<div class="-b--1 -b--base-light"></div>
<div class="-b--1 -b--base"></div>
<div class="-b--1 -b--base-dark"></div>
<div class="-b--1 -b--primary"></div>
<div class="-b--1 -b--black"></div>
<!-- For dark backgrounds -->
<div class="-b--1 -b--secondary"></div>
<div class="-b--1 -b--white"></div>`
      }
    };
  }
})
export default class Brand extends Vue {
  borders = [
    {
      className: 'base-light',
      title: 'Base Light'
    },
    {
      className: '',
      title: 'Base'
    },
    {
      className: 'base-dark',
      title: 'Base Dark'
    },
    {
      className: 'primary',
      title: 'Primary'
    },
    {
      className: 'black',
      title: 'Black'
    }
  ]

  bordersLight = [
    {
      className: 'secondary',
      title: 'Secondary'
    },
    {
      className: 'white',
      title: 'White'
    }
  ]
}
</script>
