<template lang="pug">
<ComponentExample title="With Subtitle" id="with_subtitle" padding="-p--0" :tabs="exampleTabs">
  .chi-backdrop.-p--6.-position--relative.-z--0(slot="example")
    .chi-backdrop__wrapper
      section.chi-modal(role="dialog", aria-label="Modal description", aria-modal="true")
        header.chi-modal__header
          h2.chi-modal__title Modal Title
          h3.chi-modal__subtitle Modal subtitle
          button(class='chi-button -icon -close', aria-label='Close')
            .chi-button__content
              i.chi-icon.icon-x(aria-hidden="true")
        .chi-modal__content
          p.-text.-m--0 Modal content
        footer.chi-modal__footer
          button.chi-button Cancel
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
<button id="modal-trigger-5" class="chi-button chi-modal__trigger" data-target="#modal-5">
  Launch modal with subtitle
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-5" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Title</h2>
        <h3 class="chi-modal__subtitle">Modal subtitle</h3>
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
<script>chi.modal(document.getElementById('modal-trigger-5'));<\/script>`,
      },
    };
  },
})
export default class SubTitle extends Vue {}
</script>
