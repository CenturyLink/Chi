<template lang="pug">
  div
    <TitleBar title="State" description="A collection of templates built with Badges, Icons, and Spinners for
    |  presenting the state of users, applications, and more." />
    .chi-grid__container.-pt--3
        <UserState />
        <ApplicationState />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserState from './_userState.vue';
import ApplicationState from './_applicationState.vue';

@Component({
  head() {
    return {
      title: 'Chi - State'
    }
  },
  components: {
    UserState,
    ApplicationState
  }
})
export default class State extends Vue {}
</script>
