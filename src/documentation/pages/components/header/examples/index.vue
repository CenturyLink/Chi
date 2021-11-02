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

    div
      <Base />
      <HeaderTitleFile />
      <PortalHeader />
      <PortalHeaderNavbar />
      <HeaderImpersonation />
      <HeaderTitleButtons />
      <HeaderCollapseSearch />
      <HeaderTopToolBar />
      <HeaderMobileSecondary />
      h3 Sizes
      <SizesMedium />
      <SizesLarge />
      <SizesXLarge />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import HeaderTitleFile from './_header_title_file.vue';
import PortalHeader from './_portal_header.vue';
import PortalHeaderNavbar from './_portal_header_navbar.vue';
import HeaderImpersonation from './_header_impersonation.vue';
import HeaderTitleButtons from './_header_title_buttons.vue';
import HeaderCollapseSearch from './_header_collapse_search.vue';
import HeaderTopToolBar from './_header_toptoolbar.vue';
import HeaderMobileSecondary from './_header_mobile_secondary.vue';
import SizesMedium from './_sizes_medium.vue';
import SizesLarge from './_sizes_large.vue';
import SizesXLarge from './_sizes_xlarge.vue';

@Component({
  components: {
    Base,
    HeaderTitleFile,
    PortalHeader,
    PortalHeaderNavbar,
    HeaderImpersonation,
    HeaderTitleButtons,
    HeaderCollapseSearch,
    HeaderTopToolBar,
    HeaderMobileSecondary,
    SizesMedium,
    SizesLarge,
    SizesXLarge
  }
})
export default class HeaderExamples extends Vue {}
</script>
