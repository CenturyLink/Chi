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
        {key: '0', value:    {color: ' -bg--black',    margin: 1, text: 'Initial value'},},
        {key: '1', value:    {color: '',              margin: 0, text: 'Prominent elements (E.g. focused buttons)'},},
        {key: '10', value:   {color: '-bg--danger',   margin: 2, text: 'Dropdowns'},},
        {key: '20', value:   {color: '-bg--warning',  margin: 3, text: 'Fixed elements (E.g. drawer)'},},
        {key: '30', value:   {color: '-bg--success',  margin: 4, text: 'Backdrops'},},
        {key: '40', value:   {color: '-bg--secondary',margin: 5, text: 'Fixed elements with backdrop (E.g. drawer with backdrop)'},},
        {key: '50', value:   {color: '-bg--grey-20',  margin: 6, text: 'Modals'},},
        {key: '60', value:    {color: '-bg--grey-10',  margin: 7, text: 'Popovers'},},
        {key: '70', value:   {color: '-bg--primary',  margin: 8, text: 'Tooltips'},},
        {key: 'auto', value: {color: '',              margin: 0, text: '-'}},
      ],
    }
  }
})
export default class ZIndexExamples extends Vue {}
</script>
