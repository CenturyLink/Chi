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
        li <code>sm</code> - use to apply <code>text</code> to sm and larger breakpoints.
        li <code>md</code> - use to apply <code>text</code> to md and larger breakpoints.
        li <code>lg</code> - use to apply <code>text</code> to lg and larger breakpoints.
        li <code>xl</code> - use to apply <code>text</code> to xl breakpoints.
      <TitleAnchor title="{size}" id="text-sizes-inner" titleSize="h4"/>
      ul.-text
        li <code>xs</code> - use to apply an <code>x-small</code> size to <code>text</code>
        li <code>sm</code> - use to apply an <code>small</code> size to <code>text</code>
        li <code>md</code> - use to apply an <code>medium</code> size to <code>text</code>
        li <code>lg</code> - use to apply an <code>large</code> size to <code>text</code>
        li <code>xl</code> - use to apply an <code>x-large</code> size to <code>text</code>
      ul.-text
        li(v-for="(index) in 6" :key="index")
          | <code>h{{`${ 7 - index }`}}</code> - use to apply an <code>h{{`${ 7 - index }`}}</code> size to <code>text</code>
    .-mb--3(slot="example")
      p.-text.-text-md--lg.-m--3
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, dictum quis mauris vel,
        | commodo condimentum odio. Praesent lacus metus, vehicula at orci ac, fringilla mollis mauris.
      p.-text.-text-xl--xs.-m--3
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, dictum quis mauris vel,
        | commodo condimentum odio. Praesent lacus metus, vehicula at orci ac, fringilla mollis mauris.
      p.-text.-text-lg--xl.-m--3
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, dictum quis mauris vel,
        | commodo condimentum odio. Praesent lacus metus, vehicula at orci ac, fringilla mollis mauris.
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
export default class Sizes extends Vue {
  codeSnippets = {
    htmlblueprint: '<p class="-text-md--lg"></p>\n' +
      '<p class="-text-xl--xs"></p>\n' +
      '<p class="-text-lg--xl"></p>'
  }
}
</script>
