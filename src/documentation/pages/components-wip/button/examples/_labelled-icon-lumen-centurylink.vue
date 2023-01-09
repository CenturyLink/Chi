<template lang="pug">
  <ComponentExample titleSize="h3" title="Labeled icon buttons" id="labeled-icon-lumen-centurylink" :tabs="exampleTabs">
    <Wrapper slot="example">
      chi-button
        chi-icon(icon='atom')
        span Button
      chi-button.-mr--2.-ml--2()
        span Button
        chi-icon(icon='atom')
      chi-button
        chi-icon(icon='atom')
        span Button
        chi-icon(icon='atom')
    </Wrapper>
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
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
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- left aligned -->
<chi-button>
  <chi-icon icon="atom"></chi-icon>
  <span>Button</span>
</chi-button>

<!-- right aligned -->
<chi-button>
  <span>Button</span>
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- both sides -->
<chi-button>
  <chi-icon icon="atom"></chi-icon>
  <span>Button</span>
  <chi-icon icon="atom"></chi-icon>
</chi-button>`,
        htmlblueprint: `<!-- left aligned -->
<button class="chi-button">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Button</span>
  </div>
</button>

<!-- right aligned -->
<button class="chi-button">
  <div class="chi-button__content">
    <span>Button</span>
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- both sides -->
<button class="chi-button">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Button</span>
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>`,
      },
    };
  },
})
export default class LabeledIconLumenCenturyLink extends Vue {}
</script>
