<template lang="pug">
  div
    h2 Examples
    p.-text To render application layout, use the tag <code>chi-main</code>.

    <Base />
    <BaseHelp />
    <Disabled />
    <Error />
    //- <SizesLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    //- <SizesPortal v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseHelp from './_base-help.vue';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Error from './_error.vue';

@Component({
  components: {
    Base,
    BaseHelp,
    Disabled,
    Error,
  }
})
export default class Examples extends Vue {}
</script>
