<template lang="pug">
  div
    h3 Compact

    <CompactBaseLumenCenturylink />
    <CompactPageJumperLumenCenturylink />
    <CompactFirstLastPageButtonsLumenCenturylink />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CompactBaseLumenCenturylink from './_base_lumen_centurylink.vue';
import CompactPageJumperLumenCenturylink from './_page-jumper_lumen_centurylink.vue';
import CompactFirstLastPageButtonsLumenCenturylink from './_first-last-page-buttons_lumen_centurylink.vue';

@Component({
  components: {
    CompactBaseLumenCenturylink,
    CompactPageJumperLumenCenturylink,
    CompactFirstLastPageButtonsLumenCenturylink
  }
})
export default class Compact extends Vue {}
</script>
