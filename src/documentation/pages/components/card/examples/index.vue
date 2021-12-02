<template lang="pug">
  div
    h2 Examples
    p.-text To display a card, use the class <code>chi-card</code>.

    <Base />

    <div v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)">
      <ActiveLumenCenturylink />
      <NoBorderLumenCenturylink />
      <Empty />
      <TitledLumenCenturylink />
      <CenterAlignedLumenCenturylink />
      <TitledWithContentAndIconLumenCenturylink />
      <AnimateOnHoverLumenCenturylink />
      <HeroLumenCenturylink />
      <FooterLumenCenturylink />
      <FooterRightAlignedLumenCenturylink />
      <FooterCenterAlignedLumenCenturylink />
      <FooterNoBorderLumenCenturylink />
      <FooterSmallLumenCenturylink />
      <Header />
      <HeaderCenterAlignedLumenCenturylink />
      <HeaderNoBorderLumenCenturylink />
      <HeaderSmallLumenCenturylink />
      <HeaderFooterLumenCenturylink />
      <HeaderFooterSmallLumenCenturylink />
    </div>

    <div v-if="$store.state.themes.theme === 'portal'">
      <Header />
      <HighlightPortal />
      <WithTabsPortal />
      <Empty />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import ActiveLumenCenturylink from './_active_lumen_centurylink.vue';
import NoBorderLumenCenturylink from './_no_border_lumen_centurylink.vue';
import Empty from './_empty.vue';
import TitledLumenCenturylink from './_titled_lumen_centurylink.vue';
import CenterAlignedLumenCenturylink from './_center_aligned_lumen_centurylink.vue';
import TitledWithContentAndIconLumenCenturylink from './_titled_with_content_and_icon_lumen_centurylink.vue';
import AnimateOnHoverLumenCenturylink from './_animate_on_hover_lumen_centurylink.vue';
import HeroLumenCenturylink from './_hero_lumen_centurylink.vue';
import FooterLumenCenturylink from './_footer_lumen_centurylink.vue';
import FooterRightAlignedLumenCenturylink from './_footer_right_aligned_lumen_centurylink.vue';
import FooterCenterAlignedLumenCenturylink from './_footer_center_aligned_lumen_centurylink.vue';
import FooterNoBorderLumenCenturylink from './_footer_no_border_lumen_centurylink.vue';
import FooterSmallLumenCenturylink from './_footer_small_lumen_centurylink.vue';
import Header from './_header.vue';
import HeaderCenterAlignedLumenCenturylink from './_header_center_aligned_lumen_centurylink.vue';
import HeaderNoBorderLumenCenturylink from './_header_no_border_lumen_centurylink.vue';
import HeaderSmallLumenCenturylink from './_header_small_lumen_centurylink.vue';
import HeaderFooterLumenCenturylink from './_header_footer_lumen_centurylink.vue';
import HeaderFooterSmallLumenCenturylink from './_header_footer_small_lumen_centurylink.vue';
import HighlightPortal from './_portal/_highlight.vue';
import WithTabsPortal from './_portal/_with_tabs.vue';

@Component({
  components: {
    ActiveLumenCenturylink,
    Base,
    NoBorderLumenCenturylink,
    Empty,
    TitledLumenCenturylink,
    CenterAlignedLumenCenturylink,
    TitledWithContentAndIconLumenCenturylink,
    AnimateOnHoverLumenCenturylink,
    HeroLumenCenturylink,
    FooterLumenCenturylink,
    FooterRightAlignedLumenCenturylink,
    FooterCenterAlignedLumenCenturylink,
    FooterNoBorderLumenCenturylink,
    FooterSmallLumenCenturylink,
    Header,
    HeaderCenterAlignedLumenCenturylink,
    HeaderNoBorderLumenCenturylink,
    HeaderSmallLumenCenturylink,
    HeaderFooterLumenCenturylink,
    HeaderFooterSmallLumenCenturylink,
    HighlightPortal,
    WithTabsPortal
  }
})
export default class Examples extends Vue {}
</script>
