<template lang="pug">
  <Wrapper>
    h2 Examples

    div(v-if="$store.state.themes.theme === 'portal'")
      
    div(v-else)
      <BaseLumenCenturyLink />
      <CenterLumenCenturyLink />
      <BackgroundIconsLumenCenturyLink />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturyLink from './_base-lumen-centurylink.vue';
import CenterLumenCenturyLink from './_center-lumen-centurylink.vue';
import BackgroundIconsLumenCenturyLink from './_background-icons-lumen-centurylink.vue';

@Component({
  components: {
    BaseLumenCenturyLink,
    CenterLumenCenturyLink,
    BackgroundIconsLumenCenturyLink
  }
})
export default class Examples extends Vue {}
</script>
