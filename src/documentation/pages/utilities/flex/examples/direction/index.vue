<template lang="pug">
  div
    <TitleAnchor title="Direction" id="direction" titleSize="h3"/>
    p.-text Use direction utilities to define how items will be placed in flex containers.
    <Row />
    <RowReverse />
    <Column />
    <ColumnReverse />
    <SpecificBreakpoints/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RowReverse from './_row-reverse.vue';
import Row from './_row.vue';
import Column from './_column.vue';
import ColumnReverse from './_column-reverse.vue';
import SpecificBreakpoints from './_specific-breakpoints.vue';

@Component({
  components: {
    Row,
    RowReverse,
    Column,
    ColumnReverse,
    SpecificBreakpoints,
  }
})
export default class Direction extends Vue {}
</script>
