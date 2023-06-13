<template lang="pug">
  <ComponentExample title="Category cards" id="category_cards" padding="-p--0" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | This template can be used to visually represent categories or groups to help browse and filter data.
    .-px--4.-pt--4(slot="example")
      .chi-grid
        .chi-col.-w--12.-w-md--6.-w-lg--4.-w-xl--3.-mb--3(v-for="card in cards")
          a.chi-card.-s--1.-rounded.-b--base-light.-h--100.-hover--animate.chi-link.-no-hover-underline(href='#')
            .-d--flex.-align-items--center.-justify-content--center.-bg--info-light.-p--3
              chi-marketing-icon(:icon='card.icon' variant='outline')
            .chi-card__content.-p--3.-h--100.-justify-content--between
              .chi-card__text
                .chi-card__title {{ card.title }}
                .chi-card__caption.-text--body.-mt--1 {{ card.description }}
              .chi-link.-cta.-mt--2 {{ card.buttonText }}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ]
    }
  }
})
export default class CategoryCards extends Vue {
  cards = [
    {
      icon: 'products-services',
      title: 'Business Management',
      description: 'A full suite of supporting APIs designed to make daily business operations simple and easy to use.',
      buttonText: 'Learn More'
    },
    {
      icon: 'people-it-professional',
      title: 'CenturyLink Partners',
      description: 'Configure CenturyLink products, services, and purchased for your customers on cloud-based CRM platforms.',
      buttonText: 'Learn More'
    },
    {
      icon: 'products-private-branch-exchange',
      title: 'Communications',
      description: 'Supports reliable and easy-to-use voice API products that help keep your team and customers in sync.',
      buttonText: 'Learn More'
    },
    {
      icon: 'platform-edge-compute',
      title: 'Edge Services',
      description: 'APIs to create, delete, and monitor edge instances.',
      buttonText: 'Learn More'
    },
    {
      icon: 'business-trust-confidence',
      title: 'Lumen Channel Partners',
      description: 'Integrate service availability, pricing, and business management APIs to create differentiated customer experiences.',
      buttonText: 'Learn More'
    },
    {
      icon: 'products-cce-dynamic-connections',
      title: 'Networking',
      description: 'Deliver software-defined networking that intelligently adjusts to real-time capacity, and connects cloud providers.',
      buttonText: 'Learn More'
    },
    {
      icon: 'platform-connected-security',
      title: 'Security',
      description: 'Embed hi-fi intelligence, automatic threat detection and proactive response to identify and mitigate cyberattacks.',
      buttonText: 'Learn More'
    },
    {
      icon: 'business-single-provider',
      title: 'Browse All APIs',
      description: 'Browse our comprehensive API library',
      buttonText: 'Explore All APIs'
    }
  ]

  get codeSnippets() {
    return {
      webcomponent: `<div class="chi-grid">\n${this.generateHtml()}\n</div>`,
      htmlblueprint: ``
    }
  }

  generateHtml() {
    return this.cards.map(({ icon, title, description, buttonText }) => {
      return (
        `  <div class="chi-col -w--12 -w-md--6 -w-lg--4 -w-xl--3 -mb--3">
    <a href="#" class="chi-card -s--1 -rounded -b--base-light -h--100 -hover--animate chi-link -no-hover-underline">
      <div class="-d--flex -align-items--center -justify-content--center -bg--info-light -p--3">
        <chi-marketing-icon icon="${icon}" variant="outline"></chi-marketing-icon>
      </div>
      <div class="chi-card__content -p--3 -h--100 -justify-content--between">
        <div class="chi-card__text">
          <div class="chi-card__title">${title}</div>
          <div class="chi-card__caption -text--body -mt--1">${description}</div>
        </div>
        <div class="chi-link -cta -mt--2">${buttonText}</div>
      </div>
    </a>
  </div>`
      )
    }).join('\n');
  }
}
</script>
