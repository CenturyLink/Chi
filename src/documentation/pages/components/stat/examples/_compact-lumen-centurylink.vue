<template lang="pug">
  <ComponentExample title="Compact" id="compact-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use <code>-compact</code> when vertical space is limited.
    .chi-stat.-compact(slot="example")
      .chi-stat__item
        .chi-stat__content
          .chi-stat-metric
            .chi-stat-metric__title
              | Utilization
            .chi-label__help
              button.chi-button.-icon.-xs.-flat(id="example__help-button" aria-label="Help" data-target="#example__help-popover" data-position="bottom")
                i.chi-icon.icon-circle-info-outline(aria-hidden="true")
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 4
            .chi-stat-submetric__title
              | High
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 16
            .chi-stat-submetric__title
              | Elevated
      .chi-stat__item
        .chi-stat__content
          .chi-stat-metric
            .chi-stat-metric__title
              | Performance
            .chi-label__help
              button.chi-button.-icon.-xs.-flat(id="example__help-button2" aria-label="Help" data-target="#example__help-popover2" data-position="bottom")
                i.chi-icon.icon-circle-info-outline(aria-hidden="true")
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 0
            .chi-stat-submetric__title
              | Critical
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 1
            .chi-stat-submetric__title
              | Impacted
      .chi-stat__item.-active
        .chi-stat__content
          .chi-stat-metric
            .chi-stat-metric__title
              | Status
            .chi-label__help
              button.chi-button.-icon.-xs.-flat(id="example__help-button3" aria-label="Help" data-target="#example__help-popover3" data-position="bottom")
                i.chi-icon.icon-circle-info-outline(aria-hidden="true")
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 12
            .chi-stat-submetric__title
              | Down
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 333
            .chi-stat-submetric__title
              | Up
      .chi-stat__item
        .chi-stat__content
          .chi-stat-metric
            .chi-stat-metric__title
              | Threshold Alerts
            .chi-label__help
              button.chi-button.-icon.-xs.-flat(id="example__help-button4" aria-label="Help" data-target="#example__help-popover4" data-position="bottom")
                i.chi-icon.icon-circle-info-outline(aria-hidden="true")
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 0
            .chi-stat-submetric__title
              | Warnings
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 0
            .chi-stat-submetric__title
              | Watches
      .chi-stat__item
        .chi-stat__content
          .chi-stat-metric
            .chi-stat-metric__title
              | Repair Tickets
            .chi-label__help
              button.chi-button.-icon.-xs.-flat(id="example__help-button5" aria-label="Help" data-target="#example__help-popover5" data-position="bottom")
                i.chi-icon.icon-circle-info-outline(aria-hidden="true")
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 2
            .chi-stat-submetric__title
              | Active
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 1
            .chi-stat-submetric__title
              | Closed
      .chi-stat__item
        .chi-stat__content
          .chi-stat-metric
            .chi-stat-metric__title
              | Sch Maintenance
            .chi-label__help
              button.chi-button.-icon.-xs.-flat(id="example__help-button6" aria-label="Help" data-target="#example__help-popover6" data-position="bottom")
                i.chi-icon.icon-circle-info-outline(aria-hidden="true")
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 2
            .chi-stat-submetric__title
              | In Progress
          .chi-stat-submetric
            .chi-stat-submetric__value
              | 2
            .chi-stat-submetric__title
              | Upcoming
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
export default class CompactLumenCenturyLink extends Vue {
  mounted() {
    const ids = [
      'example__help-button',
      'example__help-button2',
      'example__help-button3',
      'example__help-button4',
      'example__help-button5',
      'example__help-button6'
    ];

    ids.forEach(id => {
      chi.popover(document.getElementById(id));
    });
  }
}
</script>
