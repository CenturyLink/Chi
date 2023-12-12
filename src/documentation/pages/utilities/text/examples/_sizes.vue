<template lang="pug">
  <ComponentExample padding="-p--0" title="Sizes" id="text-sizes" :tabs="exampleTabs" :showSnippetTabs="false">
    div(slot="example-description")
      p.-text
        | Text utility classes can be defined using the format <code>-text[-{breakpoint}]--{size}</code>.
      <TitleAnchor title="{breakpoint}" id="text-breakpoint" titleSize="h4"/>
      p.-text
        | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
        | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
      ul.-text
        li blank - leave blank to apply <code>text</code> to all breakpoints.
        li(v-for="({ name, value }) in breakpoints") <code>{{ name }}</code> - use to apply <code>margin</code> or <code>padding</code> to {{ value }} breakpoints.
      <TitleAnchor title="{size}" id="text-sizes-inner" titleSize="h4"/>
      ul.-text
        li(v-for="({ className, value }) in sizeDescriptions") <code>{{ className }}</code> - use to apply an <code>{{ value }}</code> size to <code>text</code>
      ul.-text
        li(v-for="index in [6, 5, 4, 3, 2, 1]" :key="index")
          | <code>h{{`${ index }`}}</code> - use to apply an <code>h{{`${ index }`}}</code> size to <code>text</code>
    .-mb--3(slot="example")
      p.-text.-m--3(v-for="className in classNames" :class="`-text-${className}`")
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, dictum quis mauris vel,
        | commodo condimentum odio. Praesent lacus metus, vehicula at orci ac, fringilla mollis mauris.
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
export default class Sizes extends Vue {
  sizeDescriptions = [
    { className: 'xs', value: 'x-small' },
    { className: 'sm', value: 'small' },
    { className: 'md', value: 'medium' },
    { className: 'lg', value: 'large' },
    { className: 'xl', value: 'x-large' },
  ];

  classNames = ['md--lg', 'xl--xs', 'lg--xl']

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.classNames
      .map((className: string) => `<p class="-text-${ className }">-text--${ className }</p>`)
      .join('\n');
  }
}
</script>
