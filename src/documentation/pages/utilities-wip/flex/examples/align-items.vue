<template lang="pug">
fragment
  <ComponentExample title="Align items" id="align-items" titleSize="h2" :tabs="$data.exampleTabs" hideTabs="true">
    p.-text(slot="example-description") Use align-items utilities to alter the alignment of flex items on the cross axis.

    div(slot="example", v-html="$data.codeSnippetPrintable")

    pre(class="language-html" slot="code-default")
      code(v-highlight="$data.codeSnippet" class="html")
  </ComponentExample>

  p.-text Target specific breakpoints with Align items responsive classes.
  ul.-mb--3
    each type in ['start', 'end', 'center', 'baseline', 'stretch']
      li
        code=`-align-items--${type}`
    each size in ['sm', 'md', 'lg', 'xl']
      each type in ['start', 'end', 'center', 'baseline', 'stretch']
        li
          code=`-align-items-${size}--{type}`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-d--flex -align-items--start"></div>
<div class="-d--flex -align-items--end"></div>
<div class="-d--flex -align-items--center"></div>
<div class="-d--flex -align-items--baseline"></div>
<div class="-d--flex -align-items--stretch"></div>`;

const codeSnippetPrintable = () => {
  const types = ['start', 'end', 'center', 'baseline', 'stretch'];
  const examples = types.map(
    type => `
      <div class="-mb--2 -d--flex -bg--grey-10 -show--example -align-items--${type}" style="height: 7rem;">
        <div class="-text -p--2">Item 1</div>
        <div class="-text -p--2">Item 2</div>
        <div class="-text -p--2">Item 3</div>
      </div>
    `
  );

  return examples.join('');
};

@Component({
  data: () => {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }],
      codeSnippet,
      codeSnippetPrintable: codeSnippetPrintable()
    };
  }
})
export default class AlignItems extends Vue {}
</script>
