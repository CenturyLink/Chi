<template lang="pug">
  div
    h2 Examples

    div(v-if="['portal', 'lumen'].includes($store.state.themes.theme)")
      h3 Portal & Lumen examples
      <Base />

    div(v-if="$store.state.themes.theme === 'centurylink'")
      h3 CenturyLink examples

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';

@Component({
  components: {
    Base,
  },
  data: () => {
    return {}
  },
})
export default class AccordionExamples extends Vue {
  mounted() {
  }
}
</script>
