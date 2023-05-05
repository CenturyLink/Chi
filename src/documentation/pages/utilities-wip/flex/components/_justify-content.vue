<template lang="pug">
fragment
  <ComponentExample title="Justify content" id="row-default" titleSize="h2" :tabs="$data.exampleTabs" hideTabs="true">
    p.-text(slot="example-description") Use justify-content utilities to alter the alignment of flex items on the main axis.

    div(slot="example", v-html="$data.codeSnippetPrintable")

    pre(class="language-html" slot="code-default")
      code(v-highlight="$data.codeSnippet" class="html")
  </ComponentExample>

  p.-text Target specific breakpoints with Justify content responsive classes.
  ul.-mb--3
    each type in ['start', 'end', 'center', 'between', 'around']
      li
        code=`-justify-content--${type}`
    each size in ['sm', 'md', 'lg', 'xl']
      each type in ['start', 'end', 'center', 'between', 'around']
        li
          code=`-justify-content-${size}--${type}`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-d--flex -justify-content--start"></div>
<div class="-d--flex -justify-content--end"></div>
<div class="-d--flex -justify-content--center"></div>
<div class="-d--flex -justify-content--between"></div>
<div class="-d--flex -justify-content--around"></div>`;

const codeSnippetPrintable = () => {
  const types = ['start', 'end', 'center', 'between', 'around'];
  const examples = types.map(
    type => `
      <div class="-mb--2 -d--flex -bg--grey-10 -show--example -justify-content--${type}">
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
export default class JustifyContent extends Vue {}
</script>
