<template lang="pug">
  div
    h3 Compact

    <CompactBaseLumenCenturyLink />
    <CompactPageJumperLumenCenturyLink />
    <CompactFirstLastPageButtonsLumenCenturyLink />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CompactBaseLumenCenturyLink from './_base_lumen_centurylink.vue';
import CompactPageJumperLumenCenturyLink from './_page-jumper_lumen_centurylink.vue';
import CompactFirstLastPageButtonsLumenCenturyLink from './_first-last-page-buttons_lumen_centurylink.vue';

@Component({
  components: {
    CompactBaseLumenCenturyLink,
    CompactPageJumperLumenCenturyLink,
    CompactFirstLastPageButtonsLumenCenturyLink
  }
})
export default class Compact extends Vue {}
</script>
