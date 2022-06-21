<template lang="pug">
  .chi-grid
    .chi-col.-w--12
      .chi-breadcrumb
        ol.-text--normal
            template(v-for="tag in $props.usageTypeData.titleTags")
              li.chi-breadcrumb__item
                a(:href="tag.href" rel="noopener" target="_blank") {{tag.label}}
    .chi-col.-w--12
      .-lh--3
        template(v-for="(subtag, index) in $props.usageTypeData.titleSubtags")
          .chi-badge.-dark.-outline.-xs(:class="index > 0 ? '-ml--1' : ''" :data-tooltip="subtag.tooltip" data-position="bottom")
            span {{subtag.label}}
    .chi-col.-w--12
      p.-text
        | <strong>Benefits:</strong> {{$props.usageTypeData.benefits}}
      p.-text
        | {{$props.usageTypeData.explanation}}
    .chi-col.-w--12
      .chi-card.-s--1.-rounded.-mb--3.-mt--1
        .chi-card__header
          .chi-card__title
            | How to pass
        .chi-card__content.-px--3
          template(v-if="$props.usageTypeData.passData.passDescription")
            p.-text
              | {{$props.usageTypeData.passData.passDescription}}
          ul.accessibility-checklist
            template(v-for="passPoint in $props.usageTypeData.passData.passPoints")
              li 
                | {{passPoint}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { UsageType } from './domain';

declare const chi: any;

@Component({
  props: {
    usageTypeData: {
      type: Object as () => UsageType[]
    }
  },
  mounted(){
    chi.tooltip(document.querySelectorAll('[data-tooltip]'));
  }
})
export default class KeyboardUsageComponent extends Vue {}
</script>
