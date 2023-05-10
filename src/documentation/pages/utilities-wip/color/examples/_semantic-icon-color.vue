<template lang="pug">
  <ComponentExample title="Semantic" id="semantic-icon-color" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0">
    p.-text(slot="example-description")
      | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
      | validation, user status, application state and more. Use green (success) for positive, blue (info)
      | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
      | for neutral. Semantic colors should never be used for decorative purposes.
    <Wrapper slot="example">
      .chi-grid.-no-gutter
        .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
          i(v-for="icon in icons" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
    </Wrapper>
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
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      icons: ['icon--success', 'icon--info', 'icon--warning', 'icon--danger', 'icon--muted'],
      codeSnippets: {
        htmlblueprint: `<i class="chi-icon icon-atom -md -icon--success" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--info" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--warning" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--danger" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--muted" aria-hidden="true"></i>`
      }
    };
  }
})
export default class SemanticIconColor extends Vue {}
</script>
