<template lang="pug">
<ComponentExample title="Semantic" id="semantic-icon-color" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0">
  template(#example-description)
    p.-text
      | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
      | validation, user status, application state and more. Use green (success) for positive, blue (info)
      | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
      | for neutral. Semantic colors should never be used for decorative purposes.
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
        i(v-for="icon in icons" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SemanticIconColor extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  icons = ['icon--success', 'icon--info', 'icon--warning', 'icon--danger', 'icon--muted'];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.icons
      .map((item) => {
        return `<i class="chi-icon icon-atom -md -${item}" aria-hidden="true"></i>`;
      })
      .join('\n');
  }
}
</script>
