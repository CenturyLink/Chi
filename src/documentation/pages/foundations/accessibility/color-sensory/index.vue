<template lang="pug">
  div
    <TitleBar title="Color and sensory" />
    .chi-grid__container.-pt--3
      template(v-for="sensoryColorUsageType in $data.sensoryColorUsageTypes")
        h2 {{sensoryColorUsageType.title}}
        <UsageTypeComponent :usageTypeData="sensoryColorUsageType"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsageTypeComponent from '../common-assets/_usage-type.vue';
import { SENSORY_COLOR_USAGE_TYPES } from './fixtures';

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
      sensoryColorUsageTypes: SENSORY_COLOR_USAGE_TYPES
    }
  }
})
export default class ColorSensory extends Vue {}
</script>
