<template lang="pug">
  <ComponentExample title="Help" id="help" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use <code>chi-label__help</code> to include a help icon that displays helpful information about an input in a popover.
      | A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.
    .chi-form__item(slot="example")
      .chi-label__wrapper
        chi-label(for='unique-id-he1') Label
        .chi-label__help
          chi-button(id='example__help-button' type='icon' size='xs' variant='flat' alternative-text="Help" @click="$refs.popover.toggle()")
            chi-icon(icon='circle-info-outline')
          chi-popover(ref="popover" id='example__help-popover' position='top' variant='text' arrow reference='#example__help-button')
            | Helpful information goes here.
      chi-number-input#unique-id-he1
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
        webcomponent: `<div class="chi-label__wrapper">
  <chi-label for="unique-id-he1">Label</chi-label>
  <div class="chi-label__help">
    <chi-button id="example__help-button" type="icon" size="xs" variant="flat" alternative-text="Help">
      <chi-icon icon="circle-info-outline"></chi-icon>
    </chi-button>
    <chi-popover id="example__help-popover" position="top" variant="text" arrow reference="#example__help-button">
      Helpful information goes here.
    </chi-popover>
  </div>
</div>
<chi-number-input id="unique-id-he1"></chi-number-input>

<script>
  document
    .querySelector("#example__help-button")
    .addEventListener("click", function () {
      var popoverElem = document.querySelector("#example__help-popover");

      popoverElem.toggle();
    });
<\/script>`,
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="unique-id-he1">Label</label>
    <div class="chi-label__help">
      <div class="chi-button -icon -flat -xs" id="example__help-button" data-target="#example__help-popover" aria-label="Help">
        <div class="chi-button__content">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </div>
      </div>
      <section class="chi-popover chi-popover--top" id="example__help-popover" aria-modal="true" role="dialog">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
  <div class="chi-number-input">
    <input id="unique-id-he1" type="number" class="chi-input" value="0" aria-label="Input Label" required>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>
  chi.numberInput(document.getElementById('unique-id-he1'));
  chi.popover(document.getElementById('example__help-button'));
<\/script>`
      }
    };
  }
})
export default class Help extends Vue {}
</script>
