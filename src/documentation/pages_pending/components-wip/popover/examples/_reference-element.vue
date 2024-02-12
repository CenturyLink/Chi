<template lang="pug">
  <ComponentExample title="Reference element" id="reference-element" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | A reference element can be set up for advanced positioning.
      | The popover will be positioned relative to this element.
    template(#example)
      chi-button#example-3-button(@click="togglePopover") Click me!
      chi-popover(ref="popover" position="top", title="Popover title", variant="text", arrow, reference="#example-3-button")
        | Popover content

    template(#code-webcomponent)
      .chi-tab__description
        | Use the <code>reference</code> attribute with a
        | CSS selector to properly reference an element.
      Copy(lang="html" :code="codeSnippets.webcomponent")

    template(#code-htmlblueprint)
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class ReferenceElement extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: `<chi-button id="example-3-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-3-popover" position="top" title="Popover title" variant="text" arrow reference="#example-3-button" position="top" active></chi-popover>

<script>
  document.querySelector("#example-3-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-3-popover");
      popoverElem.toggle();
    });
<\/script>`,
    htmlblueprint: `<!-- Method 1 - Data Target -->
<button class="chi-button" id="popover-1b" data-target="#popover-in-html">Popover</button>
<!-- Put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<section class="chi-popover" id="popover-in-html" aria-modal="true" role="dialog" aria-label="Popover title">
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>
<script>chi.popover(document.getElementById('popover-1b'));<\/script>

<!-- Method 2 - Data Content -->
<button id='popover-1' class="chi-button" data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover title</h2></header><div class="chi-popover__content"><p class="chi-popover__text">Popover content</p></div>'>Popover</button>
<script>chi.popover(document.getElementById('popover-1'));<\/script>`,
  }
  togglePopover() {
    (this.$refs.popover as any).toggle();
  }
}
</script>
