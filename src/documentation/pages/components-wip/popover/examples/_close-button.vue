<template lang="pug">
  <ComponentExample title="Close button" id="close-button" :tabs="exampleTabs">
    <Wrapper slot="example">
      chi-button#button-example-popover-closable-1(@click="togglePopover") Click Me!
      chi-popover(
        ref="popover"
        title="Title"
        variant="text"
        arrow
        reference="#button-example-popover-closable-1"
        closable)
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Wrapper>
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the attribute <code>closable</code> to render the Popover with a close button.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot='code-htmlblueprint'>
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
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-button id="button-example-popover-closable-1">With title</chi-button>
<chi-popover id="popover-example-popover-closable-1" title="Title" variant="text" arrow reference="#button-example-popover-closable-1" closable>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</chi-popover>

<script>
  const button = document.getElementById("button-example-popover-closable-1");
  const popover = document.getElementById("popover-example-popover-closable-1");

  button.addEventListener("click", function() {
      popover.toggle();
  });
<\/script>`,
        htmlblueprint: `<button class="chi-button" id="button-example-popover-closable-html" data-target="#popover-example-popover-closable-html">Popover</button>
<section class="chi-popover -closable" id="popover-example-popover-closable-html" aria-modal="true" role="dialog" aria-label="Popover title">
  <button class="chi-button -xs -icon -close" id="close-popover-button" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</section>

<script>
  const popoverTrigger = document.getElementById("button-example-popover-closable-html");
  const popoverInstance = chi.popover(popoverTrigger);
  const closeButton = document.getElementById("close-popover-button");

  closeButton.addEventListener("click", function () {
    popoverInstance.hide();
  });
<\/script>`
      }
    };
  }
})
export default class CloseButton extends Vue {
  togglePopover() {
    (this.$refs.popover as any).toggle();
  }
}
</script>
