<template lang="pug">
  <ComponentExample padding="-p--0" title="Line heights" id="text-line-heights" :tabs="exampleTabs" :showSnippetTabs="false">
    div(slot="example-description")
      p.-text
        | Line height sizes can be defined using the format <code>-lh[-{breakpoint}]--{size}</code>.
      <TitleAnchor title="{breakpoint}" id="text-breakpoint" titleSize="h4"/>
      p.-text
        | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
        | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
      ul.-text
        li blank - leave blank to apply <code>text</code> to all breakpoints.
        li <code>sm</code> - use to apply <code>line-height</code> to sm and larger breakpoints.
        li <code>md</code> - use to apply <code>line-height</code> to md and larger breakpoints.
        li <code>lg</code> - use to apply <code>line-height</code> to lg and larger breakpoints.
        li <code>xl</code> - use to apply <code>line-height</code> to xl breakpoints.
      <TitleAnchor title="{size}" id="text-sizes-inner" titleSize="h4"/>
      ul.-text
        li <code>0</code> - use to set <code>line-height</code> and set to <code>0</code>
        li(v-for="(index) in 9" :key="index")
          | <code>{{`${ index }`}}</code> - use to set <code>line-height</code> to <code>$base-unit * {{`${ index }`}}</code>
    .-mb--3(slot="example")
      .-m--3.-show--example
        p.-text.-pl--1.-lh-md--2 -lh-md--2
        p.-text.-pl--1.-lh-lg--4 -lh-lg--4
        p.-text.-pl--1.-lh-sm--5 -lh-sm--5
        p.-text.-pl--1.-lh-xl--7 -lh-xl--7
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
export default class LineHeights extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: '<p class="-text -lh-md--2">-lh-md--2</p>\n' +
        '<p class="-text -lh-lg--4">-lh-lg--4</p>\n' +
        '<p class="-text -lh-sm--5">-lh-sm--5</p>\n' +
        '<p class="-text -lh-xl--7">-lh-xl--7</p>'
    };
  }
}
</script>
