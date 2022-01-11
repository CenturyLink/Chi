<template lang="pug">
  <Wrapper>
    h2 Examples

    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <Base />
      <Disabled />
      <Sizes />
    div(v-if="$store.state.themes.theme === 'portal'")
      <Base />
      <Disabled />
      <PortalSizes />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Sizes from './_sizes.vue';
import PortalSizes from './_portal_sizes.vue';

@Component({
  components: {
    Base,
    Disabled,
    Sizes,
    PortalSizes,
  }
})
export default class Examples extends Vue {}
</script>
