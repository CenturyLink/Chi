<template lang="pug">
  div
    ComponentExample(v-for="wrap in wraps" :key="wrap" :title="setTitle(wrap)" :padding="'-p--3 -pb--1'" :id="`wrap-${wrap}`" :codeSnippetWithoutTabs="true")
      .-mb--2.-d--flex.-align-items--start.-show--example.-bg--grey-10(slot="example" :class="`-flex--${wrap}`" :style="wrap === 'nowrap' ? 'height:116px;width:224px;' : 'width:224px;'")
        .-text.-p--2(v-for="item in Array(4).fill('Item')") {{ item }}
      pre(class="language-html" :slot="`code-snippet-wrap-${wrap}`")
        code(v-highlight="setCodeSnippets(wrap)" class="html")
    
    p.-text Target specific breakpoints with Wrap responsive classes.
    ul.-mb--3
      li(v-for="wrap in wraps")
        code -flex--{{ wrap }}
      li(v-for="responsiveWrap in responsiveWraps")
        code {{ responsiveWrap }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      wraps: ['nowrap', 'wrap', 'wrap-reverse'],
      sizes: ['sm', 'md', 'lg', 'xl'],
      responsiveWraps: []
    };
  }
})
export default class WrapExamples extends Vue {
  created() {
    this._generateBreakpoints();
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.wraps.forEach((wrap: string) => {
        this.$data.responsiveWraps.push(`-flex-${size}--${wrap}`);
      });
    });
  }

  setCodeSnippets(wrap: string) {
    return `<div class="-d--flex -align-items--start -flex--${wrap}" style="${
      wrap === 'nowrap' ? 'height:116px;width:224px;' : 'width:224px;'
    }">
  <div>Item</div>
</div>`;
  }

  setTitle(wrap: string) {
    if (wrap === 'nowrap') return 'No Wrap (default)';
    else if (wrap.includes('reverse')) {
      const title =
        wrap.split('-')[0] +
        ' ' +
        wrap
          .split('-')[1]
          .charAt(0)
          .toUpperCase() +
        wrap.split('-')[1].slice(1);

      return title.charAt(0).toUpperCase() + title.slice(1);
    }
    
    return wrap.charAt(0).toUpperCase() + wrap.slice(1);
  }
}
</script>
