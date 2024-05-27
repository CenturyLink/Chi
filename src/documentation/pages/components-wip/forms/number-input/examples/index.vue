<template lang="pug">
  div
    h2 Examples

    BaseExample
    <Disabled />
    <MinMaxStep />
    <Required />
    <Help />
    <Message />
    <Error />
    <SizesLumenCenturyLink v-if="['lumen', 'centurylink', 'lumenrebrand24'].includes(selectedTheme)" />
    <SizesPortal v-if="['portal', 'portalrebrand24'].includes(selectedTheme)" />

    h2 Expanded version

    <BaseExpanded />
    <DisabledExpanded />
    <MinMaxStepExpanded />
    <ErrorExpanded />
    <SizesExpandedLumenCenturyLink v-if="['lumen', 'centurylink', 'lumenrebrand24'].includes(selectedTheme)" />
    <SizesExpandedPortal v-if="['portal', 'portalrebrand24'].includes(selectedTheme)" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
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

@NuxtComponent({
  components: {
    BaseExample: Base,
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
    SizesExpandedLumenCenturyLink,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
