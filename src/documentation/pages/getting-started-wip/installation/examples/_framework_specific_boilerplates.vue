<template lang="pug">
  div
    <TitleAnchor title="Framework specific boilerplates" id="framework-specific-boilerplates" titleSize="h2" additionalClasses="-mb--0" />
    .-lumen-show.-mt--5
    table.chi-table.-bordered.-text--center.-mb--5
      caption.-text.-text--left.-mb--2
        | Boilerplates include:
      thead
        tr
          th.-text--center
            .-sr--only Framework
          th.-text--center chi.css
          th.-text--center chi.js
          th.-text--center Web components
          th.-text--center Favicon
          th.-text--center Download
      tbody
        tr
          td.-text--bold Vue
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            a.chi-button(href='../../boilerplates/chi-vue-boilerplate.zip')
              .chi-button__content
                i.chi-icon.icon-circle-arrow-down-outline(aria-hidden="true")
                span Download
        tr
          td.-text--bold Stencil
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            a.chi-button(href='../../boilerplates/chi-stencil-boilerplate.zip')
              .chi-button__content
                i.chi-icon.icon-circle-arrow-down-outline(aria-hidden="true")
                span Download
        tr
          td.-text--bold Angular
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            a.chi-button(href='../../boilerplates/chi-angular-boilerplate.zip')
              .chi-button__content
                i.chi-icon.icon-circle-arrow-down-outline(aria-hidden="true")
                span Download
        tr
          td.-text--bold React
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            a.chi-button(href='../../boilerplates/chi-react-boilerplate.zip')
              .chi-button__content
                i.chi-icon.icon-circle-arrow-down-outline(aria-hidden="true")
                span Download
        tr
          td.-text--bold Vue + ES6
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            i.chi-icon.icon-check.-icon--success(aria-hidden="true")
          td
            a.chi-button(href='../../boilerplates/chi-vue-es6-boilerplate.zip')
              .chi-button__content
                i.chi-icon.icon-circle-arrow-down-outline(aria-hidden="true")
                span Download

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      stylesheet: {
        htmlblueprint: `<link rel="stylesheet" href="https://assets.ctl.io/chi/5.39.0/chi.css" integrity="sha256-1bhPx5yXmCMWKzXn9PFea05NRF+239d9pqYJcR3GHWY=" crossorigin="anonymous">`
      },
    }
  }
})
export default class Favicon extends Vue {
  mounted() {
    chi.expansionPanel(
      document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),
      {mode: 'accordion'}
    );
  }
}
</script>
