<template lang="pug">
  <Wrapper>
    h2 Examples
   
    <Base />
    <Disabled />
    <NoHoverUnderline />
    <CTA />
    <LabeledIconLink />
    <IconLink />
    <Target />
    <Rel />
    <Download />
    <Hreflang />
    <AdditionalSizes />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import NoHoverUnderline from './_no-hover-underline.vue';
import CTA from './_cta.vue';
import LabeledIconLink from './_labeled-icon-link.vue';
import IconLink from './_icon-link.vue';
import Target from './_target.vue';
import Rel from './_rel.vue';
import Download from './_download.vue';
import Hreflang from './_hreflang.vue';
import AdditionalSizes from './_additional-sizes.vue';

@Component({
  components: {
    Base,
    Disabled,
    NoHoverUnderline,
    CTA,
    LabeledIconLink,
    IconLink,
    Target,
    Rel,
    Download,
    Hreflang,
    AdditionalSizes
  }
})
export default class Examples extends Vue {}
</script>
