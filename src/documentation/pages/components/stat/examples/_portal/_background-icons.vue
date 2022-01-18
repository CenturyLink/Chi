<template lang="pug">
  <ComponentExample title="Background Icons" id="background-icons-portal" :tabs="exampleTabs">
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
            .chi-stat-background-icon(v-if="!stat.active")
              chi-marketing-icon(:icon="stat.icon")
            .chi-label__help(v-if="!stat.active")
              button.chi-button.-icon.-xs.-flat(:id="`button-bg-icons-portal-${index}`" @click="togglePopover(`popover-${index}`)" aria-label="Help")
                i.chi-icon.icon-circle-info-outline(aria-hidden="true")
      chi-popover(v-for="index in stats.length-1" :key="index" :ref="`popover-${index}`" aria-modal="true" position="bottom" role="dialog" :reference="`#button-bg-icons-portal-${index}`" arrow)
        .chi-popover__content
          p.chi-popover__text
            | Helpful information goes here.
    </Wrapper>
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html" >
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>  
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
          title: 'Communications',
          icon: 'platform-voice-unified-communications'
        },
        {
          value: '932',
          title: 'Hybrid & Cloud IT',
          value2: '0',
          title2: 'Recently Closed',
          icon: 'platform-it-agility-hybrid-cloud'
        },
        {
          value: '301',
          title: 'Managed & IT Services',
          value2: '6',
          title2: 'Recently Closed',
          icon: 'business-support-ticket'
        },
        {
          value: '100',
          title: 'Networking & Cloud IT',
          icon: 'platform-adaptive-networking'
        },
        {
          value: '2',
          title: 'Security',
          value2: '0',
          title2: 'Recently Closed',
          icon: 'platform-connected-security'
        }
      ],
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<div class="chi-stat">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="platform-voice-unified-communications"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button2" aria-label="Help" data-target="#example__portal-bgicons-help-popover2" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="platform-it-agility-hybrid-cloud"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button3" aria-label="Help" data-target="#example__portal-bgicons-help-popover3" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="business-support-ticket"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button4" aria-label="Help" data-target="#example__portal-bgicons-help-popover4" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="platform-adaptive-networking"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button5" aria-label="Help" data-target="#example__portal-bgicons-help-popover5" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="platform-connected-security"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button6" aria-label="Help" data-target="#example__portal-bgicons-help-popover6" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover2" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover3" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover4" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover5" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover6" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>

<script>
  chi.popover(document.getElementById('example__portal-bgicons-help-button2'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button3'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button4'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button5'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button6'));
<\/script>`,
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-file" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button2" aria-label="Help" data-target="#example__portal-bgicons-help-popover2" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-warning" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button3" aria-label="Help" data-target="#example__portal-bgicons-help-popover3" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-map-marker" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button4" aria-label="Help" data-target="#example__portal-bgicons-help-popover4" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-mail" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button5" aria-label="Help" data-target="#example__portal-bgicons-help-popover5" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-file" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button6" aria-label="Help" data-target="#example__portal-bgicons-help-popover6" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover2" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover3" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover4" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover5" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover6" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>

<script>
  chi.popover(document.getElementById('example__portal-bgicons-help-button2'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button3'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button4'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button5'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button6'));
<\/script>`
      }
    };
  }
})
export default class BackgroundIconsPortal extends Vue {
  togglePopover(popoverRef: string) {
    ((this.$refs[popoverRef] as Element[])[0] as any).toggle();
  }
}
</script>
