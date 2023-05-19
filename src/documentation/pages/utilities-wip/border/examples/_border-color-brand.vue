<template lang="pug">
  <ComponentExample title="Brand" id="brand" titleSize="h4" padding="-p--2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Brand border colors reinforce Lumen's brand. Use primary and secondary as accents and base, black, and white as neutrals.
    div(slot="example")
      .chi-grid.-text.-no-gutter.-text--center.-mb--2
        .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="border in borders" :key="border.className")
          .-m--1.-p--1.-py--5.-b--1.-b--.-bg--grey-10(:class="`-b--${border.className === 'base' ? '' : border.className}`") {{ border.title }}
      .chi-grid.-no-gutter.-text.-text--center.-bg--black.-text--white
        .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="border in bordersLight" :key="border.className")
          .-m--1.-p--1.-py--5.-b--1(:class="`-b--${border.className}`") {{ border.title }}
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IBorderUtility } from '~/models/models';

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
export default class BrandBorderColor extends Vue {
  borders = [
    {
      className: 'base-light',
      title: 'Base Light'
    },
    {
      className: 'base',
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

  get codeSnippets() {
    return {
      htmlblueprint: (
`<!-- For light backgrounds -->
${this.generateHtml(this.borders)}
<!-- For dark backgrounds -->
${this.generateHtml(this.bordersLight)}
`
      )
    }
  }

  generateHtml(items: IBorderUtility[]) {
    return items.map(({ className }) => {
      return (
        `<div class="-b--1 -b--${className}"></div>`
      )
    }).join('\n');
  }
}
</script>
