<template>
  <div id="drawer">
    <h2 class="-ml--2">Drawer</h2>
    <h3>Left Drawer</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left">
        <div class="-px--2">Left positioned Drawer content here</div>
      </Drawer>
    </div>
    <h3>Right Drawer</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="right">
        <div class="-px--2">Right positioned Drawer content here</div>
      </Drawer>
    </div>
    <h3>Top Drawer</h3>
    <div class="-position--relative -w--100" style="height: 500px;">
      <Drawer class="-position--absolute" :active="true" position="top">
        <div class="-px--2">Top positioned Drawer content here</div>
      </Drawer>
    </div>
    <h3>Bottom Drawer</h3>
    <div class="-position--relative -w--100" style="height: 500px;">
      <Drawer class="-position--absolute" :active="true" position="bottom">
        <div class="-px--2">Bottom positioned Drawer content here</div>
      </Drawer>
    </div>
    <h3>Drawer Title</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left" title="Drawer title here">
        <div class="-px--2">Drawer content here</div>
      </Drawer>
    </div>
    <h3>Non-closable</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left" :nonClosable="true">
        <div class="-px--2">Drawer content here</div>
      </Drawer>
    </div>
    <h3>No Header</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left" :noHeader="true">
        <div class="-px--2">Drawer content here</div>
      </Drawer>
    </div>
    <h3>Portal</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left" title="Drawer title here" :portal="true">
        <div class="-p--2">Drawer content here</div>
      </Drawer>
    </div>
    <h3>Show / Hide Drawer</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <button class="chi-button" @click="() => toggleDrawer()">Click me to open the Drawer</button>
      <Drawer
        @chiDrawerHide="() => this.drawerActive = false"
        @chiDrawerClickOutside="() => this.drawerActive = false"
        class="-position--absolute"
        :active="this.drawerActive"
        position="left"

        style="top: 50px">
        <div class="-p--2">Drawer content here</div>
      </Drawer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Drawer from '../components/drawer/drawer';

@Component({
  components: {
    Drawer
  }
})

export default class DrawerView extends Vue {
  drawerActive = false;

  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }
}
</script>

<style lang="scss"></style>
