<template lang="pug">
  .chi-grid__container.-pt--3
    <UserState />
    <ApplicationState />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserState from './_userState.vue';
import ApplicationState from './_applicationState.vue';

@Component({
  components: {
    UserState,
    ApplicationState
  }
})
export default class Examples extends Vue {}
</script>
