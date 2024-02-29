<template lang="pug">
<TitleBar title="Design tokens" description="Design tokens are used in place of hard-coded values to maintain consistent and scalable design system development." />
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
export default class DesignTokens extends Vue {}
</script>
