<template lang="pug">
  .chi-grid__container.-pt--3
    <SupportedValues :indexes="indexes" />
    <ZIndexExample :indexes="indexes" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SupportedValues from './_supportedValues.vue';
import ZIndexExample from './_zindexexample.vue';

@Component({
  components: {
    SupportedValues,
    ZIndexExample
  },
  data: () => {
    return {
      indexes: [
        {key: '0', color: ' -bg--black', margin: 1, text: 'Initial value'},
        {key: '1', color: '', margin: 0, text: 'Prominent elements (E.g. focused buttons)'},
        {key: '10', color: '-bg--danger', margin: 2, text: 'Dropdowns'},
        {key: '20', color: '-bg--warning', margin: 3, text: 'Fixed elements (E.g. drawer)'},
        {key: '30', color: '-bg--success', margin: 4, text: 'Backdrops'},
        {key: '40', color: '-bg--secondary', margin: 5, text: 'Fixed elements with backdrop (E.g. drawer with backdrop)'},
        {key: '50', color: '-bg--grey-20', margin: 6, text: 'Modals'},
        {key: '60', color: '-bg--grey-10', margin: 7, text: 'Popovers'},
        {key: '70', color: '-bg--primary', margin: 8, text: 'Tooltips'},
        {key: 'auto', color: '', margin: 0, text: '-'},
      ],
    }
  }
})
export default class Examples extends Vue {}
</script>
