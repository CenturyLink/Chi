<template lang="pug">
  ComponentExample(title="Semantic" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description")
      | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
      | validation, user status, application state and more. Use green (success) for positive, blue (info)
      | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
      | for neutral. Semantic colors should never be used for decorative purposes.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-p--1.-d--flex.-justify-content--center.-flex--wrap
        .-p--1.-p-sm--2.-text--center(v-for="color in colors")
          p.-text(:class="`-text--${color}`") -text--{{ color }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'semantic',
      colors: ['success', 'info', 'danger', 'warning', 'muted'],
      codeSnippets: ``
    };
  }
})
export default class Semantic extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.colors.forEach((color: string) => {
      this.$data.codeSnippets += `<p class="-text--${color}">-text--${color}</p>\n`;
    });
  }
}
</script>
