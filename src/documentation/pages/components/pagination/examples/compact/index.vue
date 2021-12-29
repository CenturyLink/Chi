<template lang="pug">
  <div>
    h3 Compact

    <Base />
    <PageJumper />
    <FirstLastPageButtons />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import PageJumper from './_page-jumper.vue';
import FirstLastPageButtons from './_first-last-page-buttons.vue';

@Component({
  components: {
    Base,
    PageJumper,
    FirstLastPageButtons
  }
})
export default class Compact extends Vue {}
</script>
