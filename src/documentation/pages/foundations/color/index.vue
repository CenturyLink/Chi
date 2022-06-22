<template lang="pug">
  div
    <TitleBar title="Color" />
    .chi-grid__container.-pt--3
      p.-text
        | Chi colors are designed to comply with U.S. <a href="https://www.section508.gov/">Section 508</a> federal requirements.
        | Section 508 follows the Web Content Accessibility Guidelines (<a href="https://www.w3.org/TR/WCAG20/">WCAG 2.0</a>) Level AA
        | standards which require text and background color contrast ratios of 4.5:1 or higher.
        | All Chi colors either meet (AA) or exceed (AAA) these standards and have been marked below accordingly.

      h2 Brand
      div.chi-grid
        .chi-col.-w-sm--12.-w-md--6.-w-lg--6.-mb--3
          h3 Primary Accent
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-pt--10.-text--white(:style="isBrightSpeedTheme ? 'background-color: #FFC800;' : isCenturyLinkTheme ? 'background-color: #0047BB' : 'background-color: #0075C9'")
              .chi-col.-w--12
                .-text--bold {{isBrightSpeedTheme ? 'Yellow 40' : isCenturyLinkTheme ? 'Blue 70' : 'Blue 70' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#FFC800' : isCenturyLinkTheme ? '#0047BB' : '#0075C9' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
        .chi-col.-w-sm--12.-w-md--6.-w-lg--6.-mb--3
          h3 Secondary Accent
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-pt--10.-text--body(:style="isBrightSpeedTheme ? 'background-color: #FA783C;' : isCenturyLinkTheme ? 'background-color: #48D597' : 'background-color: #38C6F4'")
              .chi-col.-w--12
                .-text--bold {{isBrightSpeedTheme ? 'Orange 40' : isCenturyLinkTheme ? 'Mint 40' : 'Cyan 40' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 #38C6F4
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
      div.chi-grid
        .chi-col.-w--12
          h3 Supporting Colors
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text(style="box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1)" :style="{'background-color' : (isBrightSpeedTheme ? '#FA4628' : isCenturyLinkTheme ? '#FFFFFF' : '#FFFFFF')}" :class="isBrightSpeedTheme ? '-text--black' : isCenturyLinkTheme ? '-text--body' : '-text--body'")
              .chi-col.-w--12
                .-text--bold {{isBrightSpeedTheme ? 'Red 50' : isCenturyLinkTheme ? 'White' : 'White'}}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#FA4628' : isCenturyLinkTheme ? '#FFFFFF' : '#FFFFFF'}}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="{'background-color' : (isBrightSpeedTheme ? '#FFFFFF' : isCenturyLinkTheme ? '#02BCB2' : '#0C9ED9')}" :class="isBrightSpeedTheme ? '-text--body' : isCenturyLinkTheme ? '-text--body' : '-text--body'")
              .chi-col.-w--12
                .-text--bold {{isBrightSpeedTheme ? 'White' : isCenturyLinkTheme ? 'Teal Blue 40' : 'Cyan 50'}}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#FFFFFF' : isCenturyLinkTheme ? '#02BCB2' : '#0C9ED9'}}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="{'background-color': (isBrightSpeedTheme ? '#000000' : isCenturyLinkTheme ? '#F9F162' : '#083176')}" :class="isBrightSpeedTheme ? '-text--white' : isCenturyLinkTheme ? '-text--body' : '-text--white'")
              .chi-col.-w--12
                .-text--bold {{isBrightSpeedTheme ? 'Black' : isCenturyLinkTheme ? 'Yellow 35' : 'Navy 100'}}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#000000' : isCenturyLinkTheme ? '#F9F162' : '#083176'}}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3(v-if="!isBrightSpeedTheme")
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="{'background-color': (isCenturyLinkTheme ? '#6FD16F' : '#000000')}" :class="isCenturyLinkTheme ? '-text--body' : '-text--white'")
              .chi-col.-w--12
                .-text--bold {{isCenturyLinkTheme ? 'Green 35' : 'Black'}}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#6FD16F' : '#000000'}}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
      .chi-divider.-mt--3.-mb--5
      h2 Neutral
      div.chi-grid
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isBrightSpeedTheme ? 'background-color: #000000;' : 'background-color: #242526'")
              .chi-col.-w--12
                .-text--bold Grey 100
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#000000' : '#242526' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          p.-text--sm.-mb--0 Used for primary text color on white and low-contrast backgrounds on black.
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isBrightSpeedTheme ? 'background-color: #191919;' : 'background-color: #313336'")
              .chi-col.-w--12
                .-text--bold Grey 90
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#191919' : '#313336' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          p.-text--sm.-mb--0 Used for low-contrast borders on black and medium-contrast backgrounds on black.
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isBrightSpeedTheme ? 'background-color: #333333;' : 'background-color: #3F4145'")
              .chi-col.-w--12
                .-text--bold Grey 80
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#333333' : '#3F4145' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          p.-text--sm.-mb--0 Used for medium-contrast borders on black and high-contrast backgrounds on black.
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isBrightSpeedTheme ? 'background-color: #4C4C4C;' : 'background-color: #53565A'")
              .chi-col.-w--12
                .-text--bold Grey 70
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#4C4C4C' : '#53565A' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          p.-text--sm.-mb--0 Used for secondary text on white and high-contrast borders on black.
      div.chi-grid
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isBrightSpeedTheme ? 'background-color: #666666;' : 'background-color: #65686C'")
              .chi-col.-w--12
                .-text--bold Grey 60
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#666666' : '#65686C' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          p.-text--sm.-mb--0 Used for muted or disabled text and icons on white.
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isBrightSpeedTheme ? 'background-color: #7F7F7F;' : 'background-color: #8E9399'")
              .chi-col.-w--12
                .-text--bold Grey 50
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#7F7F7F' : '#8E9399' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          p.-text--sm.-mb--0 Used for muted or disabled text and icons on black.
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isBrightSpeedTheme ? 'background-color: #999999;' : 'background-color: #ACB0B5'")
              .chi-col.-w--12
                .-text--bold Grey 40
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#999999' : '#ACB0B5' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          p.-text--sm.-mb--0 Used for high-contrast borders on white.
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isBrightSpeedTheme ? 'background-color: #B2B2B2;' : 'background-color: #D0D4D9'")
              .chi-col.-w--12
                .-text--bold Grey 30
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#B2B2B2' : '#D0D4D9' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          p.-text--sm.-mb--0 Used for medium-contrast borders on white.
      div.chi-grid
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isBrightSpeedTheme ? 'background-color: #DDDEDF;' : 'background-color: #DADEE2'")
              .chi-col.-w--12
                .-text--bold Grey 25
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#DDDEDF' : '#DADEE2' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          p.-text--sm.-mb--0 Used for medium-contrast borders and high-contrast backgrounds on white.
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isBrightSpeedTheme ? 'background-color: #E6E7E8;' : 'background-color: #EDF0F2'")
              .chi-col.-w--12
                .-text--bold Grey 20
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#E6E7E8' : '#EDF0F2' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          p.-text--sm.-mb--0 Used for low-contrast borders and medium-contrast backgrounds on white.
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isBrightSpeedTheme ? 'background-color: #F0F1F1;' : 'background-color: #F4F5F6'")
              .chi-col.-w--12
                .-text--bold Grey 15
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#F0F1F1' : '#F4F5F6' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          p.-text--sm.-mb--0 Used for low-contrast backgrounds on white.
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isBrightSpeedTheme ? 'background-color: #F2F2F2;' : 'background-color: #F8F9F9'")
              .chi-col.-w--12
                .-text--bold Grey 10
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isBrightSpeedTheme ? '#F2F2F2' : '#F8F9F9' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          p.-text--sm.-mb--0 Used for low-contrast backgrounds on white.
      .chi-divider.-mt--3.-mb--5
      h2 Semantic
      p.-text
        | Use semantic colors to communicate meaning to users.
        | Examples include displaying alerts, form field validation, user status, application state and more.
        | Use green (success) for positive, blue (info) for informative, red (danger) for negative, and yellow (warning) for needs attention.
        | Semantic colors should never be used for decorative purposes.
      div.chi-grid.-my--3
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isCenturyLinkTheme ? 'background-color: #008000;' : 'background-color: #007E44'")
              .chi-col.-w--12
                .-text--bold {{isCenturyLinkTheme ? 'Green 60' : 'Green 70' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#008000' : '#007E44' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isCenturyLinkTheme ? 'background-color: #189E18;' : 'background-color: #009054'")
              .chi-col.-w--12
                .-text--bold {{isCenturyLinkTheme ? 'Green 50' : 'Green 60' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#189E18' : '#009054' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isCenturyLinkTheme ? 'background-color: #A7DBA7;' : 'background-color: #95E9C9'")
              .chi-col.-w--12
                .-text--bold Green 30
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#A7DBA7' : '#95E9C9' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isCenturyLinkTheme ? 'background-color: #CEF2CE;' : 'background-color: #DBFAEE'")
              .chi-col.-w--12
                .-text--bold Green 20
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#CEF2CE' : '#DBFAEE' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isCenturyLinkTheme ? 'background-color: #0060FA;' : 'background-color: #0262B9'")
              .chi-col.-w--12
                .-text--bold {{isCenturyLinkTheme ? 'Blue 60' : 'Blue 75' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#0060FA' : '#0262B9' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isCenturyLinkTheme ? 'background-color: #468AF1;' : 'background-color: #0080DC'")
              .chi-col.-w--12
                .-text--bold {{isCenturyLinkTheme ? 'Blue 50' : 'Blue 60' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#468AF1' : '#0080DC' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isCenturyLinkTheme ? 'background-color: #C0D7FA;' : 'background-color: #AEDEFF'")
              .chi-col.-w--12
                .-text--bold Blue 30
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#C0D7FA' : '#AEDEFF' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isCenturyLinkTheme ? 'background-color: #E6F0FF;' : 'background-color: #E0F3FF'")
              .chi-col.-w--12
                .-text--bold Blue 20
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#E6F0FF' : '#E0F3FF' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isCenturyLinkTheme ? 'background-color: #D81820;' : 'background-color: #D62015'")
              .chi-col.-w--12
                .-text--bold {{isCenturyLinkTheme ? 'Red 60' : 'Red 70' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#D81820' : '#D62015' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isCenturyLinkTheme ? 'background-color: #FA5056;' : isBrightSpeedTheme ? 'background-color: #D52C10' : 'background-color: #EE3026'")
              .chi-col.-w--12
                .-text--bold {{isCenturyLinkTheme ? 'Red 50' : 'Red 60' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#FA5056' : isBrightSpeedTheme ? '#D52C10' : '#EE3026' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isCenturyLinkTheme ? 'background-color: #FCC7C9;' : isBrightSpeedTheme ? 'background-color: #FCA293' : 'background-color: #FFC2BD'")
              .chi-col.-w--12
                .-text--bold Red 30
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#FCC7C9' : isBrightSpeedTheme ? '#FCA293' : '#FFC2BD' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isCenturyLinkTheme ? 'background-color: #FCE8E9;' : isBrightSpeedTheme ? 'background-color: #FBDFDB' : 'background-color: #FFE8E5'")
              .chi-col.-w--12
                .-text--bold Red 20
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#FCE8E9' : isBrightSpeedTheme ? '#FBDFDB' : '#FFE8E5' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isCenturyLinkTheme ? 'background-color: #946300;' : 'background-color: #A15C00'")
              .chi-col.-w--12
                .-text--bold {{isCenturyLinkTheme ? 'Yellow 60' : 'Yellow 70' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#946300' : '#A15C00' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--white(:style="isCenturyLinkTheme ? 'background-color: #946300;' : isBrightSpeedTheme ? 'background-color: #AD7600' : 'background-color: #B96B00'")
              .chi-col.-w--12
                .-text--bold {{isCenturyLinkTheme ? 'Yellow 50' : 'Yellow 60' }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#946300' : isBrightSpeedTheme ? '#AD7600' : '#B96B00' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isCenturyLinkTheme ? 'background-color: #F6ED79;' : isBrightSpeedTheme ? 'background-color: #FFE37F' : 'background-color: #FFCC89'")
              .chi-col.-w--12
                .-text--bold Yellow 30
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#F6ED79' : isBrightSpeedTheme ? '#FFE37F' : '#FFCC89' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text.-text--body(:style="isCenturyLinkTheme ? 'background-color: #F9F5BE;' : isBrightSpeedTheme ? 'background-color: #FFF1BF' : 'background-color: #FAECD9'")
              .chi-col.-w--12
                .-text--bold Yellow 20
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{isCenturyLinkTheme ? '#F9F5BE' : isBrightSpeedTheme ? '#FFF1BF' : '#FAECD9' }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y AAA
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  computed: {
      isBrightspeedTheme() {
        return this.$store.state.themes.theme === 'brightspeed';
      },
       isLumenTheme() {
        return this.$store.state.themes.theme === 'lumen';
      },
       isPortalTheme() {
        return this.$store.state.themes.theme === 'portal';
      },
      isCenturyLinkTheme() {
        return this.$store.state.themes.theme === 'centurylink';
      }
  }
})
export default class Color extends Vue {}
</script>
