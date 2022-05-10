<template lang="pug">
  div
    h2 Examples

    <Base />
    <Titled />
    <Arrow />
    <ReferenceElement />

    div(v-if="$store.state.themes.theme === 'portal'")
      <InlineModalPortal />
      <DraggablePortal />
    div(v-else)
      <DraggableLumenCenturyLink />

    <OpenOnHover />
    <CloseButton />
    <Positioning />
    <Interaction />
    <AutoHide />

    h3 Popover with custom content
    p.--text Popovers can be used to display any kind of custom content (even other components).
    
    <DestructiveActionConfirmation />
    <TableFilteringPortal v-if="$store.state.themes.theme === 'portal'" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Titled from './_titled.vue';
import Arrow from './_arrow.vue';
import ReferenceElement from './_reference-element.vue';
import InlineModalPortal from './_portal/_inline-modal.vue';
import DraggableLumenCenturyLink from './_draggable_lumen_centurylink.vue';
import DraggablePortal from './_portal/_draggable.vue';
import OpenOnHover from './_open-on-hover.vue';
import CloseButton from './_close-button.vue';
import Positioning from './_positioning.vue';
import Interaction from './_interaction.vue';
import AutoHide from './_auto-hide.vue';
import DestructiveActionConfirmation from './_destructive-action-confirmation.vue';
import TableFilteringPortal from './_portal/_table-filtering.vue';

@Component({
  components: {
    Base,
    Titled,
    Arrow,
    ReferenceElement,
    InlineModalPortal,
    DraggableLumenCenturyLink,
    DraggablePortal,
    OpenOnHover,
    CloseButton,
    Positioning,
    Interaction,
    AutoHide,
    DestructiveActionConfirmation,
    TableFilteringPortal
  }
})
export default class Examples extends Vue {}
</script>
