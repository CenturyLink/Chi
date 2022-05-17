<template lang="pug">
  ComponentExample(title="Breakpoints" :padding="'-p--2'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Target specific breakpoints with responsive classes.
    .chi-grid.-text.-no-gutter.-text--center(slot="example")
      .chi-col.-w--6(v-for="item, index in Array(2).fill(0)" :class="`${index === 0 ? '-d--flex' : ''}`")
        .-d--flex.-flex--grow1.-align-items--center.-justify-content--center.-m--1.-p--1.-py--5.-bg--grey-10(:class="breakpoints[index]") 
          template(v-if="index === 0") -bx--0 -by--4<br>-bx-lg--4 -by-lg--0
          template(v-else) -b--0 -b-sm--1<br>-b-md--2 -b-lg--3<br>-b-xl--4
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'breakpoints-example-border',
      breakpoints: [
        '-bx--0 -by--4 -bx-lg--4 -by-lg--0',
        '-b--0 -b-sm--1 -b-md--2 -b-lg--3 -b-xl--4'
      ],
      codeSnippets: ``
    };
  }
})
export default class Breakpoints extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.breakpoints.forEach((breakpoint: string) => {
      this.$data.codeSnippets += `<div class="${breakpoint}"></div>\n`;
    });
  }
}
</script>
