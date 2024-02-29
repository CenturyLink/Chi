<template lang="pug">
<TitleBar title="Error 404" description="Basic 404 level error page template. Indicates a client error, such as a misspelled URL." />
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
export default class Error404 extends Vue {}
</script>
