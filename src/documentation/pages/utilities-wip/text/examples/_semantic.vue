<template lang="pug">
  <ComponentExample padding="-p--0" title="Semantic" id="text-semantic" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
      | validation, user status, application state and more. Use green (success) for positive, blue (info)
      | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
      | for neutral. Semantic colors should never be used for decorative purposes.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-p--1.-d--flex.-justify-content--center.-flex--wrap
          .-p--1.-p-sm--2.-text--center(v-for="className in classes")
            p.-text(:class="`-text--${ className }`") -text--{{className}}
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
export default class Semantic extends Vue {
  classes = ['success', 'info', 'danger', 'warning', 'muted']

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.classes
      .map((className: string) => `<p class="-text--${ className }">-text--${ className }</p>`)
      .join('\n');
  }
}
</script>
