<template lang="pug">
div
  h2 Examples
  
  h3 Bubble
  p.-text
    | Bubble alerts are designed for displaying inline messages and notifications within forms, panels, cards, and other content areas.
    | They are Chi's default Alert type.

  <BubbleDefault />

  div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
    <BubbleCenteredLumenCenturyLink />
    <BubbleTitled />
    <BubbleSizesLumenCenturyLink />
    <BubbleClosableLumenCenturyLink />
    <BubbleActionable />

    div.chi-divider.-my--6.-bt--2

    h3 Banner
    p.-text
      | Banner alerts are commonly presented above or below the Header component and are used for scenarios such as reminding new users
      | to confirm their email address or notifying users when they are experiencing connectivity issues.

    <BannerDefaultLumenCenturyLink />
    <BannerCenteredLumenCenturyLink />
    <BannerTitledLumenCenturyLink />
    <BannerSizesLumenCenturyLink />
    <BannerClosableLumenCenturyLink />
    <BannerActionableLumenCenturyLink />

    div.chi-divider.-my--6.-bt--2

    h3 Toast
    p.-text Toasts are unobtrusive alerts used to display brief, auto-expiring information.

    <ToastDefaultLumenCenturyLink />
    <ToastTitledLumenCenturyLink />
    <ToastSizesLumenCenturyLink />

  div(v-if='$store.state.themes.theme === "portal"')
    <BubbleTitled />
    <BubbleSizesPortal />
    <BubbleClosablePortal />
    <BubbleActionable />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BubbleCenteredLumenCenturyLink from './_bubble_centered_lumen_centurylink.vue';
import BubbleSizesLumenCenturyLink from './_bubble_sizes_lumen_centurylink.vue';
import BubbleClosableLumenCenturyLink from './_bubble_closable_lumen_centurylink.vue';
import BubbleActionable from './_bubble_actionable.vue';
import BannerDefaultLumenCenturyLink from './_banner_default_lumen_centurylink.vue';
import BannerCenteredLumenCenturyLink from './_banner_centered_lumen_centurylink.vue';
import BannerTitledLumenCenturyLink from './_banner_titled_lumen_centurylink.vue';
import BannerSizesLumenCenturyLink from './_banner_sizes_lumen_centurylink.vue';
import BannerClosableLumenCenturyLink from './_banner_closable_lumen_centurylink.vue';
import BannerActionableLumenCenturyLink from './_banner_actionable_lumen_centurylink.vue';
import ToastDefaultLumenCenturyLink from './_toast_default_lumen_centurylink.vue';
import ToastTitledLumenCenturyLink from './_toast_titled_lumen_centurylink.vue';
import ToastSizesLumenCenturyLink from './_toast_sizes_lumen_centurylink.vue';
import BubbleDefault from './_bubble_default.vue';
import BubbleTitled from './_bubble_titled.vue';
import BubbleSizesPortal from './_portal/_bubble_sizes.vue';
import BubbleClosablePortal from './_portal/_bubble_closable.vue';

@Component({
  components: {
    BubbleDefault,
    BubbleCenteredLumenCenturyLink,
    BubbleTitled,
    BubbleSizesLumenCenturyLink,
    BubbleClosableLumenCenturyLink,
    BubbleActionable,
    BannerDefaultLumenCenturyLink,
    BannerCenteredLumenCenturyLink,
    BannerTitledLumenCenturyLink,
    BannerSizesLumenCenturyLink,
    BannerClosableLumenCenturyLink,
    BannerActionableLumenCenturyLink,
    ToastDefaultLumenCenturyLink,
    ToastTitledLumenCenturyLink,
    ToastSizesLumenCenturyLink,
    BubbleSizesPortal,
    BubbleClosablePortal
  }
})
export default class Examples extends Vue {}
</script>
