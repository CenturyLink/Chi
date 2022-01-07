<template lang="pug">
  <ComponentExample title="Draggable popover" id="draggable_lumen_centurylink" :tabs="exampleTabs">
    <Wrapper slot='example'>
      chi-button#example-draggable-button Click me!
      chi-popover(id="example-draggable-popover" title="Draggable Popover" reference="#example-draggable-button" drag portal closable) Popover content
    </Wrapper>
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the <code>reference</code> attribute with a
        | CSS selector to properly reference an element.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <pre class="language-html" slot='code-htmlblueprint'>
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-button id="example-draggable-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-draggable-popover" title="Draggable Popover" reference="#example-draggable-button" drag portal closable>Popover content</chi-popover>

<script>
  document.querySelector("#example-draggable-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-draggable-popover");

      popoverElem.toggle();
  });
<\/script>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class DraggableLumenCenturyLink extends Vue {
  mounted() {
    document
      .querySelector('#example-draggable-button')?.addEventListener('click', function() {
        const popoverElem: any = document.querySelector(
          '#example-draggable-popover'
        );

        popoverElem?.toggle();
      });
  }
}
</script>
