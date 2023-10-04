<template lang="pug">
  .chi-grid__container.-pt--3
    <SensoryCharacteristics />
    <UseOfColor />
    <Contrast />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SensoryCharacteristics from './_sensory_characteristics.vue';
import UseOfColor from './_use_of_color.vue';
import Contrast from './_contrast.vue';

@Component({
  components: {
    SensoryCharacteristics,
    UseOfColor,
    Contrast,
  }
})
export default class Examples extends Vue {}
</script>
