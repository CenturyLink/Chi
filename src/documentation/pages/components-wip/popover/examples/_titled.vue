<template lang="pug">
<ComponentExample title="Titled" id="titled" :tabs="exampleTabs">
  template(#example)
    .-position--relative(style="height: 87px;")
      chi-popover(active, title="Popover title", variant="text", prevent-auto-hide)
        | Popover content
  template(#code-webcomponent)
    .chi-tab__description
      | Use the <code>title</code> attribute to display a title.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | Add <code>chi-popover__header</code> and <code>chi-popover__title</code> to display a title.
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
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
        webcomponent: `<chi-popover title="Popover title" variant="text" active>
  Popover content
</chi-popover>`,
        htmlblueprint: `<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover Title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`,
      },
    };
  },
})
export default class Titled extends Vue {}
</script>
