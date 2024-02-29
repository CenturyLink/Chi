<template lang="pug">
  .chi-grid__container.-pt--3
    <UserState />
    <ApplicationState />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import UserState from './_userState.vue';
import ApplicationState from './_applicationState.vue';

@NuxtComponent({
  components: {
    UserState,
    ApplicationState,
  },
})
export default class Examples extends Vue {}
</script>
