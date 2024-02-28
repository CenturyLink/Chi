<template lang="pug">
<ComponentExample title="Draggable popover" id="draggable-portal" :tabs="exampleTabs">
  template(#example)
    chi-button#example-modal-draggable-button(@click="togglePopover") Click me!
    chi-popover(ref="popover" title="Draggable Popover" reference="#example-modal-draggable-button" drag modal closable) Popover content

  template(#code-webcomponent)
    .chi-tab__description
      | Use the <code>reference</code> attribute with a
      | CSS selector to properly reference an element.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)

    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class DraggablePortal extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      disabled: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: `<chi-button id="example-modal-draggable-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-modal-draggable-popover" title="Draggable Popover" reference="#example-modal-draggable-button" drag modal closable>Popover content</chi-popover>

<script>
  document.querySelector("#example-modal-draggable-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-modal-draggable-popover");

      popoverElem.toggle();
  });
<\/script>`,
    htmlblueprint: ``,
  };
  togglePopover() {
    (this.$refs.popover as any).toggle();
  }
}
</script>
