<template lang="pug">
  div This is written with no condition ||| isPropsLoaded: {{ isPropsLoaded }}
    div(v-if="isPropsLoaded")
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
                    code(v-if="prop.attr") {{ prop.attr }}
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

    div(v-if="events.length")
      h3 Events
      section.chi-table.chi-table__options.-bordered.-my--3
        div(style='overflow-x:auto')
          table.-text(cellpadding='0', cellspacing='0')
            thead
              tr
                th
                  div Event
                th
                  div Description
                th
                  div Type
            tbody
              tr(v-for="ev in events")
                td
                  div
                    code {{ ev.event }}
                td
                  div {{ ev.docs }}
                td
                  div
                    code {{ getEventDetailType(ev.detail) }}

    div(v-if="methods.length")
      h3 Methods
      section.chi-table.chi-table__options.-bordered.-my--3
        div(style='overflow-x:auto')
          table.-text(cellpadding='0', cellspacing='0')
            thead
              tr
                th
                  div Method
                th
                  div Description
                th
                  div Returns
                th
                  div Parameters
            tbody
              tr(v-for="method in methods")
                td
                  div
                    code {{ method.signature }}
                td
                  div {{ method.docs }}
                td
                  div
                    p(v-if="method.returns").-text Type: {{ method.returns.type }}
                td
                  div(v-if="method.parameters.length")
                    div(v-for="parameter in method.parameters")
                      |{{ parameter.name }}:
                      code {{ parameter.type }}
                      div(v-if="parameter.docs")
                        | Description:
                        code {{ parameter.docs }}
                  div.-text--center(v-else)
                    | -
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component({
  data: () => {
    return {
      props: [],
      events: [],
      methods: [],
      docs: null
    };
  },
  computed: {
    isPropsLoaded() {
      return this.$data.props.length > 0;
    }
  }
})
export default class PropertiesGenerator extends Vue {
  @Prop({ required: true }) tag!: string;

  getEventDetailType(detail: string): string {
    return `CustomEvent<${detail}>`;
  }

  async getDocs() {
    try {
      const response = await axios.get("https://assets.ctl.io/chi/5.41.0/js/ce/docs.json");
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async created() {
    console.log('created hook started')
    if (Vue.prototype.$chiDocs) {
      console.log('got docs from vue prototype chidocs')
      this.$data.docs = Vue.prototype.$chiDocs;
    }
    else {
      console.log('force re-getting docs')
      this.$data.docs = await this.getDocs()
    }

    const component = this.$data.docs.components?.find(
      (component: { tag: string }) => component.tag === this.tag
    );

    if (component) {
      this.$data.props = component.props;
      this.$data.events = component.events;
      this.$data.methods = component.methods;
    }
  }
}
</script>
