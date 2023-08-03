<template lang="pug">
  <ComponentExample title="Semantic" id="semantic-icon-color" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0">
    p.-text(slot="example-description")
      | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
      | validation, user status, application state and more. Use green (success) for positive, blue (info)
      | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
      | for neutral. Semantic colors should never be used for decorative purposes.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
        i(v-for="icon in icons" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
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
      ]
    };
  }
})
export default class SemanticIconColor extends Vue {
  icons = ['icon--success', 'icon--info', 'icon--warning', 'icon--danger', 'icon--muted']

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.icons.map(item => {
      return (
        `<i class="chi-icon icon-atom -md -${item}" aria-hidden="true"></i>`
      )
    }).join('\n');
  }
}
</script>
