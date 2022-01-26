<template lang="pug">
  div
    h2 Examples

    <Base />
    <Disabled />
    <SizesPortal v-if="$store.state.themes.theme === 'portal'" />
    <SizesLumenCenturyLink v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import SizesLumenCenturyLink from './_sizes-lumen-centurylink.vue';
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
