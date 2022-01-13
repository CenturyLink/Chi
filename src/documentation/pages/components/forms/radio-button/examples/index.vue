<template lang="pug">
  div
    h2 Examples

    <Base />
    <Checked />
    <Disabled />
    <Required />
    <Optional />
    <Help />
    <Error />

    h2 Layout Variations
    <Inline />
    <RadioButtonList />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Checked from './_checked.vue';
import Disabled from './_disabled.vue';
import Required from './_required.vue';
import Optional from './_optional.vue';
import Help from './_help.vue';
import Error from './_error.vue';
import Inline from './_inline.vue';
import RadioButtonList from './_radio-button-list.vue';

@Component({
  components: {
    Base,
    Checked,
    Disabled,
    Required,
    Optional,
    Help,
    Error,
    Inline,
    RadioButtonList
  }
})
export default class Examples extends Vue {}
</script>
