<template lang="pug">
<ComponentExample title="Inline Modal" id="inline-modal-portal" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use Inline Modals to imitate the style of a Modal and the behavior of a Popover. This is useful for advanced
      | filtering in Data Tables.
  template(#example)
    .-position--relative(style="height: 106px;")
      chi-popover(
        modal
        closable
        title="Popover title"
        active
        prevent-auto-hide
      )
        | Popover content
  template(#code-webcomponent)
    .chi-tab__description
      | Use the <code>modal</code> attribute to style a Popover as an inline Modal.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)

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
        webcomponent: `<chi-popover title="Popover title" modal closable active>Popover content</chi-popover>`,
        htmlblueprint: `<!-- Put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<section class="chi-popover -modal -active" aria-modal="true" role="dialog" aria-label="Popover title">
  <button class="chi-button -xs -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`,
      },
    };
  },
})
export default class InlineModalPortal extends Vue {}
</script>
