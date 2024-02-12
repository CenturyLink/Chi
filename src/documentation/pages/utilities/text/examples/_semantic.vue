<template lang="pug">
  <ComponentExample padding="-p--0" title="Semantic" id="text-semantic" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
        | validation, user status, application state and more. Use green (success) for positive, blue (info)
        | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
        | for neutral. Semantic colors should never be used for decorative purposes.
    template(#example)
      .chi-grid.-no-gutter
        .chi-col.-w--12.-p--1.-d--flex.-justify-content--center.-flex--wrap
            .-p--1.-p-sm--2.-text--center(v-for="className in classes")
              p.-text(:class="`-text--${ className }`") -text--{{className}}
    template(#code-htmlblueprint)
       Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Semantic extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  classes = ['success', 'info', 'danger', 'warning', 'muted'];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.classes.map((className: string) => `<p class="-text--${className}">-text--${className}</p>`).join('\n');
  }
}
</script>
