<template lang="pug">
  <ComponentExample title="States" id="states" :tabs="exampleTabs" padding="-p--0">
    div(slot="example-description")
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
    .example.-mb--3#example__state(slot="example")
      .-mw--720.-mx--auto.-mt--4
        .chi-epanel.-done(data-chi-epanel-group='example__state')
          .chi-epanel__header
            .chi-epanel__number 1.
            .chi-epanel__title Done state
            .chi-epanel__content
              .chi-epanel__collapse
                .-done--only
                  | Use this area to present
                  | a read-only summary of what the user
                  | entered or selected in step 1.
                  | (e.g.) a package selection
            .chi-epanel__action.-done--only
              button.chi-button.-primary.-flat(data-chi-epanel-action="active") Change
          .chi-epanel__collapse
            .-active--only
              .chi-epanel__body
                .chi-epanel__content
                  .chi-epanel__subtitle Optional subtitle
                  p.chi-epanel__text Content in expansion panel (e.g. a form to select a product package)
                .chi-epanel__footer.-justify-content--end
                  button.chi-button(data-chi-epanel-action='next').-primary Continue

        .chi-epanel.-active(data-chi-epanel-group='example__state')
          .chi-epanel__header
            .chi-epanel__number 2.
            .chi-epanel__title Active state
            .chi-epanel__content
              .chi-epanel__collapse
                .-done--only
                  | Use this area to present
                  | a read-only summary of what the user
                  | entered or selected in step 2.
                  | (e.g.) shipping address
            .chi-epanel__action.-done--only
              button.chi-button.-primary.-flat(data-chi-epanel-action="active") Change
          .chi-epanel__collapse
            .-active--only
              .chi-epanel__body
                .chi-epanel__content
                  .chi-epanel__subtitle Optional subtitle
                  p.chi-epanel__text Content in expansion panel (e.g. a form to enter shipping address)
                .chi-epanel__footer.-justify-content--end
                  button.chi-button.-primary.-flat Cancel
                  button.chi-button(data-chi-epanel-action='previous') Previous
                  button.chi-button(data-chi-epanel-action='next').-primary Continue

        .chi-epanel.-pending(data-chi-epanel-group='example__state')
          .chi-epanel__header
            .chi-epanel__number 3.
            .chi-epanel__title Pending state
            .chi-epanel__content
              .chi-epanel__collapse
                .-done--only
                  | Use this area to present
                  | a read-only summary of what the user
                  | entered or selected in step 3.
                  | (e.g.) installation date
            .chi-epanel__action.-done--only
              button.chi-button.-primary.-flat(data-chi-epanel-action="active") Change
          .chi-epanel__collapse
            .-active--only
              .chi-epanel__body
                .chi-epanel__content
                  .chi-epanel__subtitle Optional subtitle
                  p.chi-epanel__text Content in expansion panel (e.g. a form to select installation date)
                .chi-epanel__footer.-justify-content--end
                  button.chi-button(data-chi-epanel-action='previous') Previous
                  button.chi-button(data-chi-epanel-action='done').-primary Continue

        .chi-epanel.-disabled(data-chi-epanel-group='example__state')
          .chi-epanel__header
            .chi-epanel__number 4.
            .chi-epanel__title Disabled state
            .chi-epanel__content
              .chi-epanel__collapse
                .-done--only
                  | Use this area to present
                  | a read-only summary of what the user
                  | entered or selected in step 4.
                  | (e.g.) payment method
            .chi-epanel__action.-done--only
              button.chi-button.-primary.-flat(data-chi-epanel-action="active") Change
          .chi-epanel__collapse
            .-active--only
              .chi-epanel__body
                .chi-epanel__content
                  .chi-epanel__subtitle Optional subtitle
                  p.chi-epanel__text Content in expansion panel (e.g. a form to enter payment method)
                .chi-epanel__footer.-justify-content--end
                  button.chi-button(data-chi-epanel-action='previous') Previous
                  button.chi-button(data-chi-epanel-action='done').-primary Finish
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

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
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
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
</div>`
      }
    };
  }
})

export default class Base extends Vue {
  mounted() {
    const panel = document.querySelectorAll('[data-chi-epanel-group="example__state"]');
    chi.expansionPanel(panel);
  }
}

</script>
