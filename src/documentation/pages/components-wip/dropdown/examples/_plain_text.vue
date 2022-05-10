<template lang="pug">
  <ComponentExample title="Plain Text" id="plain_text" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    p.-text(slot="example-description") Use a <code>span</code> tag to include text without rendering as a link.
    .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3(slot="example")
      .chi-dropdown__menu.-active
        span.chi-dropdown__menu-item Text 1
        span.chi-dropdown__menu-item Text 2
        span.chi-dropdown__menu-item Text 3
        span.chi-dropdown__menu-item Text 4
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
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-dropdown__menu">
  <span class="chi-dropdown__menu-item">Text 1</span>
  <span class="chi-dropdown__menu-item">Text 2</span>
  <span class="chi-dropdown__menu-item">Text 3</span>
  <span class="chi-dropdown__menu-item">Text 4</span>
</div>`
      }
    };
  }
})
export default class PlainText extends Vue {}
</script>
