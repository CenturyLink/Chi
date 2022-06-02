<template lang="pug">
  div
    <TitleBar title="State" description="A collection of templates built with Badges, Icons, and Spinners for presenting the state of users, applications, and more." />
      section(class="chi-grid__container" padding="-pt--3")
        <UserStates />
        <ApplicationStates />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserStates from './examples/_user-states.vue';
import ApplicationStates from './examples/_application-states.vue';
@Component({
  components: {
    UserStates,
    ApplicationStates
  },
})
export default class State extends Vue {}
</script>
