<template lang="pug">
  svg(:viewBox='$props.viewBox', xmlns='http://www.w3.org/2000/svg', :data-brand-type='$props.dataBrandType', aria-hidden='true')
    template(v-for="(svgData, index) in $props.svgPathDataList")
      path(:d="svgData.path" :fill="svgData.fill")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SvgPathData } from './domain';
@Component({
  props: {
    viewBox: String,
    dataBrandType: String,
    svgPathDataList: {
      type: Array as () => SvgPathData[]
    }
  }
})
export default class Logo extends Vue {}
</script>
