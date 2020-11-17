<template>
  <div id="tooltipview">
    <h2>Tooltip</h2>
    <h3>Base</h3>
    <div class="-p--3">
      <div class="chi-grid">
        <div class="chi-col -w--12">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip message="Top Tooltip message">
              <button class="chi-button">Top</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--6">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Left Tooltip message" position="left">
              <button class="chi-button">Left</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--6">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Right Tooltip message" position="right">
              <button class="chi-button">Right</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--12">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Bottom Tooltip message" position="bottom">
              <button class="chi-button">Bottom</button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
    <h3 class="-mt--10">Light</h3>
    <div class="-p--3 -bg--black">
      <div class="chi-grid">
        <div class="chi-col -w--12">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip message="Top Tooltip message" color="light">
              <button class="chi-button -outline -light">Top</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--6">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Left Tooltip message" position="left" color="light">
              <button class="chi-button -outline -light">Left</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--6">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Right Tooltip message" position="right" color="light">
              <button class="chi-button -outline -light">Right</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--12">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Bottom Tooltip message" position="bottom" color="light">
              <button class="chi-button -outline -light">Bottom</button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tooltip from '../components/tooltip/tooltip';

@Component({
  components: {
    Tooltip
  }
})
export default class TooltipView extends Vue {
}
</script>

<style lang="scss"></style>
