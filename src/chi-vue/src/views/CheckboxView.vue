<template>
  <h2>Checkbox</h2>
  <h3>Base</h3>
  <Checkbox @chiChange="(ev) => chiChange(ev)" id="example__checkbox_base" name="example__checkbox_base" />
  <h3>Label</h3>
  <Checkbox id="example__checkbox_label" label="Checkbox label" />
  <h3>Selected: true</h3>
  <Checkbox id="example__checkbox_selected" :selected="true" />
  <h3>Selected: indeterminate</h3>
  <Checkbox id="example__checkbox_indeterminate" :selected="'indeterminate'" />
  <h3>Disabled</h3>
  <Checkbox id="example__checkbox_disabled" :disabled="true" />
</template>

<script lang="ts" setup>
import Checkbox from '@/components/checkbox/Checkbox';

const chiChange = (ev) => {
  console.log(ev);
};
</script>
