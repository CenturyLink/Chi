<template lang="pug">
div
  h2 Examples
  
  h3 Bubble
  p.-text
    | Bubble alerts are designed for displaying inline messages and notifications within forms, panels, cards, and other content areas.
    | They are Chi's default Alert type.

  <BubbleDefault />

  div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
    <BubbleCenteredLumenCenturylink />
    <BubbleTitled />
    <BubbleSizesLumenCenturyLink />
    <BubbleClosableLumenCenturyLink />
    <BubbleActionable />

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
    <BubbleTitled />
    <BubbleSizesPortal />
    <BubbleClosablePortal />
    <BubbleActionable />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BubbleCenteredLumenCenturylink from './_bubble_centered_lumen_centurylink.vue';
import BubbleSizesLumenCenturyLink from './_bubble_sizes_lumen_centurylink.vue';
import BubbleClosableLumenCenturyLink from './_bubble_closable_lumen_centurylink.vue';
import BubbleActionable from './_bubble_actionable.vue';
import BannerDefaultCenturyLink from './_banner_default_lumen_centurylink.vue';
import BannerCenteredCenturyLink from './_banner_centered_lumen_centurylink.vue';
import BannerTitledCenturyLink from './_banner_titled_lumen_centurylink.vue';
import BannerSizesCenturyLink from './_banner_sizes_lumen_centurylink.vue';
import BannerClosableCenturyLink from './_banner_closable_lumen_centurylink.vue';
import BannerActionableCenturyLink from './_banner_actionable_lumen_centurylink.vue';
import ToastDefaultCenturyLink from './_toast_default_lumen_centurylink.vue';
import ToastTitledCenturyLink from './_toast_titled_lumen_centurylink.vue';
import ToastSizesCenturyLink from './_toast_sizes_lumen_centurylink.vue';
import BubbleDefault from './_bubble_default.vue';
import BubbleTitled from './_bubble_titled.vue';
import BubbleSizesPortal from './_portal/_bubble_sizes.vue';
import BubbleClosablePortal from './_portal/_bubble_closable.vue';

@Component({
  components: {
    BubbleDefault,
    BubbleCenteredLumenCenturylink,
    BubbleTitled,
    BubbleSizesLumenCenturyLink,
    BubbleClosableLumenCenturyLink,
    BubbleActionable,
    BannerDefaultCenturyLink,
    BannerCenteredCenturyLink,
    BannerTitledCenturyLink,
    BannerSizesCenturyLink,
    BannerClosableCenturyLink,
    BannerActionableCenturyLink,
    ToastDefaultCenturyLink,
    ToastTitledCenturyLink,
    ToastSizesCenturyLink,
    BubbleSizesPortal,
    BubbleClosablePortal
  }
})
export default class AlertExamples extends Vue {}
</script>
