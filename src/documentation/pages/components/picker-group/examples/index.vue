<template lang="pug">
  div
    h2 Examples

    <Base />
    <Checked />
    <Disabled />
    <Required />
    <Optional />
    <Help />
    <Error />

    h2 Responsive
    p.-text
      | Picker groups can be expanded to fill the parent space by applying the class <code>-fluid</code>.
      | On smaller viewports, fluid pickers stack.
    
    <Fluid />
    <AlignmentLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <DisableFluidity />

    h2 Content Variations

    <TextAndIcons />
    <Icons />
    <SizesLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <SizesPortal v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Checked from './_checked.vue';
import Disabled from './_disabled.vue';
import Required from './_required.vue';
import Optional from './_optional.vue';
import Help from './_help.vue';
import Error from './_error.vue';
import Fluid from './_fluid.vue';
import AlignmentLumenCenturyLink from './_alignment-lumen-centurylink.vue';
import DisableFluidity from './_disabled-fluidity.vue';
import TextAndIcons from './_text-and-icons.vue';
import Icons from './_icons.vue';
import SizesLumenCenturyLink from './_sizes-lumen-centurylink.vue';
import SizesPortal from './_sizes-portal.vue';

@Component({
  components: {
    Base,
    Checked,
    Disabled,
    Required,
    Optional,
    Help,
    Error,
    Fluid,
    AlignmentLumenCenturyLink,
    DisableFluidity,
    TextAndIcons,
    Icons,
    SizesLumenCenturyLink,
    SizesPortal
  }
})
export default class Examples extends Vue {}
</script>
