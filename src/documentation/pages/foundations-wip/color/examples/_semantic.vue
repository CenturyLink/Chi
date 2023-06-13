<template lang="pug">
  <ComponentExample id="semantic" padding="-p--0" :showSnippetTabs="false" :showTitle="false" additionalStyle="border: 0;">
    div(slot="example" v-if="color")
      <TitleAnchor title="Semantic" id="semantic" titleSize="h2"/>
      p.-text
        | Use semantic colors to communicate meaning to users.
        | Examples include displaying alerts, form field validation, user status, application state and more.
        | Use green (success) for positive, blue (info) for informative, red (danger) for negative, and yellow (warning) for needs attention.
        | Semantic colors should never be used for decorative purposes.
      .chi-grid.-my--3
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3(v-for="semanticColors in color.semantic")
          .palette-container(v-for="semanticColor in semanticColors")
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="`background-color:${semanticColor.code};`" :class="semanticColor.class || '-text--body'")
              .chi-col.-w--12
                .-text--bold {{ semanticColor.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ semanticColor.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ semanticColor.a11y }}
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IThemes } from '~/models/models';
import { colors } from '~/fixtures/fixtures';

@Component({})
export default class Semantic extends Vue {
  get theme() {
    return this.$store.state.themes.theme;
  }

  get color() {
    return colors[this.theme as keyof IThemes];
  }
}
</script>
