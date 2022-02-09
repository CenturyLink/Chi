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
      h2 Icons
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
import VerticalLumenCenturyLink from './_vertical-lumen-centurylink.vue';
import HorizontalLumenCenturyLink from './_horizontal-lumen-centurylink.vue';
import DefaultLinkLumenCenturyLink from './_default-link-lumen-centurylink.vue';
import TabbedNavigationLumenCenturyLink from './_tabbed-navigation-lumen-centurylink.vue';
import WaitAnimationsLumenCenturyLink from './_wait-animations-lumen-centurylink.vue';
import IconsVerticalLumenCenturyLink from './_icons-vertical-lumen-centurylink.vue';
import IconsHorizontalLumenCenturyLink from './_icons-horizontal-lumen-centurylink.vue';
import ContainedComponentLumenCenturyLink from './_contained-component-lumen-centurylink.vue';
import VerticalDescriptionLumenCenturyLink from './_vertical-description-lumen-centurylink.vue';
import VerticalSubtabsLumenCenturyLink from './_vertical-subtabs-lumen-centurylink.vue';
import BorderedSubtabsLumenCenturyLink from './_bordered-subtabs-lumen-centurylink.vue';
import AdditionalHorizontalLumenCenturyLink from './_additional-horizontal-lumen-centurylink.vue';
import AdditionalVerticalLumenCenturyLink from './_additional-vertical-lumen-centurylink.vue';
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
