<template lang="pug">
  div
    div(v-if="['lumen', 'centurylink'].includes(selectedTheme)")
      h2 Examples
      p.-text
        | Chi includes three button variants: Solid, Outline, and Flat. Use <code>solid</code>
        | buttons for high emphasis actions, base or <code>outline</code> buttons for medium
        | emphasis actions, and <code>flat</code> buttons for low emphasis actions.
        <SolidLumenCenturyLink />
        <OutlineLumenCenturyLink />
        <FlatLumenCenturyLink />
        <DisabledLumenCenturyLink />
        <UppercaseLumenCenturyLink />
        <FluidLumenCenturyLink />
        <IconButtonLumenCenturyLink />
        <LabeledIconLumenCenturyLink />
        <FloatingIconLumenCenturyLink />
        <CloseIcon />
        <DangerLumenCenturyLink />
        <SizesLumenCenturyLink />
    div(v-else)
      <ExamplesPortal />
      <DisabledPortal />
      <FluidPortal />
      <IconButtonPortal />
      <LabeledIconPortal />
      <FloatingIconPortal />
      <CloseIcon />
      <DangerPortal />
      <SizesPortal />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import DisabledLumenCenturyLink from './_disabled-lumen-centurylink.vue';
import SizesLumenCenturyLink from './_sizes-lumen-centurylink.vue';
import SolidLumenCenturyLink from './_solid-lumen-centurylink.vue';
import OutlineLumenCenturyLink from './_outline-lumen-centurylink.vue';
import FlatLumenCenturyLink from './_flat-lumen-centurylink.vue';
import UppercaseLumenCenturyLink from './_uppercase-lumen-centurylink.vue';
import FluidLumenCenturyLink from './_fluid-lumen-centurylink.vue';
import IconButtonLumenCenturyLink from './_icon-buttons-lumen-centurylink.vue';
import LabeledIconLumenCenturyLink from './_labelled-icon-lumen-centurylink.vue';
import FloatingIconLumenCenturyLink from './_floating-icon-lumen-centurylink.vue';
import CloseIcon from './_close-icon.vue';
import DangerLumenCenturyLink from './_danger-lumen-centurylink.vue';
import ExamplesPortal from './_portal/_example.vue';
import DisabledPortal from './_portal/_disabled.vue';
import FluidPortal from './_portal/_fluid.vue';
import IconButtonPortal from './_portal/_icon-button.vue';
import LabeledIconPortal from './_portal/_labeled-icon.vue';
import FloatingIconPortal from './_portal/_floating-icon.vue';
import DangerPortal from './_portal/_danger.vue';
import SizesPortal from './_portal/_sizes.vue';

@NuxtComponent({
  components: {
    SolidLumenCenturyLink,
    OutlineLumenCenturyLink,
    FlatLumenCenturyLink,
    DisabledLumenCenturyLink,
    UppercaseLumenCenturyLink,
    FluidLumenCenturyLink,
    IconButtonLumenCenturyLink,
    LabeledIconLumenCenturyLink,
    FloatingIconLumenCenturyLink,
    CloseIcon,
    DangerLumenCenturyLink,
    SizesLumenCenturyLink,
    ExamplesPortal,
    DisabledPortal,
    FluidPortal,
    IconButtonPortal,
    LabeledIconPortal,
    FloatingIconPortal,
    DangerPortal,
    SizesPortal,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
