<template lang="pug">
  div
    h2 Examples
    p.-text
      | To use footers, apply the class <code>chi-footer</code> to <code>&lt;footer&gt;</code>
      | and wrap all content in <code>chi-footer__content</code>.

    chi-alert(v-if="['lumen', 'portal', 'brightspeed'].includes(selectedTheme)" color="info" icon="circle-info" title="Localization")
      | The Footer's language drop down is not functional by default as language support varies by project.
      | Please ensure the drop down is populated with the correct languages and URL paths relevant to your project prior to release.

    ExternalLumenPortal(v-if="['lumen', 'portal'].includes(selectedTheme)")
    InternalLumenPortal(v-if="['lumen', 'portal'].includes(selectedTheme)")

    ExternalBrightspeed(v-if="selectedTheme === 'brightspeed'")
    InternalBrightspeed(v-if="selectedTheme === 'brightspeed'")

    ExternalCenturylink(v-if="selectedTheme === 'centurylink'")
    InternalCenturylink(v-if="selectedTheme === 'centurylink'")

</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import ExternalBrightspeed from './_external-brightspeed.vue';
import ExternalCenturylink from './_external-centurylink.vue';
import ExternalLumenPortal from './_external-lumen-portal.vue';
import InternalBrightspeed from './_internal-brightspeed.vue';
import InternalCenturylink from './_internal-centurylink.vue';
import InternalLumenPortal from './_internal-lumen-portal.vue';

@NuxtComponent({
  components: {
    ExternalLumenPortal,
    InternalLumenPortal,
    InternalBrightspeed,
    ExternalBrightspeed,
    InternalCenturylink,
    ExternalCenturylink,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
