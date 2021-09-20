<template lang="pug">
div
  h2 Examples

  div(v-if='["lumen", "centurylink"].includes($store.state.themes.theme)')
    h3 Bubble
    p.-text
      | Bubble alerts are designed for displaying inline messages and notifications within forms, panels, cards, and other content areas.
      | They are Chi's default Alert type.

    <BubbleDefaultLumenCenturylink />
    <BubbleCenteredLumenCenturylink />
    <BubbleTitledLumenCenturylink />
    <BubbleSizesLumenCenturyLink />
    <BubbleClosableLumenCenturyLink />
    <BubbleActionableLumenCenturyLink />

    div.chi-divider.-my--6.-bt--2

    h3 Banner
    p.-text
      | Banner alerts are commonly presented above or below the Header component and are used for scenarios such as reminding new users
      | to confirm their email address or notifying users when they are experiencing connectivity issues.

    <BannerDefaultCenturyLink />
    <BannerCenteredCenturyLink />
    <BannerTitledCenturyLink />
    <BannerSizesCenturyLink />
    <BannerClosableCenturyLink />
    <BannerActionableCenturyLink />

    div.chi-divider.-my--6.-bt--2

    h3 Toast
    p.-text Toasts are unobtrusive alerts used to display brief, auto-expiring information.

    <ToastDefaultCenturyLink />
    <ToastTitledCenturyLink />
    <ToastSizesCenturyLink />

  div(v-if='$store.state.themes.theme === "portal"')
    h3 Bubble
    p.-text
      | Bubble alerts are designed for displaying inline messages and notifications within forms, panels, cards, and other content areas.
      | They are Chi's default Alert type.
    
    <BubbleDefaultPortal />
    <BubbleTitledPortal />
    <BubbleSizesPortal />
    <BubbleClosablePortal />
    <BubbleActionablePortal />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BubbleDefaultLumenCenturylink from './_bubble_default_lumen_centurylink.vue';
import BubbleCenteredLumenCenturylink from './_bubble_centered_lumen_centurylink.vue';
import BubbleTitledLumenCenturylink from './_bubble_titled_lumen_centurylink.vue';
import BubbleSizesLumenCenturyLink from './_bubble_sizes_lumen_centurylink.vue';
import BubbleClosableLumenCenturyLink from './_bubble_closable_lumen_centurylink.vue';
import BubbleActionableLumenCenturyLink from './_bubble_actionable_lumen_centurylink.vue';
import BannerDefaultCenturyLink from './_banner_default_lumen_centurylink.vue';
import BannerCenteredCenturyLink from './_banner_centered_lumen_centurylink.vue';
import BannerTitledCenturyLink from './_banner_titled_lumen_centurylink.vue';
import BannerSizesCenturyLink from './_banner_sizes_lumen_centurylink.vue';
import BannerClosableCenturyLink from './_banner_closable_lumen_centurylink.vue';
import BannerActionableCenturyLink from './_banner_actionable_lumen_centurylink.vue';
import ToastDefaultCenturyLink from './_toast_default_lumen_centurylink.vue';
import ToastTitledCenturyLink from './_toast_titled_lumen_centurylink.vue';
import ToastSizesCenturyLink from './_toast_sizes_lumen_centurylink.vue';
import BubbleDefaultPortal from './_portal/_bubble_default.vue';
import BubbleTitledPortal from './_portal/_bubble_titled.vue';
import BubbleSizesPortal from './_portal/_bubble_sizes.vue';
import BubbleClosablePortal from './_portal/_bubble_closable.vue';
import BubbleActionablePortal from './_portal/_bubble_actionable.vue';

@Component({
  components: {
    BubbleDefaultLumenCenturylink,
    BubbleCenteredLumenCenturylink,
    BubbleTitledLumenCenturylink,
    BubbleSizesLumenCenturyLink,
    BubbleClosableLumenCenturyLink,
    BubbleActionableLumenCenturyLink,
    BannerDefaultCenturyLink,
    BannerCenteredCenturyLink,
    BannerTitledCenturyLink,
    BannerSizesCenturyLink,
    BannerClosableCenturyLink,
    BannerActionableCenturyLink,
    ToastDefaultCenturyLink,
    ToastTitledCenturyLink,
    ToastSizesCenturyLink,
    BubbleDefaultPortal,
    BubbleTitledPortal,
    BubbleSizesPortal,
    BubbleClosablePortal,
    BubbleActionablePortal
  }
})
export default class AlertExamples extends Vue {}
</script>
