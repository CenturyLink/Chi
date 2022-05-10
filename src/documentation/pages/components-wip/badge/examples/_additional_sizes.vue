<template lang="pug">
  <Wrapper>
    h3 Additional Sizes
    <SmallSize />
    <ExtraSmallSize />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SmallSize from './_small_size.vue';
import ExtraSmallSize from './_extra_small_size.vue';

@Component({
  components: {
    SmallSize,
    ExtraSmallSize
  }
})
export default class AdditionalSizes extends Vue {}
</script>
