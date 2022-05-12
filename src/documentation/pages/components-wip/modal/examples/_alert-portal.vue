<template lang="pug">
  <ComponentExample title="Alert" id="alert-portal" padding="-p--0" :tabs="exampleTabs">
    .chi-backdrop.-p--6.-position--relative.-z--0(slot="example")
      .chi-backdrop__wrapper
        section.chi-modal.-portal(role="dialog", aria-label="Modal description", aria-modal="true")
          header.chi-modal__header
            h2.chi-modal__title Alert Modal Title
            button(class='chi-button -icon -close', aria-label='Close')
              .chi-button__content
                i.chi-icon.icon-x(aria-hidden="true")
          .chi-modal__content
            .-d--flex
              i.chi-icon.icon-circle-x.-sm--3.-icon--danger.-mr--2(aria-hidden="true")
              .-w--100
                p.-text--bold.-m--0 Replace this subhead text with specific text from project documentation
                p.-mt--1.-mb--0
                  | Supporting text to explain the subhead text. Check user story to customize based on requirements.
                  | This is placeholder text to show spacing and line height. Replace this text with text provided in requirements.
          footer.chi-modal__footer
            button.chi-button.-primary Button
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
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
<button id="modal-trigger-alert" class="chi-button chi-modal__trigger" data-target="#modal-alert">
  Launch portal alert modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-alert" class="chi-modal -portal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Alert Modal Title</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <div class="-d--flex">
          <i class="chi-icon icon-circle-x -sm--3 -icon--danger -mr--2" aria-hidden="true"></i>
          <div class="-w--100">
            <p class="-text--bold -m--0">Replace this subhead text with specific text from project documentation</p>
            <p class="-mt--1 -mb--0">Supporting text to explain the subhead text. Check user story to customize based on requirements. This is placeholder text to show spacing and line height. Replace this text with text provided in requirements.</p>
          </div>
        </div>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button -primary">Button</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-alert'));<\/script>`,
      },
    };
  },
})
export default class AlertPortal extends Vue {}
</script>
