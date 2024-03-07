<template lang="pug">
<TitleBar title="Links and forms" />
<Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  components: {
    Examples,
  },
})
export default class LinksForms extends Vue {}
</script>
