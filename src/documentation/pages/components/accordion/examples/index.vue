<template lang="pug">
  .chi-grid__container.-pt--3
    #examplesTab
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
import { Themes } from '~/models/models';

declare const chi: any;

@Component({
  components: {
    Base,
  },
})
export default class BaseExample extends Vue {
  theme = this.$store.state.themes.theme;

  mounted() {
    // const accordionBase = document.getElementById('example-base');

    // chi.accordion(accordionBase);
  }
}
</script>
