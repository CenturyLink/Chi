<template lang="pug">
  ComponentExample(title="Semantic" :id="id" :titleSize="'h4'" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") 
      | Use semantic border colors to communicate meaning to users. Use green (success) for positive, blue (info) for informative,
      | red (danger) for negative, and yellow (warning) for needs attention.
    .chi-grid.-no-gutter.-text.-text--center(slot="example")
      .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="color in colors")
        .-m--1.-p--1.-py--5.-b--1.-text--capitalize(:class="`-b--${color} ${color.includes('light') ? `-bg--${color}er` : ''}`") {{ color.replace('-', ' ') }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'semantic-example-color-border',
      colors: [
        'success',
        'success-light',
        'info',
        'info-light',
        'danger',
        'danger-light',
        'warning',
        'warning-light'
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
      this.$data.codeSnippets += `\n<div class="-b--1 -b--${color}"></div>`;
    });
  }
}
</script>
