<template lang="pug">
  <div>
    h2 Examples

    <Base />
    <Placeholder />
    <DefaultCountry />
    <Value />
    <Disabled />
    <Error />
    <div v-if="$store.state.themes.theme === 'portal'">
      <SizesPortal />
    </div>
    <div v-else>
      <SizesLumenCenturyLink />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Placeholder from './_placeholder.vue';
import DefaultCountry from './_default-country.vue';
import Value from './_value.vue';
import Disabled from './_disabled.vue';
import Error from './_error.vue';
import SizesLumenCenturyLink from './_sizes_lumen_centurylink.vue';
import SizesPortal from './_portal/_sizes.vue';

@Component({
  components: {
    Base,
    Placeholder,
    DefaultCountry,
    Value,
    Disabled,
    Error,
    SizesLumenCenturyLink,
    SizesPortal
  }
})
export default class Examples extends Vue {}
</script>
