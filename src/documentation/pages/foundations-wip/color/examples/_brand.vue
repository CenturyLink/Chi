<template lang="pug">
  <ComponentExample id="brand" padding="-p--0" :showSnippetTabs="false" :showTitle="false" additionalStyle="border: 0;">
    div(slot="example" v-if="color")
      <TitleAnchor title="Brand" id="brand" titleSize="h2"/>
      .chi-grid
        .chi-col.-w-sm--12.-w-md--6.-w-lg--6.-mb--3(v-for="mainColor in color.brand.main")
          <TitleAnchor :title="mainColor.title" :id="mainColor.id" />
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-pt--10(:style="`background-color:${mainColor.code};`" :class="mainColor.class || '-text--body'")
              .chi-col.-w--12
                .-text--bold {{ mainColor.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ mainColor.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ mainColor.a11y }}
      .chi-grid
        .chi-col.-w--12
          <TitleAnchor title="Supporting Colors" id="supporting-colors" />
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
