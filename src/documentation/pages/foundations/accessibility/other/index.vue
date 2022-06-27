<template lang="pug">
  div
    <TitleBar title="Other" />
    .chi-grid__container.-pt--3
      template(v-for="otherUsageType in $data.otherUsageTypes")
        h2 {{otherUsageType.title}}
        <UsageTypeComponent :usageTypeData="otherUsageType"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsageTypeComponent from '../common-assets/_usage-type.vue';
import { otherUsageTypes } from './fixtures';

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
      otherUsageTypes: otherUsageTypes
    }
  }
})
export default class Other extends Vue {}
</script>
