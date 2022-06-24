<template lang="pug">
  div
    <TitleBar title="Text" />
    .chi-grid__container.-pt--3
      template(v-for="textUsageType in $data.textUsageTypes")
        h2 {{textUsageType.title}}
        <UsageTypeComponent :usageTypeData="textUsageType"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsageTypeComponent from '../common-assets/_usage-type.vue';
import { TEXT_USAGE_TYPES } from './fixtures';

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
      textUsageTypes: TEXT_USAGE_TYPES,
    }
  }
})
export default class Text extends Vue {}
</script>
