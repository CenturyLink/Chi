<template lang="pug">
<TitleBar title="Border" description="Use shorthand border utility classes to control border, border width and border color on elements." />
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
export default class Border extends Vue {}
</script>
