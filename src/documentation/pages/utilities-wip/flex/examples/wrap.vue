<template lang="pug">
fragment
  <AnchorTitle title="Wrap" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#wrap`" />
  p.-text Use wrap utilities to define how flex items wrap in a flex container.

  <NoWrapDefault />
  <WrapDefault />
  <WrapReverse />

  p.-text Target specific breakpoints with Wrap responsive classes.
  ul.-mb--3
    each type in ['nowrap', 'wrap', 'wrap-reverse']
      li
        code=`-flex--${type}`
    each size in ['sm', 'md', 'lg', 'xl']
      each type in ['nowrap', 'wrap', 'wrap-reverse']
        li
          code=`-flex-${size}--${type}`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import NoWrapDefault from './_no-wrap.vue';
import WrapDefault from './_wrap.vue';
import WrapReverse from './_wrap-reverse.vue';

@Component({
  components: {
    NoWrapDefault,
    WrapDefault,
    WrapReverse
  }
})
export default class Wrap extends Vue {}
</script>
