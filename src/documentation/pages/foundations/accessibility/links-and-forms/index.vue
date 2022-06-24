<template lang="pug">
  div
    <TitleBar title="Links and forms" />
    .chi-grid__container.-pt--3
      template(v-for="linksAndFormsUsageType in $data.linksAndFormsUsageTypes")
        h2 {{linksAndFormsUsageType.title}}
        <UsageTypeComponent :usageTypeData="linksAndFormsUsageType"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsageTypeComponent from '../common-assets/_usage-type.vue';
import { LINKS_AND_FORMS_USAGE_TYPES } from './fixtures';

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
      linksAndFormsUsageTypes: LINKS_AND_FORMS_USAGE_TYPES,
    }
  }
})

export default class LinksAndForms extends Vue {}
</script>
