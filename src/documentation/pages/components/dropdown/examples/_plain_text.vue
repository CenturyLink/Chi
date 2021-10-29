<template lang="pug">
  <ComponentExample title="Plain Text" id="plain_text" :tabs="exampleTabs" backgroundColor="#eee">
    div(slot="example-description")
      p.-text Use a <code>span</code> tag to include text without rendering as a link.
    div(slot="example")
      .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3
        .chi-dropdown__menu.-active
          span.chi-dropdown__menu-item Text 1
          span.chi-dropdown__menu-item Text 2
          span.chi-dropdown__menu-item Text 3
          span.chi-dropdown__menu-item Text 4
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
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
        webcomponent: `Web component code snippet`,
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
export default class PlainTextExample extends Vue {
  mounted() {}
}
</script>
