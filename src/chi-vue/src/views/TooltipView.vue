<template>
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
          <Tooltip class="-mt--3" message="Bottom Tooltip message" position="bottom" :color="color">
            <button class="chi-button -outline -light">Bottom</button>
          </Tooltip>
        </div>
      </div>
    </div>
  </div>

  <div class="tooltip-update -py--5">
    <button class="chi-button" @click="toggleColor">Toggle Color</button>
    <select class="chi-button -ml--1" @change="(e) => changePosition(e)">
      <option value="top">Top</option>
      <option value="right">Right</option>
      <option value="bottom">Bottom</option>
      <option value="left">Left</option>
    </select>
    <Tooltip class="-mt--3 -w--25" message="Dynamic Tooltip message" :position="position" :color="color">
      <button class="chi-button -w--100" selected>Dynamic tooltip</button>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Tooltip from '../components/tooltip/tooltip';

const color = ref('light');
const position = ref('top');

const toggleColor = () => {
  color.value = color.value === 'light' ? 'base' : 'light';
};

const changePosition = (e) => {
  position.value = e.target.value;
};
</script>

<style lang="scss"></style>
