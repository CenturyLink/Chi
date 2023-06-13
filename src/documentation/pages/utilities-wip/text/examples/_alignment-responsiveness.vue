<template lang="pug">
  <ComponentExample padding="-p--0" title="Text alignment" id="text-alignment-responsiveness" :tabs="exampleTabs" :showSnippetTabs="false">
    div(slot="example-description")
      p.-text
        | Text utility classes can be align using the format <code>-text[-{breakpoint}]--{alignment}</code>.
      <TitleAnchor title="{breakpoint}" id="text-breakpoint" titleSize="h4"/>
      p.-text
        | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
        | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
      ul.-text
        li blank - leave blank to apply <code>alignment</code> to all breakpoints.
        li <code>sm</code> - use to apply <code>alignment</code> to sm and larger breakpoints.
        li <code>md</code> - use to apply <code>alignment</code> to md and larger breakpoints.
        li <code>lg</code> - use to apply <code>alignment</code> to lg and larger breakpoints.
        li <code>xl</code> - use to apply <code>alignment</code> to xl breakpoints.
      <TitleAnchor title="{alignment}" id="text-sizes-inner" titleSize="h4"/>
      ul.-text
        li <code>justify</code> - use to set <code>justify</code> the <code>text</code>
        li <code>center</code> - use to set <code>center</code> the <code>text</code>
        li <code>left</code> - use to set <code>left</code> the <code>text</code>
        li <code>right</code> - use to set <code>right</code> the <code>text</code>
    .-mb--3(slot="example")
      .-m--3
        p.-text.-text-md--justify This text will render as justified from md and larger breakpoints
        p.-text.-text-lg--left This text will render as left aligned from lg and larger breakpoints
        p.-text.-text-sm--center This text will render as center aligned from sm and larger breakpoints
        p.-text.-text-xl--right This text will render as right aligned from xl and larger breakpoints
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
          label: 'HTML Blueprint',
        },
      ],
    };
  },
})
export default class AlignmentResponsiveness extends Vue {
  codeSnippets = {
    htmlblueprint: '<p class="-text-md--justify">This text will render as justified from md and larger breakpoints</p>\n' +
      '<p class="-text-lg--left">This text will render as left aligned from lg and larger breakpoints</p>\n' +
      '<p class="-text-sm--center">This text will render as center aligned from sm and larger breakpoints</p>\n' +
      '<p class="-text-xl--right">This text will render as right aligned from xl and larger breakpoints</p>'
    }
}
</script>
