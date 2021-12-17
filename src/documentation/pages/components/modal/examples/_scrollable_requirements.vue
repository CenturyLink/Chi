<template lang="pug">
<ComponentExample title="Requirements" titleSize="h4" id="requirements" padding="-p--0" :tabs="exampleTabs">
  p.-text(slot="example-description")
    | A max-height must be defined on <code>chi-modal__content</code>. Use max-height utility classes
    | such as <code>-mh--400</code> or <code>-mh--480</code>, or define your own value.
  .chi-backdrop.-p--6.-position--relative.-z--0(slot="example")
    .chi-backdrop__wrapper
      section.chi-modal(role="dialog", aria-label="Modal description", aria-modal="true", style="margin-top:0;")
        header.chi-modal__header
          h2.chi-modal__title Modal Title
          button(class='chi-button -icon -close', aria-label='Close')
            .chi-button__content
              i.chi-icon.icon-x(aria-hidden="true")
        .chi-modal__content.-mh--400
          p.-text.-mt--0
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
          p.-text
            | Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque.
          p.-text
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
          p.-text
            | Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque.
            | Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac odio quis sem placerat porta vel nec leo. Phasellus et malesuada nisi.
          p.-text
            | Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa.
            | Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat.
            | Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat,
            | cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.
        footer.chi-modal__footer
          button.chi-button Cancel
          button.chi-button.-primary Save
  <Wrapper slot="code-webcomponent">
    <pre class="language-html">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
  </Wrapper>
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<!-- Trigger -->
<button id="modal-trigger-3" class="chi-button chi-modal__trigger" data-target="#modal-3">
  Launch scrollable modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-3" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Title</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content -mh--400">
        <p class="-text -mt--0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa.
          Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat,
          cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.
        </p>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button" data-dismiss="modal">Cancel</button>
        <button class="chi-button -primary">Save</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-3'));<\/script>`,
      },
    };
  },
})
export default class ScrollReq extends Vue {}
</script>
