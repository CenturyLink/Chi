<template lang="pug">
  ComponentExample(title="Examples" :id="id" :padding="'-p--3 -pb--1'" :codeSnippetWithoutTabs="true")
    template(slot="example")
      .-mb--2.-d--flex.-show--example.-bg--grey-10(v-for="flex in types")
        .-text.-p--2(:class="flex") {{ flex }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'flex-basis-examples',
      types: [
        '-flex-basis--25',
        '-flex-basis--50',
        '-flex-basis-md--75',
        '-flex-basis-xl--50'
      ],
      codeSnippets: ``
    };
  }
})
export default class FlexBasisExample extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.types.forEach((item: string) => {
      let comment =
        item.includes('md') || item.includes('xl')
          ? `<!-- flex-basis ${item.substr(-2)}% from ${
              item.split('-')[3]
            } -->\n`
          : `<!-- flex-basis ${item.substr(-2)}% on all breakpoints -->\n`;

      this.$data.codeSnippets += `${comment}<div class="-d--flex">\n  <div class="${item}"></div>\n</div>\n`;
    });
  }
}
</script>
