<template lang="pug">
h2 Examples

<Text />
<Disabled />
<Sizes />

</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Text from './_text.vue';
import Disabled from './_disabled.vue';
import Sizes from './_sizes.vue';

@NuxtComponent({
  components: {
    Text,
    Disabled,
    Sizes,
  },
})
export default class Examples extends Vue {}
</script>
