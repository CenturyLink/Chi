<template lang="pug">
fragment
  <AnchorTitle title="Display" tag="h2" id="display" />
  p.-text To enable flex, apply a flex display utility class. This will transform your element into a flexbox container and its direct children into flex items.

  <FlexboxContainer />
  <InlineFlexboxContainer />

  p.-text Target specific breakpoints with Display responsive classes.
  ul.-mb--3
    li
      code -d--flex
    li
      code -d--inline-flex
    each type in ['sm', 'md', 'lg', 'xl']
      li
        code=`-d-${type}--flex`
      li
        code=`-d-${type}--inline-flex`

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import FlexboxContainer from './examples/_flexbox-container.vue';
import InlineFlexboxContainer from './examples/_inline-flexbox-container.vue';

@Component({
  components: {
    FlexboxContainer,
    InlineFlexboxContainer
  }
})
export default class Display extends Vue {}
</script>
