<template lang="pug">
  div
    h2(class="-anchor" :id="id") Justify content
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    
    p.-text Use justify-content utilities to alter the alignment of flex items on the main axis.
    
    JustifyContentExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JustifyContentExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'justify-content',
      sizes: ['sm', 'md', 'lg', 'xl'],
      justifyContents: ['start', 'end', 'center', 'between', 'around'],
      responsiveJustifies: []
    };
  },
  components: {
    JustifyContentExamples
  }
})
export default class JustifyContent extends Vue {
  created() {
    this._generateBreakpoints();
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.justifyContents.forEach((justify: string) => {
        this.$data.responsiveJustifies.push(`-justify-content-${size}--${justify}`);
      });
    });
  }
}
</script>
