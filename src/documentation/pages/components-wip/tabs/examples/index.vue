<template lang="pug">
  div
    h2 Examples
    h3 Horizontal
    <Flat />
    <Solid />
    h3 Vertical
    <VerticalFlat />
    <VerticalSolid />
    <LinkDefaultBehavior v-if="hidePortal" />
    h2 Tabbed navigation bar
    p.-text
      | The navigation component is a combination of Chi tabs and dropdowns components. You must use
      | <code>chi.navigation</code> function to instantiate the whole group of components, and there is no need for
      | instantiating the tabs nor the dropdowns independently. The navigation components will manage the lifecycle of the
      | descendants' tabs and dropdowns.
    p.-text
      | Although navigation reproduces all the functionality that tabs and dropdowns have, like the sliding border or the
      | animated chevron in the dropdowns, it also adds some other new functionalities like the automatic overflow menu,
      | or a wait-for-animation option.
    <TabbedNavigationFlat />
    <TabbedNavigationSolid />

    <ComponentsContained v-if="hidePortal" />
    <WaitForAnimation v-if="hidePortal" />

    <VerticalTreeTabs v-if="!hidePortal" />

    template(v-if="hidePortal")
      h2 Icons
      <HorizontalTabsWithIcon />
      <VerticalTabsWithIcon />
      <VerticalTabsWithIconAndDescription />
      <VerticalSubtabs />
      <Bordered />
      h2 Additional Size
      <AdditionalSizesHorizontal />
      <AdditionalSizesVertical />


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Flat from './_flat.vue';
import VerticalFlat from './_vertical-flat.vue';
import VerticalSolid from './_vertical-solid.vue';
import Solid from './_solid.vue';
import LinkDefaultBehavior from './_link-default-behavior.vue';
import HorizontalTabsWithIcon from './_horizontal-tabs-with-icons.vue';
import VerticalTabsWithIconAndDescription from './_vertical-tabs-with-icons-and-description.vue';
import VerticalTabsWithIcon from './_vertical-tabs-with-icons.vue';
import VerticalSubtabs from './_vertical-subtabs.vue';
import Bordered from './_bordered.vue';
import AdditionalSizesHorizontal from './_additional-sizes-horizontal.vue';
import AdditionalSizesVertical from './_additional-sizes-vertical.vue';
import TabbedNavigationFlat from './_tabbed-navigation-flat.vue';
import TabbedNavigationSolid from './_tabbed-navigation-solid.vue';
import ComponentsContained from './_components-contained.vue';
import WaitForAnimation from './_wait-for-animation.vue';
import VerticalTreeTabs from './_vertical-tree-tabs.vue';

@Component({
  components: {
    TabbedNavigationFlat,
    TabbedNavigationSolid,
    ComponentsContained,
    WaitForAnimation,
    Flat,
    Solid,
    VerticalFlat,
    VerticalSolid,
    LinkDefaultBehavior,
    HorizontalTabsWithIcon,
    VerticalTabsWithIcon,
    VerticalTabsWithIconAndDescription,
    VerticalSubtabs,
    Bordered,
    AdditionalSizesHorizontal,
    AdditionalSizesVertical,
    VerticalTreeTabs
  }
})
export default class Examples extends Vue {
  get theme() {
    return this.$store.state.themes.theme;
  }
  get hidePortal() {
    return this.theme !== 'portal'
  }
}
</script>
