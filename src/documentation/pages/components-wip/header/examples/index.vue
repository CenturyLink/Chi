<template lang="pug">
  div
    h3 Examples
    p.-text
      | To use headers, apply the class <code>chi-header</code> to <code>&lt;header&gt;</code>
      | and wrap all content in <code>chi-header__content</code>. Use <code>chi-header__start</code>
      | to position elements at the start of the header and <code>chi-header__end</code> to
      | position elements at the end of the header.
    h3 Responsiveness
    p.-text
      | By default, all content stored in headers will render in drawer
      | components when the viewport is too small to accommodate.

    div(v-if="selectedTheme === 'lumen'")
      BaseExample
      <HeaderTitle />
      <HeaderTitleButtons />
      <HeaderCollapseSearch />
      <HeaderMobileSecondary />
      h3 Sizes
      <SizesMedium />
      <SizesLarge />
      <SizesXLarge />

    div(v-if="selectedTheme === 'portal'")
      <BasePortal />
      <HeaderImpersonationPortal />
      <HeaderDropdownMenuPortal />

    div(v-if="selectedTheme === 'centurylink'")
      <BaseCenturylink />
      <HeaderTitleCenturylink />
      <HeaderTitleButtonCenturylink />
      <HeaderCollapseSearchCenturylink />
      <HeaderMobileSecondaryCenturylink />
      h3 Sizes
      <SizesMediumCenturylink />
      <SizesLargeCenturylink />
      <SizesXLargeCenturylink />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import BasePortal from './_portal/_base_header_portal.vue';
import BaseCenturylink from './_centurylink/_base_centurylink.vue';
import HeaderTitle from './_header_title.vue';
import HeaderImpersonationPortal from './_portal/_header_impersonation_portal.vue';
import HeaderDropdownMenuPortal from './_portal/_header_dropdown_menu_portal.vue';
import HeaderTitleButtons from './_header_title_buttons.vue';
import HeaderCollapseSearch from './_header_collapse_search.vue';
import HeaderMobileSecondary from './_header_mobile_secondary.vue';
import HeaderTitleButtonCenturylink from './_centurylink/_header_buttons_centurylink.vue';
import HeaderMobileSecondaryCenturylink from './_centurylink/_header_secondary_centurylink.vue';
import HeaderTitleCenturylink from './_centurylink/_header_centurylink.vue';
import HeaderCollapseSearchCenturylink from './_centurylink/_header_collapsible_centurylink.vue';
import SizesMedium from './_sizes_medium.vue';
import SizesLarge from './_sizes_large.vue';
import SizesXLarge from './_sizes_xlarge.vue';
import SizesMediumCenturylink from './_centurylink/_sizes_medium_centurylink.vue';
import SizesLargeCenturylink from './_centurylink/_sizes_large_centurylink.vue';
import SizesXLargeCenturylink from './_centurylink/_sizes_xlarge_centurylink.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    BasePortal,
    BaseCenturylink,
    HeaderTitle,
    HeaderImpersonationPortal,
    HeaderDropdownMenuPortal,
    HeaderTitleButtons,
    HeaderCollapseSearch,
    HeaderMobileSecondary,
    HeaderTitleButtonCenturylink,
    HeaderMobileSecondaryCenturylink,
    HeaderTitleCenturylink,
    HeaderCollapseSearchCenturylink,
    SizesMedium,
    SizesLarge,
    SizesXLarge,
    SizesMediumCenturylink,
    SizesLargeCenturylink,
    SizesXLargeCenturylink,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
