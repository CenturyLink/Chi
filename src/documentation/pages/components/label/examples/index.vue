<template lang="pug">
h2 Examples

BaseExample
<Required />
<Sizes />
<Associate />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Required from './_required.vue';
import Sizes from './_sizes.vue';
import Associate from './_associate.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    Required,
    Sizes,
    Associate,
  },
})
export default class Examples extends Vue {}
</script>
