<template lang="pug">
<ComponentExample title="Marketing feature cards" id="marketing_feature_cards" padding="-p--0" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use this template to feature product content on marketing oriented webpages.
  template(#example)
    .-px--4.-pt--4
      .chi-grid
        .chi-col.-w--12.-w-lg--6.-w-xl--4.-mb--5(v-for="card in cards")
          .chi-card.-s--2.-rounded.-bg--white.-b--base-light.-mx--1.-h--100
            .-d--flex.-align-items--center.-justify-content--center.-bg--grey-10.-p--3
              chi-marketing-icon(:icon='card.icon' size='lg')
            .chi-card__content.-p--4.-pb--6
              .-text--h3.-text--bolder.-m--0 {{ card.title }}
              p.-text {{ card.description }}
              chi-link(href='#' cta='') {{card.buttonText}}
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class MarketingFeatureCards extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      disabled: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  cards = [
    {
      icon: 'people-it-professional',
      title: 'Find the right API',
      description: 'Browse our comprehensive API library',
      buttonText: 'Explore APIs',
    },
    {
      icon: 'people-software-developer',
      title: 'Learn and build code',
      description: 'Learn how to use our APIs to power your applications',
      buttonText: 'View Guide',
    },
    {
      icon: 'products-portal',
      title: 'Launch your application',
      description: 'Register your account and request access to APIs',
      buttonText: 'Get Started',
    },
  ];

  get codeSnippets() {
    return {
      webcomponent: `<div class="chi-grid">\n${this.generateHtml()}\n</div>`,
      htmlblueprint: ``,
    };
  }

  generateHtml() {
    return this.cards
      .map(({ icon, title, description, buttonText }) => {
        return `  <div class="chi-col -w--12 -w-lg--6 -w-xl--4 -mb--5">
     <div class="chi-card -s--2 -rounded -bg--white -b--base-light -mx--1 -h--100">
       <div class="-d--flex -align-items--center -justify-content--center -bg--grey-10 -p--3">
         <chi-marketing-icon icon="${icon}" size="lg"></chi-marketing-icon>
       </div>
       <div class="chi-card__content -p--4 -pb--6">
         <div class="-text--h3 -text--bolder -m--0">${title}</div>
         <p class="-text">${description}</p>
         <chi-link href="#" cta>${buttonText}</chi-link>
       </div>
     </div>
  </div>`;
      })
      .join('\n');
  }
}
</script>
