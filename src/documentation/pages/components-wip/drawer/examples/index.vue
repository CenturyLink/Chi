<template lang="pug">
  div
    h2 Examples

    <client-only placeholder="Loading...">
      <Interaction />
      <Position />
      <Backdrop />
      <Titled />
      <CloseButton />
      <HeaderTitle />
    </client-only>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Interaction from './_interaction.vue';
import Position from './_position.vue';
import Backdrop from './_backdrop.vue';
import Titled from './_titled.vue';
import CloseButton from './_close-button.vue';
import HeaderTitle from './_header.vue';

@NuxtComponent({
  components: {
    Interaction,
    Position,
    Backdrop,
    Titled,
    CloseButton,
    HeaderTitle,
  },
})
export default class Examples extends Vue {}
</script>
