<template lang="pug">
  <ComponentExample title="Bordered" id="bordered" :tabs="exampleTabs" padding="-p--3 -p-lg--6" additionalClasses="-bg--grey-10">
    p.-text(slot="example-description") Use bordered to apply borders to panels and contain them in card styled boxes.
    .-mw--720.-mx--auto(slot="example")
      chi-expansion-panel(v-for="(panel, index) in panels" :key="index" :title="panel.title" :state="getState(panel.state, active, index)" :bordered="true")
        div(slot='active')
          .chi-epanel__subtitle
            | {{ panel.subtitle }}
          p.chi-epanel__text
            | {{ panel.content }}
        div(slot="done")
          | {{ panel.doneContent }}
        div(slot="footer")
          chi-button(@click="active -= 1" v-if="index")
            | Previous
          chi-button(@click="active += 1" color="primary") Continue
        chi-button(slot='change' @click="active = index" color="primary" variant="flat")
          | Change
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | To render bordered panels, apply the property <code>bordered</code>.
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    </Wrapper>
    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      .p--text.chi-tab__description
        | To render bordered panels, apply the class <code>-bordered</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'vue',
          label: 'Vue'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      active: 1,
      panels: [
        {
          state: "done",
          content: "Content goes here",
          subtitle: "Optional subtitle",
          title: "Done State",
          doneContent: "Use this area to present a read-only summary of what the user entered or selected in step 1.",
        },
        {
          state: "active",
          content: "Content goes here",
          subtitle: "Optional subtitle",
          title: "Active State",
          doneContent: "Use this area to present a read-only summary of what the user entered or selected in step 2.",
        },
        {
          state: "pending",
          content: "Content goes here",
          subtitle: "Optional subtitle",
          title: "Pending State",
          doneContent: "Use this area to present a read-only summary of what the user entered or selected in step 3.",
        },
        {
          state: "disabled",
          content: "Content goes here",
          subtitle: "Optional subtitle",
          title: "Disabled State",
          doneContent: "Use this area to present a read-only summary of what the user entered or selected in step 4.",
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- Done state -->
<chi-expansion-panel title="Done panel" bordered state="done">
  <div slot="done">
    Use this area to present
    a read-only summary of what the user
    entered or selected in step 1.
  </div>
  <div slot="change">
    <chi-button color="primary" variant="flat">
      Change
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Active state -->
<chi-expansion-panel title="Active panel" bordered state="active">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      Optional subtitle
    </div>
    <p class="chi-epanel__text">
      Content goes here
    </p>
  </div>
  <div slot="footer">
    <chi-button color="primary">
      Continue
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Pending state -->
<chi-expansion-panel title="Pending panel" bordered></chi-expansion-panel>
<!-- Disabled state -->
<chi-expansion-panel title="Disabled panel" bordered state="disabled"></chi-expansion-panel>`,
        vue:
`<chi-vue-expansion-panel v-for="(panel, index) in panels" :key="index" :step="index + 1" title="Title"
            :state="active === index ? 'active' : active > index ? 'done' : 'pending'" :bordered="true" >
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
  <button slot="footerStart" class="chi-button" @click="active -= 1">Previous</button>
  <button slot="footerEnd" class="chi-button -primary" @click="active += 1">
    Continue
  </button>
  <div slot="change">
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Change</button>
  </div>
</chi-vue-expansion-panel>

<!-- Data and Methods -->
data: {
  active: 0,
  panels: [
    {
      content: "Content for the panel in done state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in active state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in pending state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in disabled state",
      title: "Panel title"
    }
  ]
}
`,
        htmlblueprint: `<!-- JavaScript -->
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__bordered"]'));<\/script>

<!-- HTML -->
<!-- Done state -->
<div class="chi-epanel -bordered -done" data-chi-epanel-group="example__bordered">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Done state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 1.
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
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Active state -->
<div class="chi-epanel -bordered -active" data-chi-epanel-group="example__bordered">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Active state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 2.
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
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Pending state -->
<div class="chi-epanel -bordered -pending" data-chi-epanel-group="example__bordered">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Pending state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 3.
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
          <p class="chi-epanel__text">Content goes here</p>
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
<div class="chi-epanel -bordered -disabled" data-chi-epanel-group="example__bordered">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Disabled state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 4.
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
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Finish</button>
        </div>
      </div>
    </div>
  </div>
</div>`
      }
    };
  },
  methods: {
    getState: (state: string, active: number, index: number) => {
      if (state === 'disabled') {
        return 'disabled';
      }

      return active === index ? 'active' : active > index ? 'done' : 'pending';
    }
  }
})
export default class Bordered extends Vue {}
</script>
