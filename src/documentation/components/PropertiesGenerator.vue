<template lang="pug">
  div
    h3 Properties
    section.chi-table.chi-table__options.-bordered.-my--3
      div(style='overflow-x:auto')
        table.-text(cellpadding='0', cellspacing='0')
          thead
            tr
              th
                div Property
              th
                div Attribute
              th
                div Description
              th
                div Type
              th
                div Default
          tbody
            tr
              td
                div
                  code hola
                  strong (required)

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
