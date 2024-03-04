<template lang="pug">
h3 Additional Sizes
<SmallSize />
<ExtraSmallSize />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import SmallSize from './_small_size.vue';
import ExtraSmallSize from './_extra_small_size.vue';

@NuxtComponent({
  components: {
    SmallSize,
    ExtraSmallSize,
  },
})
export default class AdditionalSizes extends Vue {}
</script>
