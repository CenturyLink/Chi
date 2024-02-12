<template lang="pug">
<ComponentExample title="Base" id="base" additionalStyle="position: static;" :tabs="exampleTabs">
  template(#example)
    .-p--0
      .-d--flex.-justify-content--start.-align-items--start
        button#modal-trigger-1.chi-button.-primary.chi-modal__trigger(data-target='#modal-1' ref="baseModal")
          | Click me to open the modal
      .chi-backdrop.-closed
        .chi-backdrop__wrapper
          section.chi-modal#modal-1(role="dialog", aria-label="Modal description", aria-modal="true")
            header.chi-modal__header
              h2.chi-modal__title Modal Title
              button(class='chi-button -icon -close', data-dismiss='modal', aria-label='Close')
                .chi-button__content
                  i.chi-icon.icon-x(aria-hidden="true")
            .chi-modal__content
              p.-text.-m--0 Modal content
            footer.chi-modal__footer
              button.chi-button(data-dismiss='modal') Cancel
              button.chi-button.-primary Save
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")

</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class Base extends Vue {
  exampleTabs = [
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
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<!-- Trigger -->
<button id="modal-trigger-1" class="chi-button chi-modal__trigger" data-target="#modal-1">
  Launch demo modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-1" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Title</h2>
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
        <button class="chi-button" data-dismiss="modal">Cancel</button>
        <button class="chi-button -primary">Save</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-1'));<\/script>`,
  }
  modal: any;

  mounted() {
    this.modal = chi.modal(this.$refs.baseModal as HTMLElement);
  }

  beforeDestroy() {
    this.modal.dispose();
  }
}
</script>
