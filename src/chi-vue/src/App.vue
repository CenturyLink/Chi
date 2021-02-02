<template>
  <div id="app">
    <div class="-p--4">
      <PaginationView />
      <DrawerView />
      <TooltipView />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PaginationView from './views/PaginationView.vue';
import DrawerView from './views/DrawerView.vue';
import TooltipView from './views/TooltipView.vue';

@Component({
  components: {
    PaginationView,
    DrawerView,
    TooltipView,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
