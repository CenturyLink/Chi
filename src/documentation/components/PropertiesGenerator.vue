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
              td(v-if="props[0].name !== 'extraClass'")
                div
                  code {{ props[0].name }}
                  strong(v-if="props[0].required") (required)
              td(v-if="props[0].name !== 'extraClass'")
                div
                  code(v-if="props[0].attr") {{ props[0].attr }}
                  div(v-else)| --
              td(v-if="props[0].name !== 'extraClass'")
                div
                  div(v-if="props[0].deprecation !== undefined").-text--danger **[DEPRECATED]** {{ props[0].deprecation }}
                  | {{ props[0].docs }}
              td(v-if="props[0].name !== 'extraClass'")
                div
                  code {{ props[0].type }}
              td(v-if="props[0].name !== 'extraClass'")
                div
                  code(v-if="props[0].default") {{ props[0].default }}
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
