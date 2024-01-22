<template>
  <h2>Drawer</h2>
  <h3>Left Drawer</h3>
  <div class="-position--relative -w--100" style="height: 300px">
    <Drawer class="-position--absolute" :active="true" position="left">
      <div class="-px--2">Left positioned Drawer content here</div>
    </Drawer>
  </div>
  <h3>Right Drawer</h3>
  <div class="-position--relative -w--100" style="height: 300px">
    <Drawer class="-position--absolute" :active="true" position="right">
      <div class="-px--2">Right positioned Drawer content here</div>
    </Drawer>
  </div>
  <h3>Top Drawer</h3>
  <div class="-position--relative -w--100" style="height: 500px">
    <Drawer class="-position--absolute" :active="true" position="top">
      <div class="-px--2">Top positioned Drawer content here</div>
    </Drawer>
  </div>
  <h3>Bottom Drawer</h3>
  <div class="-position--relative -w--100" style="height: 500px">
    <Drawer class="-position--absolute" :active="true" position="bottom">
      <div class="-px--2">Bottom positioned Drawer content here</div>
    </Drawer>
  </div>
  <h3>Drawer Title</h3>
  <div class="-position--relative -w--100" style="height: 300px">
    <Drawer class="-position--absolute" :active="true" position="left" title="Drawer title here">
      <div class="-px--2">Drawer content here</div>
    </Drawer>
  </div>
  <h3>Non-closable</h3>
  <div class="-position--relative -w--100" style="height: 300px">
    <Drawer class="-position--absolute" :active="true" position="left" :nonClosable="true">
      <div class="-px--2">Drawer content here</div>
    </Drawer>
  </div>
  <h3>No Header</h3>
  <div class="-position--relative -w--100" style="height: 300px">
    <Drawer class="-position--absolute" :active="true" position="left" :noHeader="true">
      <div class="-px--2">Drawer content here</div>
    </Drawer>
  </div>
  <h3>Show / Hide Drawer</h3>
  <div class="-position--relative -w--100" style="height: 300px">
    <chi-button @click.stop="toggleDrawer">Click me to open the Drawer</chi-button>
    <Drawer
      @chiDrawerHide="() => (drawerActive = false)"
      @chiDrawerClickOutside="() => (drawerActive = false)"
      class="-position--absolute"
      :active="drawerActive"
      position="left"
      style="top: 50px"
    >
      <div class="-p--2">Drawer content here</div>
    </Drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Drawer from '@/components/drawer/drawer';

const drawerActive = ref(false);

const toggleDrawer = () => {
  drawerActive.value = !drawerActive.value;
};
</script>
