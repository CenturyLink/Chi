<template lang="pug">
  div
    h2 Examples

    <Base />
    <Disabled />
    <Readonly />
    <Spinner />
    <Required />
    <Optional />
    <Help />
    <Message />
    <ErrorLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <ErrorPortal v-else />

    h2 Layout Variations
    <InlineLabel />
    <InlineLabelPercent />
    <InlineLabelGrid />
    <InlineInputs />
    <FloatingLabel />

    h2 Icons
    <LeftAligned />
    <RightAligned />
    <LeftRightAligned />
    <SizesLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <SizesPortal v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Readonly from './_readonly.vue';
import Spinner from './_spinner.vue';
import Required from './_required.vue';
import Optional from './_optional.vue';
import Help from './_help.vue';
import Message from './_message.vue';
import ErrorLumenCenturyLink from './_error-lumen-centurylink.vue';
import ErrorPortal from './_portal/_error.vue';
import InlineLabel from './_inline-label.vue';
import InlineLabelPercent from './_inline-label-percent.vue';
import InlineLabelGrid from './_inline-label-grid.vue';
import InlineInputs from './_inline-inputs.vue';
import FloatingLabel from './_floating-label.vue';
import LeftAligned from './_left-aligned.vue';
import RightAligned from './_right-aligned.vue';
import LeftRightAligned from './_left-right-aligned.vue';
import SizesLumenCenturyLink from './_sizes-lumen-centurylink.vue';
import SizesPortal from './_portal/_sizes.vue';

@Component({
  components: {
    Base,
    Disabled,
    Readonly,
    Spinner,
    Required,
    Optional,
    Help,
    Message,
    ErrorLumenCenturyLink,
    ErrorPortal,
    InlineLabel,
    InlineLabelPercent,
    InlineLabelGrid,
    InlineInputs,
    FloatingLabel,
    LeftAligned,
    RightAligned,
    LeftRightAligned,
    SizesLumenCenturyLink,
    SizesPortal
  }
})
export default class Examples extends Vue {}
</script>
