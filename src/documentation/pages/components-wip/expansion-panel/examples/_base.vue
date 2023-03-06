<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs" padding="-p--0">
    p.-text(slot="example-description")
      |Group expansion panels using the attribute <code>data-chi-epanel-group="name-of-the-group"</code>.
      |This will enable panels to work together as a sequential form. When a panel is activated,
      |the previous expanding panels will get the done state and the next will get the pending state.
    .example.-mb--3#example__base(slot="example")
      .-mw--720.-mx--auto.-mt--4
        .chi-epanel.-active(data-chi-epanel-group='example__base')
          .chi-epanel__header
            .chi-epanel__number 1.
            .chi-epanel__title Panel title
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

        .chi-epanel(data-chi-epanel-group='example__base')
          .chi-epanel__header
            .chi-epanel__number 2.
            .chi-epanel__title Panel title
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
                  button.chi-button(data-chi-epanel-action='previous') Previous
                  button.chi-button(data-chi-epanel-action='next').-primary Continue

        .chi-epanel(data-chi-epanel-group='example__base')
          .chi-epanel__header
            .chi-epanel__number 3.
            .chi-epanel__title Panel title
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
                  button.chi-button(data-chi-epanel-action='next').-primary Continue

        .chi-epanel(data-chi-epanel-group='example__base')
          .chi-epanel__header
            .chi-epanel__number 4.
            .chi-epanel__title Panel title
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
        webcomponent: `<chi-expansion-panel step="1" title="Panel title" state="active">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      Optional subtitle
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
<chi-expansion-panel step="2" title="Panel title"></chi-expansion-panel>
<chi-expansion-panel step="3" title="Panel title"></chi-expansion-panel>
<chi-expansion-panel step="4" title="Panel title"></chi-expansion-panel>
`,
        htmlblueprint: `<!-- JavaScript -->
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__base"]'));<\/script>

<!-- HTML -->
<div class="chi-epanel -active" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">1.</div>
    <div class="chi-epanel__title">Panel title</div>
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
<div class="chi-epanel" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">2.</div>
    <div class="chi-epanel__title">Panel title</div>
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
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">3.</div>
    <div class="chi-epanel__title">Panel title</div>
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
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">4.</div>
    <div class="chi-epanel__title">Panel title</div>
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
          <button class="chi-button -primary" data-chi-epanel-action="done">Finish</button>
        </div>
      </div>
    </div>
  </div>
</div>
`
      }
    };
  }
})

export default class Base extends Vue {
  mounted() {
    const panel = document.querySelectorAll('[data-chi-epanel-group="example__base"]');
    chi.expansionPanel(panel);
  }
}

</script>
