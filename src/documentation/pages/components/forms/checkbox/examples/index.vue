<template lang="pug">
  div
    h2 Examples
   
    <Base />
    <Checked />
    <Indeterminate />
    <Disabled />
    <Required />
    <Help />
    <Message />
    <Error />

    h2 Layout Variations

    <Stacked />
    <Grid />
    <Inline />
    <CheckboxList />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Checked from './_checked.vue';
import Indeterminate from './_indeterminate.vue';
import Disabled from './_disabled.vue';
import Required from './_required.vue';
import Help from './_help.vue';
import Message from './_message.vue';
import Error from './_error.vue';
import Stacked from './_stacked.vue';
import Grid from './_grid.vue';
import Inline from './_inline.vue';
import CheckboxList from './_checkbox_list.vue';

@Component({
  components: {
    Base,
    Checked,
    Indeterminate,
    Disabled,
    Required,
    Help,
    Message,
    Error,
    Stacked,
    Grid,
    Inline,
    CheckboxList
  }
})
export default class CheckboxExamples extends Vue {}
</script>
