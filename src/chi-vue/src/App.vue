<template>
  <div id="app">
    <div class="-mx--2">
      <PaginationView />
      <DrawerView />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PaginationView from './views/PaginationView.vue';
import DrawerView from './views/DrawerView.vue';

@Component({
  components: {
    PaginationView,
    DrawerView
  }
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
