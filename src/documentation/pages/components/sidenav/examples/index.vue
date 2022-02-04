<template lang="pug">
  div
    h2 Examples
    
    <BaseLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <OpenOnHover />
    
    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      h2 Active Usage
      p.-text
      | The <code>-active</code> class can be applied to <code>ul.chi-sidenav__list &gt; li</code>
      | for activating the elements in the sidenav menu, <code>.drawer</code> for opening the <a href="../drawer/">drawer</a>,
      | and <code>ul.chi-sidenav__drawer-list &gt; li</code> for activating the menu items inside the drawer.

      h2 Sizes
      p.-text Sidenav supports the following sizes: <code>-sm</code>, <code>-md</code> and <code>-lg</code>. The default size is <code>-md</code>.
      <SmSizeLumenCenturyLink />
      <MdSizeLumenCenturyLink />
      <LgSizeLumenCenturyLink />
    
    <RecommendedLayout />    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturyLink from './_base_lumen_centurylink.vue';
import OpenOnHover from './_open-on-hover.vue';
import SmSizeLumenCenturyLink from './_sizes/_sm_lumen_centurylink.vue';
import MdSizeLumenCenturyLink from './_sizes/_md_lumen_centurylink.vue';
import LgSizeLumenCenturyLink from './_sizes/_lg_lumen_centurylink.vue';
import RecommendedLayout from './_recommended-layout.vue';

@Component({
  components: {
    BaseLumenCenturyLink,
    OpenOnHover,
    SmSizeLumenCenturyLink,
    MdSizeLumenCenturyLink,
    LgSizeLumenCenturyLink,
    RecommendedLayout
  }
})
export default class Examples extends Vue {}
</script>
