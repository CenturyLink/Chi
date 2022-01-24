<template lang="pug">
  div
    h2 Examples

    div(v-if="$store.state.themes.theme === 'portal'")
      <BasePortal />
      <BorderedPortal />
      <VerticalPortal />
    div(v-else)
      <Horizontal />
      <Vertical />
      <DefaultLink />
      <TabbedNavigation />
      <ContainedComponent />
      <WaitAnimations />
      <IconsHorizontal />
      <IconsVertical />
      <VerticalDescription />
      <VerticalSubtabs />
      <BorderedSubtabs />
      h2 Additional Sizes
      <AdditionalHorizontal />
      <AdditionalVertical />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vertical from './_vertical.vue';
import Horizontal from './_horizontal.vue';
import Disabled from './_disabled.vue';
import DefaultLink from './_default_link.vue';
import TabbedNavigation from './_tabbed_navigation.vue';
import WaitAnimations from './_wait_animations.vue';
import IconsVertical from './_icons_vertical.vue';
import IconsHorizontal from './_icons_horizontal.vue';
import ContainedComponent from './_contained_component.vue';
import VerticalDescription from './_vertical_description.vue';
import VerticalSubtabs from './_vertical_subtabs.vue';
import BorderedSubtabs from './_bordered_subtabs.vue';
import AdditionalHorizontal from './_additional_horizontal.vue';
import AdditionalVertical from './_additional_vertical.vue';
import BasePortal from './_base_portal.vue';
import BorderedPortal from './_bordered_portal.vue';
import VerticalPortal from './_vertical_portal.vue';

@Component({
  components: {
    Horizontal,
    Vertical,
    DefaultLink,
    TabbedNavigation,
    ContainedComponent,
    Disabled,
    WaitAnimations,
    IconsHorizontal,
    IconsVertical,
    VerticalDescription,
    VerticalSubtabs,
    BorderedSubtabs,
    AdditionalHorizontal,
    AdditionalVertical,
    BasePortal,
    BorderedPortal,
    VerticalPortal,
  }
})
export default class Examples extends Vue {}
</script>
