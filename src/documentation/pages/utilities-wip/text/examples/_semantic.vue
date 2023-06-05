<template lang="pug">
  <ComponentExample padding="-p--0" title="Semantic" id="text-semantic" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
      | validation, user status, application state and more. Use green (success) for positive, blue (info)
      | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
      | for neutral. Semantic colors should never be used for decorative purposes.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-p--1.-d--flex.-justify-content--center.-flex--wrap
          div.-p--1.-p-sm--2.-text--center(v-for="_class in classes")
            p.-text(:class="`-text--${ _class }`")
              | {{`-text--${ _class }`}}
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
      classes: ['success', 'info', 'danger', 'warning', 'muted'],
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
    };
  },
})
export default class Semantic extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: '<p class="-text--success">-text--success</p>\n' +
        '<p class="-text--info">-text--info</p>\n' +
        '<p class="-text--warning">-text--warning</p>\n' +
        '<p class="-text--danger">-text--danger</p>\n' +
        '<p class="-text--muted">-text--muted</p>'
    };
  }
}
</script>
