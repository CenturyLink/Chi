<template lang="pug">
  <ComponentExample title="Simple" id="simple" padding="-p--0" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Remove <code>chi-modal__header</code> and <code>chi-modal__footer</code> for a simple and customizable modal.
    .chi-backdrop.-p--6.-position--relative.-z--0(slot="example")
      .chi-backdrop__wrapper
        section.chi-modal(role="dialog", aria-label="Modal description", aria-modal="true")
          button(class='chi-button -icon -close', aria-label='Close')
            .chi-button__content
              i.chi-icon.icon-x(aria-hidden="true")
          .chi-modal__content.-text--center.-p--6
            h2.-text--h3.-m--0.-text--bolder Modal Title
            p.-text.-py--1.-px--3
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
              | mollis nulla, eget ornare tellus. Lorem ipsum dolor sit amet,
              | consectetur adipiscing elit. Donec laoreet rutrum eros laoreet.
            button.chi-button.-primary.-lg.-mt--1 Action
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
<button id="modal-trigger-9" class="chi-button chi-modal__trigger" data-target="#modal-9">
  Launch simple modal
</button>

<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-9" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
      <div class="chi-modal__content -text--center -p--6">
        <h2 class="-text--h3 -text--bolder -m--0">Modal Title</h2>
        <p class="-text -py--1 -px--3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mollis nulla, eget ornare tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet rutrum eros laoreet.</p>
        <button class="chi-button -primary -lg -mt--1">Action</button>
      </div>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-9'));<\/script>`,
      },
    };
  },
})
export default class SimpleLumenCenturyLink extends Vue {}
</script>
