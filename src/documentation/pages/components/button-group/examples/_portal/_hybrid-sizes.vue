<template lang="pug">
  <ComponentExample titleSize="h4" title="Hybrid buttons sizes" id="hybrid-buttons-sizes-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Hybrid buttons support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>.
      | The default size is <code>md</code>.
    div(slot="example")
      .-d--flex
        .-pr--2
          chi-button(size='xs')
            chi-icon(icon='edit')
            span Edit
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
          active: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-button size="xs">
  <chi-icon icon="edit"></chi-icon>
  <span>Edit</span>
</chi-button>`,
        htmlblueprint: `<button class="chi-button -xs">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
    <span>Edit</span>
  </div>
</button>`,
      },
    };
  },
})
export default class HybridSizes extends Vue {}
</script>
