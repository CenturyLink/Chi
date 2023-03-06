<template lang="pug">
  <ComponentExample title="Bordered" id="bordered" :tabs="exampleTabs" padding="-p--0">
    p.-text(slot="example-description") Use bordered to apply borders to panels and contain them in card styled boxes.
    .example.-mb--3#example__bordered
      .-mw--720.-mx--auto.-mt--4
        .chi-epanel.-bordered(data-chi-epanel-group='example__bordered')
          .chi-epanel__header
            .chi-epanel__title Done State
            .chi-epanel__content
              .chi-epanel__collapse
                .-done--only
                  | Use this area to present
                  | a read-only summary of what the user
                  | entered or selected in step 1.
            .chi-epanel__action.-done--only
              button.chi-button.-primary.-flat(data-chi-epanel-action="active") Change
          .chi-epanel__collapse
            .-active--only
              .chi-epanel__body
                .chi-epanel__content
                  .chi-epanel__subtitle Optional subtitle
                  p.chi-epanel__text Content goes here
                .chi-epanel__footer.-justify-content--end
                  button.chi-button(data-chi-epanel-action='next').-primary Continue

        .chi-epanel.-bordered.-active(data-chi-epanel-group='example__bordered')
          .chi-epanel__header
            .chi-epanel__title Active State
            .chi-epanel__content
              .chi-epanel__collapse
                .-done--only
                  | Use this area to present
                  | a read-only summary of what the user
                  | entered or selected in step 2.
            .chi-epanel__action.-done--only
              button.chi-button.-primary.-flat(data-chi-epanel-action="active") Change
          .chi-epanel__collapse
            .-active--only
              .chi-epanel__body
                .chi-epanel__content
                  .chi-epanel__subtitle Optional subtitle
                  p.chi-epanel__text Content goes here
                .chi-epanel__footer.-justify-content--end
                  button.chi-button(data-chi-epanel-action='previous') Previous
                  button.chi-button(data-chi-epanel-action='next').-primary Continue

        .chi-epanel.-bordered(data-chi-epanel-group='example__bordered')
          .chi-epanel__header
            .chi-epanel__title Pending State
            .chi-epanel__content
              .chi-epanel__collapse
                .-done--only
                  | Use this area to present
                  | a read-only summary of what the user
                  | entered or selected in step 3.
            .chi-epanel__action.-done--only
              button.chi-button.-primary.-flat(data-chi-epanel-action="active") Change
          .chi-epanel__collapse
            .-active--only
              .chi-epanel__body
                .chi-epanel__content
                  .chi-epanel__subtitle Optional subtitle
                  p.chi-epanel__text Content goes here
                .chi-epanel__footer.-justify-content--end
                  button.chi-button(data-chi-epanel-action='previous') Previous
                  button.chi-button(data-chi-epanel-action='done').-primary Continue

        .chi-epanel.-bordered.-disabled(data-chi-epanel-group='example__bordered')
          .chi-epanel__header
            .chi-epanel__title Disabled State
            .chi-epanel__content
              .chi-epanel__collapse
                .-done--only
                  | Use this area to present
                  | a read-only summary of what the user
                  | entered or selected in step 4.
            .chi-epanel__action.-done--only
              button.chi-button.-primary.-flat(data-chi-epanel-action="active") Change
          .chi-epanel__collapse
            .-active--only
              .chi-epanel__body
                .chi-epanel__content
                  .chi-epanel__subtitle Optional subtitle
                  p.chi-epanel__text Content goes here
                .chi-epanel__footer.-justify-content--end
                  button.chi-button(data-chi-epanel-action='previous') Previous
                  button.chi-button(data-chi-epanel-action='done').-primary Finish

    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | To render bordered panels, apply the property <code>bordered</code>.
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      .p--text(class="chi-tab__description")
        | To render bordered panels, apply the class <code>-bordered</code>.
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
  }
})

export default class Base extends Vue {
  mounted() {
    const panel = document.querySelectorAll('[data-chi-epanel-group="example__bordered"]');
    chi.expansionPanel(panel);
  }
}

</script>
