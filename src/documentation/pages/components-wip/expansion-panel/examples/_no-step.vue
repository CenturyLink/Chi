<template lang="pug">
<ComponentExample title="No step number" id="no-step-number" :tabs="exampleTabs" padding="-p--3 -p-lg--6" additionalClasses="-bg--grey-10">
  template(#example-description)
    p.-text Step numbering is optional and can be easily omitted.
  template(#example)
    .-mw--720.-mx--auto
      chi-expansion-panel(v-for="(panel, index) in panels" :key="index" :title="panel.title" :state="active === index ? 'active' : active > index ? 'done' : 'pending'")
        div(slot="active")
          .chi-epanel__subtitle
            | {{ panel.subtitle }}
          p.chi-epanel__text
            | {{ panel.content }}
        div(slot="done")
          | {{ panel.doneContent }}
        div(slot="footer")
          chi-button(@click="active -= 1" v-if="index")
            | Previous
          chi-button(@click="active += 1" color="primary") {{ index + 1 === panels.length ? 'Finish' : 'Continue' }}
        div(slot="change")
          chi-button(@click="active = index" color="primary" variant="flat")
            | Edit
  template(#code-webcomponent)
    .chi-tab__description
      | Step numbering can be omitted by removing the <code>step</code> property.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-vue)
    Copy(lang="html" :code="codeSnippets.vue" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    .p--text.chi-tab__description
      | Step numbering can be omitted by applying <code>-no-step</code> to <code>chi-epanel</code>
      | and removing <code>chi-epanel__number</code>.
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
      active: 0,
      panels: [
        {
          state: 'done',
          subtitle: 'Optional subtitle',
          title: 'Panel title',
          content: 'Content in expansion panel (e.g. a form to select a product package)',
          doneContent:
            'Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection',
        },
        {
          state: 'active',
          subtitle: 'Optional subtitle',
          title: 'Panel title',
          content: 'Content in expansion panel (e.g. a form to enter shipping address)',
          doneContent:
            'Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address',
        },
        {
          state: 'pending',
          subtitle: 'Optional subtitle',
          title: 'Panel title',
          content: 'Content in expansion panel (e.g. a form to select installation date)',
          doneContent:
            'Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date',
        },
        {
          state: 'disabled',
          subtitle: 'Optional subtitle',
          title: 'Panel title',
          content: 'Content in expansion panel (e.g. a form to enter payment method)',
          doneContent:
            'Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-expansion-panel title="Panel title" state="active">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      Optional subtitle 1
    </div>
    <p class="chi-epanel__text">
      Content in expansion panel (e.g. a form to select a product package)
    </p>
  </div>
  <div slot="footer">
    <chi-button color="primary">
      Continue
    </chi-button>
  </div>
</chi-expansion-panel>
<chi-expansion-panel title="Panel title"></chi-expansion-panel>
<chi-expansion-panel title="Panel title"></chi-expansion-panel>
<chi-expansion-panel title="Panel title"></chi-expansion-panel>`,
        vue: `<chi-vue-expansion-panel v-for="(panel, index) in panels" :key="index" title="Title" :state="active === index ? 'active' : active > index ? 'done' : 'pending'">
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
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Edit</button>
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
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__no-step-number"]'));<\/script>

<!-- HTML -->
<div class="chi-epanel -no-step -active" data-chi-epanel-group="example__no-step-number">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse -ml--0">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 1.
          (e.g.) a package selection
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
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
<div class="chi-epanel -no-step" data-chi-epanel-group="example__no-step-number">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse -ml--0">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 2.
          (e.g.) shipping address
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
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
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel -no-step" data-chi-epanel-group="example__no-step-number">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse -ml--0">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 3.
          (e.g.) installation date
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
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
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel -no-step" data-chi-epanel-group="example__no-step-number">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse -ml--0">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 4.
          (e.g.) payment method
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
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
          <button class="chi-button -primary" data-chi-epanel-action="done">Finish</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
    };
  },
})
export default class NoStep extends Vue {}
</script>
