<template lang="pug">
  div
    h2 Examples
    p.-text To render a select, apply the class <code>chi-select</code> to a <code>select</code>.

    <Base />
    <Disabled />
    <Required />
    <Optional />
    <Help />
    <Message />
    <Error />
    <Sizes />
    <FloatingLabels />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Required from './_required.vue';
import Optional from './_optional.vue';
import Help from './_help.vue';
import Message from './_message.vue';
import Error from './_error.vue';
import Sizes from './_sizes.vue';
import FloatingLabels from './_floating-labels.vue';

@Component({
  components: {
    Base,
    Disabled,
    Required,
    Optional,
    Help,
    Message,
    Error,
    Sizes,
    FloatingLabels
  }
})
export default class Examples extends Vue {}
</script>
