<template lang="pug">
  <ComponentExample titleSize="h3" title="Labeled icon buttons" id="labeled-portal" :tabs="exampleTabs">
    template(#example)
      .-d--flex
        .-pr--2
          chi-button(size='xs')
            chi-icon(icon='edit')
            span Edit
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
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
