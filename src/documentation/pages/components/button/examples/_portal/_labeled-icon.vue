<template lang="pug">
  <ComponentExample titleSize="h3" title="Labeled icon buttons" id="labeled-portal" :tabs="exampleTabs">
    .-d--flex(slot="example")
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
export default class LabeledIconPortal extends Vue {}
</script>
