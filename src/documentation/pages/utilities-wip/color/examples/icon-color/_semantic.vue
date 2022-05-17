<template lang="pug">
  ComponentExample(title="Semantic" :id="id" :padding="'-p--0'" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description")
      | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
      | validation, user status, application state and more. Use green (success) for positive, blue (info)
      | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
      | for neutral. Semantic colors should never be used for decorative purposes.
    .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center(slot="example")
        i.chi-icon.icon-atom.-md.-m--1(v-for="color in colors" :class="`-${color}`", aria-hidden='true')
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'semantic-example-icon-color',
      colors: [
        'icon--success',
        'icon--info',
        'icon--warning',
        'icon--danger',
        'icon--muted'
      ],
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
      this.$data.codeSnippets += `\n<i class="chi-icon icon-atom -md -${color}" aria-hidden="true"></i>`;
    });
  }
}
</script>
