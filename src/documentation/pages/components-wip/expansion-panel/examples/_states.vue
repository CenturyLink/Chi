<template lang="pug">
<ComponentExample title="States" id="states" :tabs="exampleTabs" padding="-p--3 -p-lg--6" additionalClasses="-bg--grey-10">
  template(#example-description)
    p.-text
      | Expansion panels have four states: <code>active</code>, <code>pending</code>, <code>done</code> and
      | <code>disabled</code>. When <code>pending</code> (default state), only the title is shown. When
      | <code>active</code>, panels expand to show content or forms. When <code>done</code>, content or form
      | data is presented in a read only state. When <code>disabled</code>, a muted title is shown in a
      | non-clickable state.
    p.-text
      | The four examples below differ only by state. Thanks to the state support and two internal hiding utility
      | classes we can represent the different states of the same content changing only the property.
    p.-text
      | An optional cancel button can also be included to exit the expansion panel workflow.
  template(#example)
    .-mw--720.-mx--auto
      chi-expansion-panel(v-for="(panel, index) in panels" :key="index" :step="index + 1" :title="panel.title" :state="getState(panel.state, active, index)")
        div(slot="active")
          .chi-epanel__subtitle
            | {{ panel.subtitle }}
          p.chi-epanel__text
            | {{ panel.content }}
        div(slot="done")
          | {{ panel.doneContent }}
        div(slot="footer")
          chi-button(color="primary" variant="flat" v-if="panel.state === 'active'")
            | Cancel
          chi-button(@click="active -= 1" v-if="index")
            | Previous
          chi-button(@click="active += 1" color="primary") Continue
        div(slot="change")
          chi-button(@click="active = index" color="primary" variant="flat")
            | Change
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-vue)
    Copy(lang="html" :code="codeSnippets.vue" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'vue',
          label: 'Vue',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      active: 1,
      panels: [
        {
          state: 'done',
          content: 'Content for the panel in done state',
          title: 'Done state',
          subtitle: 'Optional subtitle',
          doneContent:
            'Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection',
        },
        {
          state: 'active',
          content: 'Content for the panel in active state',
          title: 'Active state',
          subtitle: 'Optional subtitle',
          doneContent:
            'Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) shipping address',
        },
        {
          state: 'pending',
          content: 'Content for the panel in pending state',
          title: 'Pending state',
          subtitle: 'Optional subtitle',
          doneContent:
            'Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) installation date',
        },
        {
          state: 'disabled',
          content: 'Content for the panel in disabled state',
          title: 'Disabled state',
          subtitle: 'Optional subtitle',
          doneContent:
            'Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.)',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- Done state -->
<chi-expansion-panel step="1" title="Done panel" state="done">
  <div slot="done">
    Use this area to present
    a read-only summary of what the user
    entered or selected in step 1.
    (e.g.) a package selection
  </div>
  <div slot="change">
    <chi-button color="primary" variant="flat">
      Change
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Active state -->
<chi-expansion-panel step="2" title="Active panel" state="active">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      Optional subtitle
    </div>
    <p class="chi-epanel__text">
      Content in expansion panel (e.g. a form to enter shipping address)
    </p>
  </div>
  <div slot="footer">
    <chi-button color="primary" variant="flat">
      Cancel
    </chi-button>
    <chi-button color="primary" variant="outline">
      Previous
    </chi-button>
    <chi-button color="primary">
      Continue
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Pending state -->
<chi-expansion-panel step="3" title="Pending panel"></chi-expansion-panel>
<!-- Disabled state -->
<chi-expansion-panel step="4" title="Disabled panel" state="disabled"></chi-expansion-panel>`,
        vue: `<chi-vue-expansion-panel v-for="(panel, index) in panels" :key="index" :step="index + 1" title="Title" :state="active === index ? 'active' : panel.state">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      {{ panel.title }}
    </div>
    <p class="chi-epanel__text">
      {{ panel.content }}
    </p>
  </div>
  <div slot="done">
    Use this area to present<br />
    a read-only summary of what the user<br />
    entered or selected in step 1.<br />
    (e.g.) a package selection
  </div>
  <button slot="footerStart" class="chi-button" @click="active = index - 1">Previous</button>
  <button slot="footerEnd" class="chi-button -primary" @click="active = index + 1">
    Continue
  </button>
  <div slot="change">
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Change</button>
  </div>
</chi-vue-expansion-panel>

<!-- Data and Methods -->
data: {
  active: 1,
  panels: [
    {
      state: "done",
      content: "Content for the panel in done state",
      title: "Done state"
    },
    {
      state: "active",
      content: "Content for the panel in active state",
      title: "Active state"
    },
    {
      state: "pending",
      content: "Content for the panel in pending state",
      title: "Pending state"
    },
    {
      state: "disabled",
      content: "Content for the panel in disabled state",
      title: "Disabled state"
    }
  ]
}
`,
        htmlblueprint: `<!-- JavaScript -->
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__state"]'));<\/script>
<!-- HTML -->
<!-- Done state -->
<div class="chi-epanel -done" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">1.</div>
    <div class="chi-epanel__title">Done state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 1.
          (e.g.) a package selection
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select a product package)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Active state -->
<div class="chi-epanel -active" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">2.</div>
    <div class="chi-epanel__title">Active state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 2.
          (e.g.) shipping address
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter shipping address)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -flat -primary">Cancel</button>
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Pending state -->
<div class="chi-epanel -pending" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">3.</div>
    <div class="chi-epanel__title">Pending state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 3.
          (e.g.) installation date
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select installation date)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="done">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Disabled state -->
<div class="chi-epanel -disabled" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">4.</div>
    <div class="chi-epanel__title">Disabled state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 4.
          (e.g.) payment method
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter payment method)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Finish</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
    };
  },
  methods: {
    getState: (state: string, active: number, index: number) => {
      if (state === 'disabled') {
        return state;
      }

      return active === index ? 'active' : active > index ? 'done' : 'pending';
    },
  },
})
export default class States extends Vue {}
</script>
