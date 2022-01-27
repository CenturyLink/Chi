<template lang="pug">
  div
    h2 Examples
    p.-text
      | Modals are composed of several parts. To render a modal, include a modal backdrop, modal header, modal body,
      | and modal footer (optional).
      | By default modals are aligned to the top of the page.

      <Base />
      <Center />
      h3 Scrollable
      p.-text 
        | Enable scrolling if the height of the modal's content is larger than the modal's content container.
      <ScrollableRequirements />
      <ScrollableLongContent />
      div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
        <ModalSubtitle />
        <Inverse />
        <NoBorder />
        <MultiStep />
        <Simple />
      div(v-else)
        <Alert />
        <MultiStep />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Alert from './_alert.vue';
import Base from './_base.vue';
import NoBorder from './_no_border.vue';
import Center from './_center.vue';
import Inverse from './_inverse.vue';
import ScrollableLongContent from './_scrollable_long_content.vue';
import ModalSubtitle from './_subtitle.vue';
import ScrollableRequirements from './_scrollable_requirements.vue';
import Simple from './_simple.vue';
import MultiStep from './_multi_step.vue';

@Component({
  components: {
    Alert,
    Base,
    NoBorder,
    Center,
    Inverse,
    ScrollableLongContent,
    ScrollableRequirements,
    ModalSubtitle,
    Simple,
    MultiStep,
  }
})
export default class Examples extends Vue {}
</script>
