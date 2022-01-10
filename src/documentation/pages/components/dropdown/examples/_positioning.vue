<template lang="pug">
  <ComponentExample title="Positioning" id="positioning" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Dropdown is prepared to work with positioning libraries like Popper.js. That is why we support the data-position
      | attribute. Chevron orientation will change depending on its value. Valid values are <code>default</code>,
      | <code>initial</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>,
      | <code>top-start</code>, <code>top-end</code>, <code>right-start</code>, <code>right-end</code>,
      | <code>bottom-start</code>, <code>bottom-end</code>, <code>left-start</code>, <code>left-end</code>.
    .chi-grid.-no-gutter.-px-xl--3(slot="example")
      .chi-col.-w--12.-w-xl--10.-o-xl--1.-d--flex.-justify-content-sm--around.-flex--wrap
        div.-p--1
          .chi-dropdown
            button#dropdown-top-start.chi-button.chi-dropdown__trigger(data-position="top-start") Top start
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        div.-p--1
          .chi-dropdown
            button#dropdown-top.chi-button.chi-dropdown__trigger(data-position="top") Top
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        div.-p--1
          .chi-dropdown
            button#dropdown-top-end.chi-button.chi-dropdown__trigger(data-position="top-end") Top end
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
      .chi-col.-w--12.-w-sm--4.-d--flex.-flex-sm--column.-flex--wrap
        div.-p--1.-py-sm--3
          .chi-dropdown
            button#dropdown-left-start.chi-button.chi-dropdown__trigger(data-position="left-start") Left start
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        div.-p--1.-py-sm--3
          .chi-dropdown
            button#dropdown-left.chi-button.chi-dropdown__trigger(data-position="left") Left
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        div.-p--1.-py-sm--3
          .chi-dropdown
            button#dropdown-left-end.chi-button.chi-dropdown__trigger(data-position="left-end") Left end
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
      .chi-col.-d--none.-w--12.-w-sm--4.-d-sm--flex.-flex-sm--column.-justify-content-sm--center.-align-items-sm--center
        div.-w--75.-text.-text--muted.-text--center.-lh--2 Click buttons to see Dropdown positions
      .chi-col.-w--12.-w-sm--4.-d--flex.-flex-sm--column.-align-items-sm--end.-flex--wrap
        div.-p--1.-py-sm--3
          .chi-dropdown
            button#dropdown-right-start.chi-button.chi-dropdown__trigger(data-position="right-start") Right start
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        div.-p--1.-py-sm--3
          .chi-dropdown
            button#dropdown-right.chi-button.chi-dropdown__trigger(data-position="right") Right
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        div.-p--1.-py-sm--3
          .chi-dropdown
            button#dropdown-right-end.chi-button.chi-dropdown__trigger(data-position="right-end") Right end
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
      .chi-col.-w--12.-w-xl--10.-o-xl--1.-d--flex.-justify-content-sm--around.-flex--wrap
        div.-p--1
          .chi-dropdown
            button#dropdown-bottom-start.chi-button.chi-dropdown__trigger(data-position="bottom-start") Bottom start
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        div.-p--1
          .chi-dropdown
            button#dropdown-bottom.chi-button.chi-dropdown__trigger(data-position="bottom") Bottom
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        div.-p--1
          .chi-dropdown
            button#dropdown-bottom-end.chi-button.chi-dropdown__trigger(data-position="bottom-end") Bottom end
            .chi-dropdown__menu(style="width: 15rem;")
              a.chi-dropdown__menu-item(href='#exampleLink') Item 1
              a.chi-dropdown__menu-item(href='#exampleLink') Item 2
              a.chi-dropdown__menu-item(href='#exampleLink') Item 3
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
      string: 'String',
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<!-- Top start -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-top-start" data-position="top-start">Top start</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Top -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-top" data-position="top">Top</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Top end -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-top-end" data-position="top-end">Top end</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Left start -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-left-start" data-position="left-start">Left start</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Left -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-left" data-position="left">Left</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Left end -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-left-end" data-position="left-end">Left end</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Right start -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-right-start" data-position="right-start">Right start</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Right -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-right" data-position="right">Right</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Right end -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-right-end" data-position="right-end">Right end</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Bottom start -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-bottom-start" data-position="bottom-start">Bottom start</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Bottom -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-bottom" data-position="bottom">Bottom</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Bottom end -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-bottom-end" data-position="bottom-end">Bottom end</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<!-- JavaScript -->
<\script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-dropdown__trigger'));<\/script>`
      }
    };
  }
})
export default class Positioning extends Vue {
  mounted() {
    chi.dropdown(
      document.querySelectorAll('.chi-dropdown .chi-dropdown__trigger')
    );
  }
}
</script>
