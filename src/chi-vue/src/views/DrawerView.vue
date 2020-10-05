<template>
  <div id="drawer">
    <h2 class="-ml--2">Drawer</h2>
    <h3>Left Drawer</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left" :preventAutoHide="true">
        <div class="-px--2">Left positioned Drawer content here</div>
      </Drawer>
    </div>
    <h3>Right Drawer</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="right" :preventAutoHide="true">
        <div class="-px--2">Right positioned Drawer content here</div>
      </Drawer>
    </div>
    <h3>Top Drawer</h3>
    <div class="-position--relative -w--100" style="height: 500px;">
      <Drawer class="-position--absolute" :active="true" position="top" :preventAutoHide="true">
        <div class="-px--2">Top positioned Drawer content here</div>
      </Drawer>
    </div>
    <h3>Bottom Drawer</h3>
    <div class="-position--relative -w--100" style="height: 500px;">
      <Drawer class="-position--absolute" :active="true" position="bottom" :preventAutoHide="true">
        <div class="-px--2">Bottom positioned Drawer content here</div>
      </Drawer>
    </div>
    <h3>Drawer Title</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left" title="Drawer title here" :preventAutoHide="true">
        <div class="-px--2">Drawer content here</div>
      </Drawer>
    </div>
    <h3>Non-closable</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left" :nonClosable="true" :preventAutoHide="true">
        <div class="-px--2">Drawer content here</div>
      </Drawer>
    </div>
    <h3>No Header</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left" :noHeader="true" :preventAutoHide="true">
        <div class="-px--2">Drawer content here</div>
      </Drawer>
    </div>
    <h3>Portal</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left" title="Drawer title here" :portal="true" :preventAutoHide="true">
        <div class="-p--2">Drawer content here</div>
      </Drawer>
    </div>
    <h3>Show Drawer</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <button class="chi-button" @click="$refs.openOnClick.show()">Click me to open the Drawer</button>
      <Drawer class="-position--absolute" :active="false" position="left" ref="openOnClick" :preventAutoHide="true">
        <div class="-p--2">Drawer content here</div>
      </Drawer>
    </div>
    <h3>Auto Hide</h3>
    <div class="-position--relative -w--100" style="height: 300px;">
      <Drawer class="-position--absolute" :active="true" position="left">
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
}
</script>

<style lang="scss"></style>
