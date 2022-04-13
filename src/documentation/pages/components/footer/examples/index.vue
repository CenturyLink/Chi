<template lang="pug">
  div
    h2 Examples
    p.-text(slot="example-description")
      | To use footers, apply the class <code>chi-footer</code> to <code>&lt;footer&gt;</code>
      | and wrap all content in <code>chi-footer__content</code>.
    <div v-if="['lumen', 'portal'].includes($store.state.themes.theme)">
      .chi-alert.-info.-mb--2
        i.chi-alert__icon.chi-icon.icon-circle-info
        .chi-alert__content
          p.chi-alert__title
            | Localization
          p.chi-alert__text
            | The Footer's language drop down is not functional by default as language support varies by project.
            | Please ensure the drop down is populated with the correct languages and URL paths relevant to your project prior to release.
      <ExternalLumenPortal />
      <InternalLumenPortal />
    </div>
    <div v-if="$store.state.themes.theme === 'centurylink'">
      <ExternalCenturylink />
      <InternalCenturylink />
    </div>
    <div v-if="$store.state.themes.theme === 'brightspeed'">
      .chi-alert.-info.-mb--2
        i.chi-alert__icon.chi-icon.icon-circle-info
        .chi-alert__content
          p.chi-alert__title
            | Localization
          p.chi-alert__text
            | The Footer's language drop down is not functional by default as language support varies by project.
            | Please ensure the drop down is populated with the correct languages and URL paths relevant to your project prior to release.
      <ExternalBrightspeed />
      <InternalBrightspeed />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ExternalBrightspeed from './_external-brightspeed.vue';
import ExternalCenturylink from './_external-centurylink.vue';
import ExternalLumenPortal from './_external-lumen-portal.vue';
import InternalBrightspeed from './_internal-brightspeed.vue';
import InternalCenturylink from './_internal-centurylink.vue';
import InternalLumenPortal from './_internal-lumen-portal.vue';

@Component({
  components: {
    ExternalLumenPortal,
    InternalLumenPortal,
    InternalBrightspeed,
    ExternalBrightspeed,
    InternalCenturylink,
    ExternalCenturylink,
  }
})
export default class Examples extends Vue {}
</script>
