<template lang="pug">
  <ComponentExample title="Base" id="base-portal" :tabs="exampleTabs">
    <Wrapper slot="example">
      .chi-stat
        div(v-for="(stat, index) in stats" :key="index" :class="stat.active ? 'chi-stat__item -active' : 'chi-stat__item'")
          .chi-stat__content
            .chi-stat-metric
              .chi-stat-metric__value
                | {{ stat.value }}
              .chi-stat-metric__title
                | {{ stat.title }}
            .chi-stat-submetric(v-if="stat.value2")
              .chi-stat-submetric__value
                | {{ stat.value2 }}
              .chi-stat-submetric__title
                | {{ stat.title2 }}
            .chi-label__help(v-if="!stat.active")
              button.chi-button.-icon.-xs.-flat(:id="`button-base-portal-${index}`" @click="togglePopover(`popover-${index}`)" aria-label="Help")
                i.chi-icon.icon-circle-info-outline(aria-hidden="true")
      chi-popover(v-for="index in stats.length-1" :key="index" :ref="`popover-${index}`" aria-modal="true" position="bottom" role="dialog" :reference="`#button-base-portal-${index}`")
        .chi-popover__content
          p.chi-popover__text
            | Helpful information goes here.
    </Wrapper>
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      stats: [
        {
          value: 'ALL',
          title: 'Services',
          active: true
        },
        {
          value: '366',
          title: 'Communications'
        },
        {
          value: '932',
          title: 'Hybrid & Cloud IT',
          value2: '0',
          title2: 'Recently Closed'
        },
        {
          value: '301',
          title: 'Managed & IT Services',
          value2: '6',
          title2: 'Recently Closed'
        },
        {
          value: '100',
          title: 'Networking & Cloud IT'
        },
        {
          value: '2',
          title: 'Security',
          value2: '0',
          title2: 'Recently Closed'
        }
      ],
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
        htmlblueprint: `<div class="chi-stat">
  <div class="chi-stat__item -active">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">ALL</div>
        <div class="chi-stat-metric__title">Services</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">366</div>
        <div class="chi-stat-metric__title">Communications</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button2" aria-label="Help" data-target="#example__portal-base-help-popover2" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">932</div>
        <div class="chi-stat-metric__title">Hybrid & Cloud IT</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">0</div>
        <div class="chi-stat-submetric__title">Recently Closed</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button3" aria-label="Help" data-target="#example__portal-base-help-popover3" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">301</div>
        <div class="chi-stat-metric__title">Managed & IT Services</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">6</div>
        <div class="chi-stat-submetric__title">Recently Closed</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button4" aria-label="Help" data-target="#example__portal-base-help-popover4" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">100</div>
        <div class="chi-stat-metric__title">Networking & Cloud IT</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button5" aria-label="Help" data-target="#example__portal-base-help-popover5" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">2</div>
        <div class="chi-stat-metric__title">Security</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">0</div>
        <div class="chi-stat-submetric__title">Recently Closed</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button6" aria-label="Help" data-target="#example__portal-base-help-popover6" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover2" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover3" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover4" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover5" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover6" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>

<script>
  chi.popover(document.getElementById('example__portal-base-help-button2'));
  chi.popover(document.getElementById('example__portal-base-help-button3'));
  chi.popover(document.getElementById('example__portal-base-help-button4'));
  chi.popover(document.getElementById('example__portal-base-help-button5'));
  chi.popover(document.getElementById('example__portal-base-help-button6'));
<\/script>`
      }
    };
  }
})
export default class BasePortal extends Vue {
  togglePopover(popoverRef: string) {
    ((this.$refs[popoverRef] as Element[])[0] as any).toggle();
  }
}
</script>
