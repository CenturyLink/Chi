<template lang="pug">
  div
    h2 Examples
    h3 Multi-select pickers
    p.-text Use multi-select pickers when more than one option can be chosen.

    <Base />
    <Checked />
    <Disabled />
    <Required />
    <Optional />
    <Help />
    <Error />
    <SingleSelectPickers />

    h2 Content Variations
    <Checkbox />
    <CheckboxDescription />
    <RadioButton />
    <RadioButtonDescription />
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
import SingleSelectPickers from './_single-select.vue';
import Checkbox from './_checkbox.vue';
import CheckboxDescription from './_checkbox-description.vue';
import RadioButton from './_radio-button.vue';
import RadioButtonDescription from './_radio-button-description.vue';

@Component({
  components: {
    Base,
    Checked,
    Disabled,
    Required,
    Optional,
    Help,
    Error,
    SingleSelectPickers,
    Checkbox,
    CheckboxDescription,
    RadioButton,
    RadioButtonDescription
  }
})
export default class Examples extends Vue {}
</script>
