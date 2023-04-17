<template lang="pug">
  div(v-if="props.length")
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
            tr(v-for="prop in props")
              td(v-if="prop.name !== 'extraClass'")
                div
                  code {{ prop.name }}
                  strong(v-if="prop.required") (required)
              td(v-if="prop.name !== 'extraClass'")
                div
                  code(v-if="prop.attr") {{prop.attr}}
                  div(v-else)| --
              td(v-if="prop.name !== 'extraClass'")
                div
                  div(v-if="prop.deprecation !== undefined").-text--danger **[DEPRECATED]** {{ prop.deprecation }}
                  | {{ prop.docs }}
              td(v-if="prop.name !== 'extraClass'")
                div
                  code {{ prop.type }}
              td(v-if="prop.name !== 'extraClass'")
                div
                  code(v-if="prop.default") {{ prop.default }}
                  em(v-else) undefined
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
    if (this.$data.docs) {
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
}
</script>
