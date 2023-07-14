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
import { Component, Vue } from 'vue-property-decorator';
import Description from './_description.vue';
import InfoAndRelationships from './_infoAndRelationships.vue';
import Keyboard from './_keyboard.vue';
import NoKeyboard from './_noKeyboard.vue';
import FocusOrder from './_focusOrder.vue';
import FocusVisible from './_focusVisible.vue';

@Component({
  components: {
    Description,
    InfoAndRelationships,
    Keyboard,
    NoKeyboard,
    FocusOrder,
    FocusVisible,
  }
})
export default class Examples extends Vue {}
</script>
