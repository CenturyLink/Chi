<template lang="pug">
  <ComponentExample title="Compact" id="compact" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use <code>-compact</code> when vertical space is limited.
    <Wrapper slot="example">
      .chi-stat.-compact
        div(v-for="(stat, index) in stats" :key="index" :class="stat.active ? 'chi-stat__item -active' : 'chi-stat__item'")
          .chi-stat__content
            .chi-stat-metric
              .chi-stat-metric__title
                | {{ stat.title }}
              .chi-label__help
                button.chi-button.-icon.-xs.-flat(:id="`button-compact-${index}`" @click="togglePopover(`popover-${index}`)" aria-label="Help")
                  i.chi-icon.icon-circle-info-outline(aria-hidden="true")
            .chi-stat-submetric
              .chi-stat-submetric__value
                | {{ stat.value }}
              .chi-stat-submetric__title
                | {{ stat.title2 }}
            .chi-stat-submetric
              .chi-stat-submetric__value
                | {{ stat.value2 }}
              .chi-stat-submetric__title
                | {{ stat.title3 }}
      chi-popover(v-for="n, index in stats.length" :key="index" :ref="`popover-${index}`" aria-modal="true" position="bottom" role="dialog" :reference="`#button-compact-${index}`" arrow)
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
          title: 'Utilization',
          value: '4',
          title2: 'High',
          value2: '16',
          title3: 'Elevated'
        },
        {
          title: 'Performance',
          value: '0',
          title2: 'Critical',
          value2: '1',
          title3: 'Impacted'
        },
        {
          title: 'Status',
          value: '12',
          title2: 'Down',
          value2: '333',
          title3: 'Up',
          active: true
        },
        {
          title: 'Threshold alerts',
          value: '0',
          title2: 'Warnings',
          value2: '0',
          title3: 'Watches'
        },
        {
          title: 'Repair tickets',
          value: '2',
          title2: 'Active',
          value2: '1',
          title3: 'Closed'
        },
        {
          title: 'Sch maintenance',
          value: '2',
          title2: 'In progress',
          value2: '2',
          title3: 'Upcoming'
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
        htmlblueprint: `<div class="chi-stat -compact">
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__title">Utilization</div>
        <div class="chi-label__help">
          <button class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example__help-popover" data-position="bottom" aria-describedby="example__help-popover">
            <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">4</div>
        <div class="chi-stat-submetric__title">High</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">16</div>
        <div class="chi-stat-submetric__title">Elevated</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__title">Performance</div>
        <div class="chi-label__help">
          <button class="chi-button -icon -xs -flat" id="example__help-button2" aria-label="Help" data-target="#example__help-popover2" data-position="bottom" aria-describedby="example__help-popover2">
            <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">0</div>
        <div class="chi-stat-submetric__title">Critical</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">1</div>
        <div class="chi-stat-submetric__title">Impacted</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item -active">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__title">Status</div>
        <div class="chi-label__help">
          <button class="chi-button -icon -xs -flat" id="example__help-button3" aria-label="Help" data-target="#example__help-popover3" data-position="bottom" aria-describedby="example__help-popover3">
            <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">12</div>
        <div class="chi-stat-submetric__title">Down</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">333</div>
        <div class="chi-stat-submetric__title">Up</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__title">Threshold Alerts</div>
        <div class="chi-label__help">
          <button class="chi-button -icon -xs -flat" id="example__help-button4" aria-label="Help" data-target="#example__help-popover4" data-position="bottom" aria-describedby="example__help-popover4">
            <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">0</div>
        <div class="chi-stat-submetric__title">Warnings</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">0</div>
        <div class="chi-stat-submetric__title">Watches</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__title">Repair Tickets</div>
        <div class="chi-label__help">
          <button class="chi-button -icon -xs -flat" id="example__help-button5" aria-label="Help" data-target="#example__help-popover5" data-position="bottom" aria-describedby="example__help-popover5">
            <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">2</div>
        <div class="chi-stat-submetric__title">Active</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">1</div>
        <div class="chi-stat-submetric__title">Closed</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__title">Sch Maintenance</div>
        <div class="chi-label__help">
          <button class="chi-button -icon -xs -flat" id="example__help-button6" aria-label="Help" data-target="#example__help-popover6" data-position="bottom" aria-describedby="example__help-popover6">
            <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">2</div>
        <div class="chi-stat-submetric__title">In Progress</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">2</div>
        <div class="chi-stat-submetric__title">Upcoming</div>
      </div>
    </div>
  </div>
</div>

<section class="chi-popover chi-popover--bottom" id="example__help-popover" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__help-popover2" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__help-popover3" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__help-popover4" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__help-popover5" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__help-popover6" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>

<script>
  chi.popover(document.getElementById('example__help-button'));
  chi.popover(document.getElementById('example__help-button2'));
  chi.popover(document.getElementById('example__help-button3'));
  chi.popover(document.getElementById('example__help-button4'));
  chi.popover(document.getElementById('example__help-button5'));
  chi.popover(document.getElementById('example__help-button6'));
<\/script>`
      }
    };
  }
})
export default class Compact extends Vue {
  togglePopover(popoverRef: string) {
    ((this.$refs[popoverRef] as Element[])[0] as any).toggle();
  }
}
</script>
