<template lang="pug">
  div
    <TitleBar title="State" description="A collection of templates built with Badges, Icons, and Spinners for presenting the state of users, applications, and more." />
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - State',
    };
  },
  components: {
    Examples,
  },
})
export default class State extends Vue {}
</script>
