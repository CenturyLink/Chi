<template lang="pug">
  <ComponentExample title="Icons" id="icons" :tabs="exampleTabs">
    fieldset(slot="example")
      legend.chi-label Select an option
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='unique-name-ic', :id="`unique-id-ic${item}`" :checked="item === 1")
            label(:ref="`tooltip-${item}`" :for="`unique-id-ic${item}`" :data-tooltip="`Option ${item}`"  data-position="bottom")
              span.-sr--only Option {{ item }}
              i.chi-icon.icon-atom.-sm(aria-hidden="true")
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
      pickers: [1, 2, 3],
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
        webcomponent: ``,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-ic" id="unique-id-ic1" checked>
      <label for="unique-id-ic1" data-tooltip="Option 1" data-position="bottom">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-ic" id="unique-id-ic2">
      <label for="unique-id-ic2" data-tooltip="Option 2" data-position="bottom">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-ic" id="unique-id-ic3">
      <label for="unique-id-ic3" data-tooltip="Option 3" data-position="bottom">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>

<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`
      }
    };
  }
})
export default class Icons extends Vue {
  tooltips: any[] = [];

  mounted() {
    this.$data.pickers.forEach((item: string) => {
      this.tooltips.push(chi.tooltip(this.$refs[`tooltip-${item}`] as HTMLElement));
    });
  }

  beforeDestroy() {
    this.tooltips.forEach((tooltip: any) => {
      tooltip[0].dispose();
    });
  }
}
</script>
