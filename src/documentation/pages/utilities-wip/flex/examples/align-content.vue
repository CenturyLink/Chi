<template lang="pug">
fragment
  <AnchorTitle title="Align content" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#align-content`" />
  p.-text Use align-content utilities on flexbox containers to alter the alignment of flex items <strong>together</strong> on the cross axis.

  fragment(v-for="(type, index) in types", :key="index")
    <AlignContentExample :title="type.title" :id="type.id" />

  p.-text Target specific breakpoints with Align content responsive classes.
  ul.-mb--3
    each type in ['start', 'end', 'center', 'around', 'between', 'stretch']
      li
        code=`-align-content--${type}`
    each size in ['sm', 'md', 'lg', 'xl']
      each type in ['start', 'end', 'center', 'around', 'between', 'stretch']
        li
          code=`-align-content-${size}--${type}`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlignContentExample from './_align-content-example.vue';

@Component({
  components: {
    AlignContentExample
  },
  data() {
    return {
      types: [
        { id: 'start', title: 'Start (default)' },
        { id: 'end', title: 'End' },
        { id: 'center', title: 'Center' },
        { id: 'around', title: 'Around' },
        { id: 'between', title: 'Between' },
        { id: 'stretch', title: 'Stretch' }
      ]
    };
  }
})
export default class AlignContent extends Vue {}
</script>
