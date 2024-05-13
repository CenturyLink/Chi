<template lang="pug">
h2 Examples

BaseExample
<Required />
<Sizes />
<Associate />
<Help />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Required from './_required.vue';
import Sizes from './_sizes.vue';
import Associate from './_associate.vue';
import Help from './_help.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    Required,
    Sizes,
    Associate,
    Help,
  },
})
export default class Examples extends Vue {}
</script>
