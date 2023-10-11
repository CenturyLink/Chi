<template lang="pug">
  div
    <TitleAnchor title="Align content" id="align-content" titleSize="h3"/>
    p.-text Use align-content utilities on flexbox containers to alter the alignment of flex items <span class="-text--bold">together</span> on the cross axis.
    <Start />
    <End />
    <Center />
    <Around />
    <Between />
    <Stretch />
    <SpecificBreakpoints />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Start from './_start.vue';
import End from './_end.vue';
import Center from './_center.vue';
import Around from './_around.vue';
import Between from './_between.vue';
import Stretch from './_stretch.vue';
import SpecificBreakpoints from './_specific-breakpoints.vue';

@Component({
  components: {
    Start,
    End,
    Center,
    Around,
    Between,
    Stretch,
    SpecificBreakpoints,
  }
})
export default class AlignContent extends Vue {}
</script>
