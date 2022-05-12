<template lang="pug">
  div
    h2 Examples
    p.-text To render a select, apply the class <code>chi-select</code> to a <code>select</code>.

    <Base />
    <Disabled />
    <Required />
    <Optional />
    <Help />
    <Message />

    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <ErrorLumenCenturyLink />
      <SizesLumenCenturyLink />
      <FloatingLabelsLumenCenturyLink />
    div(v-else)
      <ErrorPortal />
      <SizesPortal />
      <FloatingLabelsPortal />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Required from './_required.vue';
import Optional from './_optional.vue';
import Help from './_help.vue';
import Message from './_message.vue';
import ErrorLumenCenturyLink from './_error_lumen_centurylink.vue';
import ErrorPortal from './_portal/_error.vue';
import SizesLumenCenturyLink from './_sizes_lumen_centurylink.vue';
import SizesPortal from './_portal/_sizes.vue';
import FloatingLabelsLumenCenturyLink from './_floating-labels_lumen_centurylink.vue';
import FloatingLabelsPortal from './_portal/_floating-labels.vue';

@Component({
  components: {
    Base,
    Disabled,
    Required,
    Optional,
    Help,
    Message,
    ErrorLumenCenturyLink,
    ErrorPortal,
    SizesLumenCenturyLink,
    SizesPortal,
    FloatingLabelsLumenCenturyLink,
    FloatingLabelsPortal
  }
})
export default class Examples extends Vue {}
</script>
