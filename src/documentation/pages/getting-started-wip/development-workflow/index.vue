<template lang="pug">
<TitleBar title="Development workflow" />
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
export default class DevelopmentWorkflow extends Vue {}
</script>
