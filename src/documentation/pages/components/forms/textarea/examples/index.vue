<template lang="pug">
  div
    h2 Examples

    <Base />
    <Disabled />
    <Readonly />
    <Placeholder />
    <Required />
    <Optional />
    <Help />
    <Message />
    <Error />

    h3 Layout Variations
    <InlineLabel />
    <InlineLabelPercent />
    <InlineLabelGrid />
    <InlineTextareas />

    h3 Icons
    <LeftAligned />
    <RightAligned />
    <LeftRightAligned />

    <SizesLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)"/>
    <SizesPortal v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Readonly from './_readonly.vue';
import Placeholder from './_placeholder.vue';
import Required from './_required.vue';
import Optional from './_optional.vue';
import Help from './_help.vue';
import Message from './_message.vue';
import Error from './_error.vue';
import InlineLabel from './_inline-label.vue';
import InlineLabelPercent from './_inline-label-percent.vue';
import InlineLabelGrid from './_inline-label-grid.vue';
import InlineTextareas from './_inline-textareas.vue';
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
    Placeholder,
    Required,
    Optional,
    Help,
    Message,
    Error,
    InlineLabel,
    InlineLabelPercent,
    InlineLabelGrid,
    InlineTextareas,
    LeftAligned,
    RightAligned,
    LeftRightAligned,
    SizesLumenCenturyLink,
    SizesPortal
  }
})
export default class Examples extends Vue {}
</script>
