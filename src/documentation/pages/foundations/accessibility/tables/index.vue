<template lang="pug">
  div
    <TitleBar title="Tables" />
    .chi-grid__container.-pt--3
      template(v-for="tablesUsageType in $data.tablesUsageTypes")
        h2 {{tablesUsageType.title}}
        <UsageTypeComponent :usageTypeData="tablesUsageType"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsageTypeComponent from '../common-assets/_usage-type.vue';
import { TABLES_USAGE_TYPES } from './fixtures';

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
      tablesUsageTypes: TABLES_USAGE_TYPES,
    }
  }
})
export default class Tables extends Vue {}
</script>
