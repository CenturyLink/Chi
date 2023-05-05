<template lang="pug">
fragment
  <TitleBar title="Flex" description="Use shorthand flex utility classes to manage the layout, alignment, and size of Chi components." />
  <Components />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Components from './components/index.vue';

@Component({
  components: {
    Components
  }
})
export default class Flex extends Vue {}
</script>
