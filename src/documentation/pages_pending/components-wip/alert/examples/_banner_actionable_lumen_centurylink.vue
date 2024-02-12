<template lang="pug">
  <ComponentExample title="Actionable" titleSize="h4" id="banner_actionable_lumen_centurylink" padding="-p--0" :tabs="exampleTabs">
    template(#example)
      .-p--1.-bg--grey-20
        ClientOnly
          chi-alert.-m--2(type='banner', icon='flag', size='lg', title="Base", closable)
            | This is a large closable alert
            //- template(#chi-alert__actions)
            //-   chi-button(color='primary') Action
    template(#code-webcomponent)
      .chi-tab__description
        span
          | Add buttons to an alert by defining <code>slot="chi-alert__actions"</code> on each <code>chi-button</code>.
      Copy(lang="html" :code="codeSnippets.webcomponent")

    template(#code-htmlblueprint)
      .chi-tab__description
        span
          | While <code>chi-alert__actions</code> can be added to any Alert, alert actions are best suited for default or Titled alerts with the size class <code>-lg</code>.
          br
          | Large Alerts have extra <code>chi-alert</code> padding, a larger <code>chi-alert__icon</code>, and a larger <code>chi-alert__close-button</code>.
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
          active: false,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-alert type="banner" icon="flag" size="lg" title="Base" closable>
  This is a large closable alert
  <chi-button slot="chi-alert__actions" color="primary">Action</chi-button>
</chi-alert>`,
        htmlblueprint: `<div class="chi-alert -banner -lg" role="alert">
<i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
<div class="chi-alert__content">
  <p class="chi-alert__title">Base</p>
  <p class="chi-alert__text">This is a large closable alert</p>
  <div class="chi-alert__actions">
    <button class="chi-button -primary">Action</button>
  </div>
</div>
<button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
  <div class="chi-button__content">
    <i class="chi-icon icon-x" aria-hidden="true"></i>
  </div>
</button>
</div>`,
      },
    };
  },
})
export default class BannerActionableLumenCenturyLink extends Vue { }
</script>
