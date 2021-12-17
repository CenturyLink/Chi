<template lang="pug">
<ComponentExample title="Base" id="base" padding="-p--0" additionalClasses="position:static" :tabs="exampleTabs">
  .-p--3(slot="example")
    .-d--flex.-justify-content--start.-align-items--start
      button#modal-trigger-1.chi-button.-primary.chi-modal__trigger(data-target='#modal-1')
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
  <Wrapper slot="code-webcomponent">
    <pre class="language-html">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
  </Wrapper>
  <Wrapper slot="code-htmlblueprint">
    <JSNeeded />
    <pre class="language-html">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </Wrapper>
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
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
      },
    };
  },
})
export default class Base extends Vue {

  mounted() {
    const openModalPopup = document.getElementById('modal-trigger-1');
    // chi.modal(openModalPopup);
  }
  
}
</script>
