<template lang="pug">
  <ComponentExample id="color" padding="-p--0" :showSnippetTabs="false" :showTitle="false" additionalStyle="border: 0;">
    div(slot="example" v-if="color")
      h2 Brand {{theme}}
      div.chi-grid
        .chi-col.-w-sm--12.-w-md--6.-w-lg--6.-mb--3
          h3 Primary Accent
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-pt--10(:style="`background-color:${color.brand.primary.code};`" :class="color.brand.primary.class || '-text--body'")
              .chi-col.-w--12
                .-text--bold {{ color.brand.primary.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ color.brand.primary.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ color.brand.primary.a11y }}
        .chi-col.-w-sm--12.-w-md--6.-w-lg--6.-mb--3
          h3 Secondary Accent
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-pt--10.-text--body(:style="`background-color:${color.brand.secondary.code};`")
              .chi-col.-w--12
                .-text--bold {{ color.brand.secondary.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ color.brand.secondary.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ color.brand.secondary.a11y }}
      div.chi-grid
        .chi-col.-w--12
          h3 Supporting Colors
        .chi-col.-w-sm--12.-w-md--6.-mb--3(v-for="supportingColor in color.brand.supporting" :class="supportingColor.wrapperClass || '-w-lg--3'")
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--black(:style="`background-color:${supportingColor.code};`" :class="supportingColor.class")
              .chi-col.-w--12
                .-text--bold {{ supportingColor.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ supportingColor.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ supportingColor.a11y }}
      .chi-divider.-mt--3.-mb--5
      h2 Neutral
      div.chi-grid(v-for="grid in color?.neutral")
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3(v-for="col in grid")
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="`background-color:${col.code};`" :class="col.class || '-text--body'")
              .chi-col.-w--12
                .-text--bold {{ col.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ col.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ col.a11y }}
          p.-text--sm.-mb--0 {{ col.description }}
      .chi-divider.-mt--3.-mb--5
      h2 Semantic
      p.-text
        | Use semantic colors to communicate meaning to users.
        | Examples include displaying alerts, form field validation, user status, application state and more.
        | Use green (success) for positive, blue (info) for informative, red (danger) for negative, and yellow (warning) for needs attention.
        | Semantic colors should never be used for decorative purposes.
      div.chi-grid.-my--3
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container(v-for="green in color.semantic.green")
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="`background-color:${green.code};`" :class="green.class || '-text--body'")
              .chi-col.-w--12
                .-text--bold {{ green.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ green.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ green.a11y }}
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container(v-for="blue in color.semantic.blue")
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="`background-color:${blue.code};`" :class="blue.class || '-text--body'")
              .chi-col.-w--12
                .-text--bold {{ blue.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ blue.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ blue.a11y }}
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container(v-for="red in color.semantic.red")
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="`background-color:${red.code};`" :class="red.class || '-text--body'")
              .chi-col.-w--12
                .-text--bold {{ red.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ red.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ red.a11y }}
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container(v-for="yellow in color.semantic.yellow")
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="`background-color:${yellow.code};`" :class="yellow.class || '-text--body'")
              .chi-col.-w--12
                .-text--bold {{ yellow.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ yellow.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ yellow.a11y }}
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IThemes } from '~/models/models';
import { colors } from '~/fixtures/fixtures';

@Component({})
export default class Error extends Vue {
  get theme() {
    return this.$store.state.themes.theme;
  }

  get color() {
    return colors[this.theme as keyof IThemes];
  }
}
</script>
