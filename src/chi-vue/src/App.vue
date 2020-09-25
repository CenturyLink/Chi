<template>
  <div id="app">
    <PaginationView />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PaginationView from './views/PaginationView.vue';

@Component({
  components: {
    PaginationView
  }
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
