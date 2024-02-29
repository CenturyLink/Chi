<template lang="pug">
  div
    <TitleAnchor title="Display" id="display" titleSize="h3"/>
    p.-text To enable flex, apply a flex display utility class. This will transform your element into a flexbox container and its direct children into flex items.
    <FlexboxContainer />
    <InlineFlexboxContainer />
    <SpecificBreakpoints/>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import FlexboxContainer from './_flexbox-container.vue';
import InlineFlexboxContainer from './_inline-flexbox-container.vue';
import SpecificBreakpoints from './_specific-breakpoints.vue';

@NuxtComponent({
  components: {
    FlexboxContainer,
    InlineFlexboxContainer,
    SpecificBreakpoints,
  },
})
export default class Display extends Vue {}
</script>
