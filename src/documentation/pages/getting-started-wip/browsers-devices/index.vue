<template lang="pug">
<TitleBar title="Browser support" />
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
export default class BrowsersDevices extends Vue {}
</script>
