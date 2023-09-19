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
        li(v-for="({ name, value }) in breakpoints") <code>{{ name }}</code> - use to apply <code>line-height</code> to {{ value }} breakpoints.
      <TitleAnchor title="{size}" id="text-sizes-inner" titleSize="h4"/>
      ul.-text
        li <code>0</code> - use to set <code>line-height</code> and set to <code>0</code>
        li(v-for="index in 9" :key="index")
          | <code>{{`${ index }`}}</code> - use to set <code>line-height</code> to <code>$base-unit * {{`${ index }`}}</code>
    .-mb--3(slot="example")
      .-m--3.-show--example
        p.-text.-pl--1(v-for="className in classNames" :class="`-lh-${className}`") -lh-{{ className }}
    <pre class="language-html" slot="code-htmlblueprint">
       <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { breakpoints } from '~/fixtures/fixtures';

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
      breakpoints
    };
  }
})
export default class LineHeights extends Vue {
  classNames = ['md--2', 'lg--4', 'sm--5', 'xl--7']

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.classNames
      .map((className: string) => `<p class="-text -lh-${ className }">-lh-${ className }</p>`)
      .join('\n');
  }
}
</script>
