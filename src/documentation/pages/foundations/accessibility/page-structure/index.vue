<template lang="pug">
  div
    <TitleBar title="Page Structure" />
    .chi-grid__container.-pt--3
      p.-text
        | Pages with well-structured content are essential for many web users.  
      ul.-text
        template(v-for="pageStructurePointer in $data.pageStructurePointers")
          li <strong>{{pageStructurePointer.highlighter}}</strong>{{pageStructurePointer.description}}
      template(v-for="pageStructureUsageType in $data.pageStructureUsageTypes")
        h2 {{pageStructureUsageType.title}}
        <UsageTypeComponent :usageTypeData="pageStructureUsageType"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsageTypeComponent from '../common-assets/_usage-type.vue';
import { PAGE_STRUCTURE_USAGE_TYPES, PAGE_STRUCTURE_POINTERS } from './fixtures';

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
      pageStructureUsageTypes: PAGE_STRUCTURE_USAGE_TYPES,
      pageStructurePointers: PAGE_STRUCTURE_POINTERS
    }
  }
})
export default class PageStructure extends Vue {}
</script>
