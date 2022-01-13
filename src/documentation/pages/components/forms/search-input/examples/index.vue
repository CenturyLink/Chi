<template lang="pug">
  div
    h2 Examples

    <Base />
    <Disabled />
    div(v-if="$store.state.themes.theme === 'portal'")
      <SizesPortal />
    div(v-else)
      <SizesLumenCenturyLink />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import SizesLumenCenturyLink from './_sizes.vue';
import SizesPortal from './_portal_sizes.vue';

@Component({
  components: {
    Base,
    Disabled,
    SizesLumenCenturyLink,
    SizesPortal,
  }
})
export default class Examples extends Vue {}
</script>
