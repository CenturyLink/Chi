<template lang="pug">
  div
    h2 Examples

    div(v-if="$store.state.themes.theme === 'portal'")
      <BasePortal />
      <BorderedPortal />
      <VerticalPortal />
    div(v-else)
      h3 Horizontal
      <HorizontalFlatLumenCenturyLink />
      <HorizontalSolidLumenCenturyLink />
      h3 Vertical
      <VerticalFlatLumenCenturyLink />
      <VerticalSolidLumenCenturyLink />
      <DefaultLinkLumenCenturyLink />
      h3 Tabbed Navigation
      p.-text(slot="example-description")
        | The navigation component is a combination of Chi tabs and dropdowns components. You must use
        | <code>chi.navigation</code> function to instantiate the whole group of components, and there is no need for
        | instantiating the tabs nor the dropdowns independently. The navigation components will manage the lifecycle of the
        | descendants' tabs and dropdowns.

      p.-text(slot="example-description")
        | Although navigation reproduces all the functionality that tabs and dropdowns have, like the sliding border or the
        | animated chevron in the dropdowns, it also adds some other new functionalities like the automatic overflow menu,
        | or a wait-for-animation option.
      <TabbedNavigationFlatLumenCenturyLink />
      <TabbedNavigationSolidLumenCenturyLink />
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
import VerticalFlatLumenCenturyLink from './_vertical-flat-lumen-centurylink.vue';
import VerticalSolidLumenCenturyLink from './_vertical-solid-lumen-centurylink.vue';
import HorizontalFlatLumenCenturyLink from './_horizontal-flat-lumen-centurylink.vue';
import HorizontalSolidLumenCenturyLink from './_horizontal-solid-lumen-centurylink.vue';
import HorizontalLumenCenturyLink from './_horizontal-lumen-centurylink.vue';
import DefaultLinkLumenCenturyLink from './_default-link-lumen-centurylink.vue';
import TabbedNavigationFlatLumenCenturyLink from './_tabbed-navigation-flat-lumen-centurylink.vue';
import TabbedNavigationSolidLumenCenturyLink from './_tabbed-navigation-solid-lumen-centurylink.vue';
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
    HorizontalFlatLumenCenturyLink,
    HorizontalSolidLumenCenturyLink,
    VerticalFlatLumenCenturyLink,
    VerticalSolidLumenCenturyLink,
    DefaultLinkLumenCenturyLink,
    TabbedNavigationFlatLumenCenturyLink,
    TabbedNavigationSolidLumenCenturyLink,
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
