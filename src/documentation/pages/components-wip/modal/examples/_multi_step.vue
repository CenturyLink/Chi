<template lang="pug">
<ComponentExample title="Multi-step" id="multi-step" padding="-p--0" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | For multi-step modals, ensure the class <code>-centered</code> is applied to <code>chi-modal__title</code>.
      | This will provide sufficient real estate on the left side to store a back button <code>chi-modal__back</code>.
  template(#example)
    .chi-backdrop.-p--6.-position--relative.-z--0
      .chi-backdrop__wrapper
        section.chi-modal(role="dialog", aria-label="Modal description", aria-modal="true")
          header.chi-modal__header
            h2.chi-modal__title.-centered Modal Title
            button.chi-modal__back(aria-label='Back')
            button(class='chi-button -icon -close', aria-label='Close')
              .chi-button__content
                i.chi-icon.icon-x(aria-hidden="true")
          .chi-modal__content
            p.-text.-m--0 Modal content
          footer.chi-modal__footer
            button.chi-button.-primary Next
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<!-- Trigger -->
<button id="modal-trigger-8" class="chi-button chi-modal__trigger" data-target="#modal-8">
  Launch multi-step modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-8" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title -centered">Modal Title</h2>
        <button class="chi-modal__back" aria-label="Back"></button>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <p class="-text -m--0">Modal content</p>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button -primary">Next</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-8'));<\/script>`,
      },
    };
  },
})
export default class MultiStep extends Vue {}
</script>
