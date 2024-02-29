<template lang="pug">
.chi-grid__container.-pt--3
  <Description />
  <InfoAndRelationships />
  <Keyboard />
  <NoKeyboard />
  <FocusOrder />
  <FocusVisible />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Description from './_description.vue';
import InfoAndRelationships from './_info-and-relationships.vue';
import Keyboard from './_keyboard.vue';
import NoKeyboard from './_no-keyboard.vue';
import FocusOrder from './_focus-order.vue';
import FocusVisible from './_focus-visible.vue';

@NuxtComponent({
  components: {
    Description,
    InfoAndRelationships,
    Keyboard,
    NoKeyboard,
    FocusOrder,
    FocusVisible,
  },
})
export default class Examples extends Vue {}
</script>
