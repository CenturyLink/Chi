<template lang="pug">
fragment
  <AnchorTitle title="Align content" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#align-content`" />
  p.-text Use align-content utilities on flexbox containers to alter the alignment of flex items <strong>together</strong> on the cross axis.

  <AlignContentStart />
  <AlignContentEnd />
  <AlignContentCenter />
  <AlignContentAround />
  <AlignContentBetween />
  <AlignContentStretch />

  p.-text Target specific breakpoints with Align content responsive classes.
  ul.-mb--3
    each type in ['start', 'end', 'center', 'around', 'between', 'stretch']
      li
        code=`-align-content--${type}`
    each size in ['sm', 'md', 'lg', 'xl']
      each type in ['start', 'end', 'center', 'around', 'between', 'stretch']
        li
          code=`-align-content-${size}--${type}`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlignContentStart from './_align-content-start.vue';
import AlignContentEnd from './_align-content-end.vue';
import AlignContentCenter from './_align-content-center.vue';
import AlignContentAround from './_align-content-around.vue';
import AlignContentBetween from './_align-content-between.vue';
import AlignContentStretch from './_align-content-stretch.vue';

@Component({
  components: {
    AlignContentStart,
    AlignContentEnd,
    AlignContentCenter,
    AlignContentAround,
    AlignContentBetween,
    AlignContentStretch
  }
})
export default class AlignContent extends Vue {}
</script>
