<template lang="pug">
fragment
  <AnchorTitle title="Align self" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#align-self`" />
  p.-text Use align-self utilities to alter the alignment of individual flex items on the cross axis.

  fragment(v-for="(type, index) in types", :key="index")
    <AlignSelfExample :title="type.title" :id="type.id" />

  p.-text Target specific breakpoints with Align self responsive classes.
  ul.-mb--3
    each type in ['start', 'end', 'center', 'baseline', 'stretch']
      li
        code=`-align-self--${type}`
    each size in ['sm', 'md', 'lg', 'xl']
      each type in ['start', 'end', 'center', 'baseline', 'stretch']
        li
          code=`-align-self-${size}--${type}`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import AlignSelfExample from './examples/_align-self-example.vue';

@Component({
  data() {
    return {
      types: [
        { id: 'start', title: 'Start' },
        { id: 'end', title: 'End' },
        { id: 'center', title: 'Center' },
        { id: 'baseline', title: 'Baseline' },
        { id: 'stretch', title: 'Stretch (Browser default)' }
      ]
    };
  },
  components: {
    AlignSelfExample
  }
})
export default class AlignSelf extends Vue {}
</script>
