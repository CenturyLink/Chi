<template lang="pug">
  div
    h2 Examples

    <Interaction />
    <Position />
    <Backdrop />
    <Titled />
    <CloseButton />
    <HeaderTitle />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Interaction from './_interaction.vue'
import Position from './_position.vue'
import Backdrop from './_backdrop.vue'
import Titled from './_titled.vue'
import CloseButton from './_close-button.vue'
import HeaderTitle from './_header.vue'


@Component({
  components: {
    Interaction,
    Position,
    Backdrop,
    Titled,
    CloseButton,
    HeaderTitle
  }
})
export default class Examples extends Vue {}
</script>
