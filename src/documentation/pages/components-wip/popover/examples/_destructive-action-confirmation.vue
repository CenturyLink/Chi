<template lang="pug">
  <ComponentExample titleSize="h4" title="Destructive action confirmation" id="destructive-action-confirmation" :tabs="exampleTabs">
    template(#example)
      .-position--relative(style="height: 146px;")
        chi-popover(position="top", title="Are you sure?", variant="text", active, arrow, prevent-auto-hide)
          | Are you sure you want to delete this?
          div(slot="chi-popover__footer")
            chi-button(color="danger") Delete
          div(slot="chi-popover__footer")
            chi-button Cancel
    template(#code-webcomponent)
      .chi-tab__description
        | Add buttons to Popovers by setting slot attribute to <code>slot="chi-popover__footer"</code>.
      Copy(lang="html" :code="codeSnippets.webcomponent")

    template(#code-htmlblueprint)
      .chi-tab__description
        | Add buttons to Popovers by placing them in <code>chi-popover__footer</code>.
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
        webcomponent: `<chi-popover position="top" title="Are you sure?" variant="text" active arrow>
  Are you sure you want to delete this?
  <chi-button slot="chi-popover__footer" color="danger">Delete</chi-button>
  <chi-button slot="chi-popover__footer">Cancel</chi-button>
</chi-popover>`,
        htmlblueprint: `<section class="chi-popover chi-popover--top -active" aria-label="Are you sure?" aria-modal="true" role="dialog">
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Are you sure?</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Are you sure you want to delete this?</p>
  </div>
  <div class="chi-popover__footer">
    <button class="chi-button -danger">Delete</button>
    <button class="chi-button">Cancel</button>
  </div>
  <div class="chi-popover__arrow"></div>
</section>`,
      },
    };
  },
})
export default class DestructiveActionConfirmation extends Vue { }
</script>
