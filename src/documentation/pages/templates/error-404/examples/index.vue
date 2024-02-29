<template lang="pug">
.chi-grid__container.-pt--3
  <Error />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Error from './_error.vue';

@NuxtComponent({
  components: {
    Error,
  },
})
export default class Examples extends Vue {}
</script>
