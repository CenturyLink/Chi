<template lang="pug">
fragment
  <AnchorTitle title="Align self" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#align-self`" />
  p.-text Use align-self utilities to alter the alignment of individual flex items on the cross axis.

  <AlignSelfStart />
  <AlignSelfEnd />
  <AlignSelfCenter />
  <AlignSelfBaseline />
  <StretchBrowserDefault />

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

import AlignSelfStart from './_align-self-start.vue';
import AlignSelfEnd from './_align-self-end.vue';
import AlignSelfCenter from './_align-self-center.vue';
import AlignSelfBaseline from './_align-self-baseline.vue';
import StretchBrowserDefault from './_align-self-stretch-browser-default.vue';

@Component({
  components: {
    AlignSelfStart,
    AlignSelfEnd,
    AlignSelfCenter,
    AlignSelfBaseline,
    StretchBrowserDefault
  }
})
export default class AlignSelf extends Vue {}
</script>
