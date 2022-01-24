<template lang="pug">
  <ComponentExample title="Wait for animations" id="wait-animations" padding="-p--0" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Browsers stop any execution of JavaScript as soon as a link is clicked and it starts to fetch the destination URL.
      | For this reason, the sliding border animation will not be perceived by the user when an external link is clicked, as
      | the animation will not be done, an this can be confusing for the user. To prevent this possible confusion, this
      | component has the option to wait for the animation to finish and, then, it will redirect the user to the destination
      | URL. You can enable this behavior by setting the <code>waitForAnimations</code> option to <code>true</code>.

    .-p--3(slot="example")
      .chi-form__item
        label(class="chi-label", for="range03") Range label
        .chi-input__wrapper.-d--flex
          span.-text.-mr--2 200GB
          input(type="range", class="chi-range-slider", id="range03")
          span.-text.-ml--2 5TB
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
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="range03">Range label</label>
  <div class="chi-input__wrapper -d--flex">
    <span class="-text">200GB</span>
    <input class="chi-range-slider -mx--2" type="range" id="range03">
    <span class="-text">5TB</span>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range03'));<\/script>`,
      },
    };
  },
})
export default class WaitAnimations extends Vue {}
</script>
