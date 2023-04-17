<template lang="pug">
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      props: [],
      events: [],
      methods: [],
      docs: Vue.prototype.$chiDocs
    };
  }
})
export default class PropertiesGenerator extends Vue {
  @Prop({ required: true }) tag!: string;

  getEventDetailType(detail: string): string {
    return `CustomEvent<${detail}>`;
  }

  created() {
    const component = this.$data.docs.components?.find(
      (component: {tag: string}) => component.tag === this.tag
    );

    if (component) {
      this.$data.props = component.props;
      this.$data.events = component.events;
      this.$data.methods = component.methods;
    }
  }
}
</script>
