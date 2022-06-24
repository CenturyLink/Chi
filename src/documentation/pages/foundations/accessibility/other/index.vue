<template lang="pug">
  div
    <TitleBar title="Images" />
    .chi-grid__container.-pt--3
      template(v-for="imagesUsageType in $data.imagesUsageTypes")
        h2 {{imagesUsageType.title}}
        <UsageTypeComponent :usageTypeData="imagesUsageType"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsageTypeComponent from '../common-assets/_usage-type.vue';
import { IMAGES_USAGE_TYPES } from './fixtures';

declare const chi: any;

@Component({
  components: {
    UsageTypeComponent
  },
  mounted(){
    chi.expansionPanel(
      document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),
      {mode: 'accordion'}
    );
  },
  data(){
    return {
      imagesUsageTypes: IMAGES_USAGE_TYPES
    }
  }
})
export default class Other extends Vue {}
</script>
