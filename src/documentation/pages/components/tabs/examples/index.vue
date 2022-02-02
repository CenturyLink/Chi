<template lang="pug">
  div
    h2 Examples

    div(v-if="$store.state.themes.theme === 'portal'")
      <BasePortal />
      <BorderedPortal />
      <VerticalPortal />
    div(v-else)
      <HorizontalLumenCenturyLink />
      <VerticalLumenCenturyLink />
      <DefaultLinkLumenCenturyLink />
      <TabbedNavigationLumenCenturyLink />
      <ContainedComponentLumenCenturyLink />
      <WaitAnimationsLumenCenturyLink />
      <IconsHorizontalLumenCenturyLink />
      <IconsVerticalLumenCenturyLink />
      <VerticalDescriptionLumenCenturyLink />
      <VerticalSubtabsLumenCenturyLink />
      <BorderedSubtabsLumenCenturyLink />
      h2 Additional Sizes
      <AdditionalHorizontalLumenCenturyLink />
      <AdditionalVerticalLumenCenturyLink />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VerticalLumenCenturyLink from './_vertical.vue';
import HorizontalLumenCenturyLink from './_horizontal.vue';
import DisabledLumenCenturyLink from './_disabled.vue';
import DefaultLinkLumenCenturyLink from './_default_link.vue';
import TabbedNavigationLumenCenturyLink from './_tabbed_navigation.vue';
import WaitAnimationsLumenCenturyLink from './_wait_animations.vue';
import IconsVerticalLumenCenturyLink from './_icons_vertical.vue';
import IconsHorizontalLumenCenturyLink from './_icons_horizontal.vue';
import ContainedComponentLumenCenturyLink from './_contained_component.vue';
import VerticalDescriptionLumenCenturyLink from './_vertical_description.vue';
import VerticalSubtabsLumenCenturyLink from './_vertical_subtabs.vue';
import BorderedSubtabsLumenCenturyLink from './_bordered_subtabs.vue';
import AdditionalHorizontalLumenCenturyLink from './_additional_horizontal.vue';
import AdditionalVerticalLumenCenturyLink from './_additional_vertical.vue';
import BasePortal from './_base-portal.vue';
import BorderedPortal from './_bordered-portal.vue';
import VerticalPortal from './_vertical-portal.vue';

@Component({
  components: {
    HorizontalLumenCenturyLink,
    VerticalLumenCenturyLink,
    DefaultLinkLumenCenturyLink,
    TabbedNavigationLumenCenturyLink,
    ContainedComponentLumenCenturyLink,
    DisabledLumenCenturyLink,
    WaitAnimationsLumenCenturyLink,
    IconsHorizontalLumenCenturyLink,
    IconsVerticalLumenCenturyLink,
    VerticalDescriptionLumenCenturyLink,
    VerticalSubtabsLumenCenturyLink,
    BorderedSubtabsLumenCenturyLink,
    AdditionalHorizontalLumenCenturyLink,
    AdditionalVerticalLumenCenturyLink,
    BasePortal,
    BorderedPortal,
    VerticalPortal,
  }
})
export default class Examples extends Vue {}
</script>
