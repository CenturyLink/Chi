<template lang="pug">
  div
    h2 Examples

    <Base />
    <Disabled />
    <MinMaxStep />
    <Required />
    <Help />
    <Message />
    <Error />
    <SizesLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <SizesPortal v-if="$store.state.themes.theme === 'portal'" />

    h2 Expanded version

    <BaseExpanded />
    <DisabledExpanded />
    <MinMaxStepExpanded />
    <ErrorExpanded />
    <SizesExpandedLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <SizesExpandedPortal v-if="$store.state.themes.theme === 'portal'" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import MinMaxStep from './_min-max-step.vue';
import Required from './_required.vue';
import Help from './_help.vue';
import Message from './_message.vue';
import Error from './_error.vue';
import SizesLumenCenturyLink from './_sizes_lumen_century_link.vue';
import SizesPortal from './_portal/_sizes.vue';
import BaseExpanded from './_base-expanded.vue';
import DisabledExpanded from './_disabled-expanded.vue';
import MinMaxStepExpanded from './_min-max-step-expanded.vue';
import ErrorExpanded from './_error-expanded.vue';
import SizesExpandedLumenCenturyLink from './_sizes-expanded_lumen_century_link.vue';
import SizesExpandedPortal from './_portal/_sizes-expanded.vue';

@Component({
  components: {
    Base,
    Disabled,
    MinMaxStep,
    Required,
    Help,
    Message,
    Error,
    SizesLumenCenturyLink,
    SizesPortal,
    BaseExpanded,
    DisabledExpanded,
    MinMaxStepExpanded,
    ErrorExpanded,
    SizesExpandedPortal,
    SizesExpandedLumenCenturyLink
  }
})
export default class Examples extends Vue {}
</script>
