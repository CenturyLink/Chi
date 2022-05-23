<template lang="pug">
  div
    h2 Examples
    p.-text
      | To use footers, apply the class <code>chi-footer</code> to <code>&lt;footer&gt;</code>
      | and wrap all content in <code>chi-footer__content</code>.

    div(v-if="['lumen', 'portal', 'brightspeed'].includes($store.state.themes.theme)")
      chi-alert(color="info" icon="circle-info" title="Localization") 
        | The Footer's language drop down is not functional by default as language support varies by project.
        | Please ensure the drop down is populated with the correct languages and URL paths relevant to your project prior to release.

    div(v-if="['lumen', 'portal'].includes($store.state.themes.theme)")
      <ExternalLumenPortal />
      <InternalLumenPortal />

    div(v-if="$store.state.themes.theme === 'brightspeed'")
      <ExternalBrightspeed />
      <InternalBrightspeed />

    div(v-if="$store.state.themes.theme === 'centurylink'")
      <ExternalCenturylink />
      <InternalCenturylink />

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
