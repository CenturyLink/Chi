<template lang="pug">
  <ComponentExample title="Semantic" padding="-p--0" titleSize="h4" id="color-semantic" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use semantic colors to communicate meaning to users. Use green (success) for positive,
      | red (danger) for negative, yellow (warning) for needs attention, and grey (muted) for neutral.
      | Semantic colors should never be used for decorative purposes.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-d--flex.-flex--row.-justify-content--center.-flex--wrap
        .-p--2.-text--center(v-for="color in ['success', 'warning', 'danger', 'muted']")
          chi-spinner(:color="color", class='-m--3', size='md')
    <Wrapper slot="code-webcomponent">
      .chi-tab__description
        | Use the <code>color</code> attribute to change a spinners color.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        | Use <a href="../../utilities/color">icon color utilities</a> such as <code>-icon--success</code>
        | and <code>-icon--danger</code> to change the color of any spinner.
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
        webcomponent: `<chi-spinner color="success"></chi-spinner>
<chi-spinner color="warning"></chi-spinner>
<chi-spinner color="danger"></chi-spinner>
<chi-spinner color="muted"></chi-spinner>`,
        htmlblueprint: `<svg class="chi-spinner -icon--success" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--warning" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--danger" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--muted" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>`
      }
    };
  }
})
export default class ColorSemantic extends Vue {}
</script>
