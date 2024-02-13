<template lang="pug">
<ComponentExample title="Base" id="base" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Popover components are absolutely positioned. For this example we have forced a relative position.
  template(#example)
    .-position--relative(style="height: 53px;")
      chi-popover(active, variant="text", prevent-auto-hide)
        | Popover content
  template(#code-webcomponent)
    .chi-tab__description
      | Remove the <code>active</code> attribute to hide the popover.
      | Use the <code>variant="text"</code> attribute to display text content in a <code>&lt;p&gt;</code>.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | Remove the <code>-active</code> class to hide the popover.
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
        webcomponent: `<chi-popover variant="text" active>
  Popover content
</chi-popover>`,
        htmlblueprint: `<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`,
      },
    };
  },
})
export default class Base extends Vue { }
</script>
