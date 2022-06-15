<template lang="pug">
  div
    <TitleBar title="Overview" />
    .chi-grid__container.-pt--3
      p.-text
        | The Lumen Chi Accessibility Foundations defines how to make web content more accessible to people with disabilities.

      p.-text
        | Accessibility involves a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and 
        | neurological disabilities. According to the <a target="_blank" href="https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html" rel="noopener">CDC</a>,
        | 1 in 4 adults in the United States have some type of functional disability.
        
      p.-text
        | Lumen is required to meet the <a target="_blank" href="https://www.w3.org/TR/WCAG20/" rel="noopener">Web Content Accessibility Guidelines (WCAG 2.0)</a>, Conformance
        | Levels A and AA success criteria. These guidelines and their success criteria will also satisfy the <a target="_blank" href="https://www.section508.gov/" rel="noopener">Revised Section 508</a>
        | of the U.S. Rehabilitation Act (as of January 18, 2018).

      p.-text
        | The content within the Lumen Chi Accessibility Foundations is derived from the WCAG principles, guidelines, and success criteria. 
        | Although these WCAG guidelines cover a wide range of issues, they are not able to address the needs of people with all types, degrees, 
        | and combinations of disability. These guidelines also make web content more usable by older individuals with changing abilities due to
        | aging and often improve usability for users in general.

      h2 Key accessibility concepts
      template(v-for="keyAccessibilityConcept in $data.keyAccessibilityConcepts") 
        h3
          | <a class="-text--h4 -text--body -m--0" :href='keyAccessibilityConcept.href'>{{keyAccessibilityConcept.title}}</a>
        p.-text.-mt--0
          template(v-for='description in keyAccessibilityConcept.descriptionArray')
            | {{description}}
        ul.-text.-mt--0(v-if="keyAccessibilityConcept.subList && keyAccessibilityConcept.subList.length > 0")
          template(v-for="listItem in keyAccessibilityConcept.subList")
            li <strong>{{listItem.label}}:</strong> {{listItem.text}}
  
      .chi-divider.-my--5

      h3 About assistive technologies
      p.-text.-mt--0
        | Technologies that allow people with disabilities to use a resource are known as assistive technologies. Perhaps the most commonly thought of type of
        | assistive technology for the web are screen readers, which proccess the visible (and sometimes invisible) elements on the screen and read the
        | information aloud to the user. The three most popular screen readers are JAWS, NVDA and VoiceOver (iOS). Other examples of assistive technologies
        | used on the web include Braille translation devices, screen magnifiers, closed captioning, and specialized keyboards.  

      h2 Foundations
      h3 The Four Principles of Accessibility (POUR) and the Guidelines
      p.-text
        | Anyone who wants to use the web must have content that is:

      .chi-expansion-panel.-web-components.-accessibility.-pb--5
        template(v-for="(foundation, foundationIndex) in $data.foundations")  
          .chi-epanel.-no-step(data-chi-epanel-group="web-component-details")
            .chi-epanel__header
              .chi-epanel__title.-w--100(data-chi-epanel-action="toggle")
                i.chi-icon.icon-chevron-right.-mr--2(aria-hidden="true")
                | {{foundation.title}}  
              p.-text.-ml--4.-mt--0
                | {{foundation.description}}
              p.-text.-ml--4.-my--0
                | <strong>Ask:</strong> {{foundation.ask}}
            .chi-epanel__collapse
              .-active--only
                .chi-epanel__body
                  .chi-epanel__content
                    .chi-epanel__text
                      ul.-text
                        template(v-for="(listItem, subListIndex) in foundation.subList")
                          li <a class="-text--bold" target="_blank" :href="listItem.href" rel="noopener">{{Number(foundationIndex)+Number(1)}}.{{Number(subListIndex)+Number(1)}} {{listItem.label}}:</a>
                            | {{listItem.text}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { KEY_ACCESSIBILITY_CONCEPTS, FOUNDATIONS } from './fixtures';

declare const chi: any;

@Component({
  mounted(){
    chi.expansionPanel(
      document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),
      {mode: 'accordion'}
    );
  },
  data(){
    return {
      keyAccessibilityConcepts: KEY_ACCESSIBILITY_CONCEPTS,
      foundations: FOUNDATIONS
    }
  }
})
export default class Overview extends Vue {}
</script>
