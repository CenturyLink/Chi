<template lang="pug">
<ComponentExample title="Interaction" id="interaction" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Read this handy introduction to
      a(href='/getting-started') HTML attributes and DOM properties
      | .
  template(#example)
    chi-button.-mr--2.-mb--2.-mb-md--0(@click="show") Show
    chi-button.-mr--2.-mb--2.-mb-md--0(@click="hide") Hide
    chi-button.-mr--2.-mb--2.-mb-md--0(@click="toggle") Toggle
    chi-button#example-5-button-reference.-mr--2.-mb--2.-mb-md--0 Reference

    chi-popover(
      ref="popover"
      position='top',
      title='Popover title',
      variant='text',
      arrow,
      reference='#example-5-button-reference'
    )
      | Popover content

  template(#code-webcomponent)
    .chi-tab__description
      | Modify the <code>active</code> attribute or property to make the popover show or hide. The <code>chi-popover</code>
      | element also has three public methods to interact with it: <code>show()</code>, <code>hide()</code>,
      | <code>toggle()</code>.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    <JSNeeded />
    .chi-tab__description
      | Use methods <code>.show()</code>, <code>.hide()</code>, and <code>.toggle()</code>
      | to control popover visibility.
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Interaction extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: `<chi-button id="example-5-button-show">Show</chi-button>
<chi-button id="example-5-button-hide">Hide</chi-button>
<chi-button id="example-5-button-toggle">Toggle</chi-button>
<chi-button id="example-5-button-reference">Reference</chi-button>

<chi-popover id="example-5-popover" position="top" title="Popover title" variant="text" arrow reference="#example-5-button-reference">
  Popover content
</chi-popover>

<script>
  var popover5 = document.getElementById('example-5-popover');

  var bShow = document.getElementById('example-5-button-show');
  bShow.addEventListener('click', function(){
    popover5.show();
    // or popover5.active = true;
  });

  var bHide = document.getElementById('example-5-button-hide');
  bHide.addEventListener('click', function () {
    popover5.hide();
    // or popover5.active = false;
  });

  var bToggle = document.getElementById('example-5-button-toggle');
  bToggle.addEventListener('click', function(){
    popover5.toggle();
    // or popover5.active = !popover5.active;
  });
<\/script>`,
    htmlblueprint: `<button id='show-popover-3' class="chi-button">Show</button>
<button id='hide-popover-3' class="chi-button">Hide</button>
<button id='toggle-popover-3' class="chi-button">Toggle</button>
<button id='popover-3' class="chi-button" data-popover-content='<div class="chi-popover__content">Foo</div>'>Popover</button>
<script>
  var popover = chi.popover(
    document.getElementById('popover-3'),
    {
      trigger: 'manual',
      preventAutoHide: true
    }
  );
  document.getElementById('show-popover-3').addEventListener('click', function(e) {
    popover.show()
  });
  document.getElementById('hide-popover-3').addEventListener('click', function(e) {
    popover.hide()
  });
  document.getElementById('toggle-popover-3').addEventListener('click', function(e) {
    popover.toggle()
  });
<\/script>`,
  }
  show() {
    (this.$refs.popover as any).show();
  }

  hide() {
    (this.$refs.popover as any).hide();
  }

  toggle() {
    (this.$refs.popover as any).toggle();
  }
}
</script>
