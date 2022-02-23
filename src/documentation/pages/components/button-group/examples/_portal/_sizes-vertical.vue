<template lang="pug">
  <ComponentExample titleSize="h4" title="Vertical" id="vertical-portal" :tabs="exampleTabs">
    div(slot="example" v-for="size in sizes")
      p.-text--bold.-pl--2 {{size}}
      div(class=`chi-col -w--12 -pb--2 -mr--0 -d--flex`)
        .-pr--2
          chi-button(:size='size', color='primary') Button
        .-pr--2
          chi-button(:size='size') Button
        .-pr--2
          chi-button(:size='size' variant='flat' type='icon' alternative-text='Button action' data-tooltip='Button action' data-position='bottom')
            chi-icon(icon='atom')
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      sizes: ['xs', 'sm', 'md', 'lg'],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<!-- xs -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
</div>
<!-- sm -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
</div>
<!-- md -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
</div>
<!-- lg -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
</div>`,
      },
    };
  },
})
export default class SizesVertical extends Vue {}
</script>
