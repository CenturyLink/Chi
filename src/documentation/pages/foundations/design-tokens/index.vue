<template lang="pug">
  div
    <TitleBar title="Design Tokens" description="Design tokens are used in place of hard-coded values to maintain consistent and scalable design system development." />
    .chi-grid__container.-pt--3
      h2 Color
      h3 Text
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
                th
                  div Contrast
            tbody
              tr(v-for="(value, index) in getColor('text')")
                td(width='35%')
                  code {{`$color-text-${index}`}}
                td(width='25%')
                  div.-text {{value.hex}}
                td(width='20%')
                  div.-text--lg.-lh--2.-rounded.-d--inline-block(:style="`background-color:#000;padding:2px;color:${value.hex};`" v-if="index === 'white' || index === 'secondary'") Aa
                  div.-text--lg.-lh--2(:style="`color:${value.hex};`" v-else) Aa
                td(width='20%')
                  div.-text
                    i.chi-icon.icon-warning.-xs.-icon--warning.-mr--1(aria-hidden="true" v-if="(index === 'secondary-dark' || (index === 'primary-alt' && (isLumenTheme || isPortalTheme)) ) && (isLumenTheme || isPortalTheme || isCenturyLinkTheme)")
                    i.chi-icon.icon-check.-xs.-icon--success.-mr--1(aria-hidden="true" v-else)
                    span {{value.contrast}}
                      div.-text--sm.-text--muted.-lh--2(v-if="isLumenTheme || isPortalTheme || isCenturyLinkTheme") {{index === 'secondary-dark' ? '| 20px+ text only' : index === 'primary-alt' && (isLumenTheme || isPortalTheme) ? '| White backgrounds only' : ''}}
      
      h3 Icon
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
                th
                  div Contrast
            tbody
              tr(v-for="(value, index) in getColor('icon')")
                td(width='35%')
                  code {{`$color-icon-${index}`}}
                td(width='25%')
                  div.-text {{value.hex}}
                td(width='20%')
                  div.-text--lg.-lh--1.-rounded.-d--inline-block(:style="`background-color:#000;padding:2px;color:${value.hex};`" v-if="index === 'white' || index === 'secondary'")
                    i.chi-icon.icon-circle(aria-hidden="true" :style="isPortalTheme || isBrightspeedTheme ? `color:${value.hex};` : ''")
                  div.-text--lg.-lh--1(:style="`color:${value.hex};`" v-else)
                    i.chi-icon.icon-circle(aria-hidden="true" :style="`color:${value.hex};`")
                td(width='20%')
                  div.-text
                    i.chi-icon.icon-check.-xs.-icon--success.-mr--1(aria-hidden="true")
                    span {{value.contrast}}

      
      h3 Background
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
                th
                  div Contrast
            tbody
              tr(v-for="(value, index) in getColor('background')")
                td(width='35%')
                  code {{`$color-background-${index}`}}
                td(width='25%')
                  div.-text {{value.hex}}
                td(width='20%')
                  div.-text.-rounded.-w--80.-s--1(:style="`height:1rem;background-color:${value.hex};`" v-if="index === 'base' || index === 'white'")
                  div.-text.-rounded.-w--80(:style="`height:1rem;background-color:${value.hex};`" v-else)
                td(width='20%')
                  div.-text
                    i.chi-icon.icon-check.-xs.-icon--success.-mr--1(aria-hidden="true")
                    span {{value.contrast}}

      h3 Border
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
                th
                  div Contrast
            tbody
              tr(v-for="(value, index) in getColor('border')")
                td(width='35%')
                  code {{`$color-border-${index}`}}
                td(width='25%')
                  div.-text {{value.hex}}
                td(width='20%')
                  div.-text.-rounded.-w--80(:style="`background-color:#000;height:1.25rem;padding:2px;`" v-if="index === 'white'")
                    div.-text.-rounded(:style="`height:1rem;border:1px solid ${value.hex};`")
                  div.-text.-rounded.-w--80(:style="`height:1rem;border:1px solid ${value.hex};`" v-else)
                td(width='20%')
                  div.-text —

      h3 Color System
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
            tbody
              tr(v-for="(value, index) in getColor('colorSystem')")
                td(width='35%')
                  code {{`$color-${index}`}}
                td(width='25%')
                  div.-text {{value.hex}}
                td(width='40%')
                  div.-text.-rounded.-w--100.-w-lg--60.-s--1(:style="`height:1rem;background-color:${value.hex};`" v-if="index === 'white'")
                  div.-text.-rounded.-w--100.-w-lg--60(:style="`height:1rem;background-color:${value.hex};`" v-else)

      h2 Font
      h3 Font family
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
            tbody
              tr
                td(width='35%')
                  code=`$font-family-base`
                td(width='45%')
                  div.-text
                    | 'Inter', Arial, Helvetica, Verdana, sans-serif
                td(width='20%')
                  div.-text--lg.-lh--2 Aa
              tr
                td(width='35%')
                  code=`$font-family-mono`
                td(width='45%')
                  div.-text
                    | Menlo, Consolas, 'Liberation Mono', Courier, monospace
                td(width='20%')
                  div.-text--lg.-lh--2(:style="`font-family: Menlo, Consolas, 'Liberation Mono', Courier, monospace;`") Aa

      h3 Font weight
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
            tbody
              tr(v-for="(value, index) in fontWeight")
                td(width='35%')
                  code {{`$font-weight-${index}`}}
                td(width='25%')
                  div.-text {{value.weight}}
                td(width='40%')
                  div.-text(:style="`font-weight:${value.weight};`") Aa

      h3 Font size - text
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
            tbody
              tr(v-for="(value, index) in fontSize")
                td(width='35%')
                  code {{`$font-size-${index}`}}
                td(width='25%')
                  div.-text {{value.rem}}
                  div.-text {{value.size}}
                td(width='40%')
                  div.-text(:style="`font-size:${value.rem};`") Aa

      h3 Font size - headings
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
            tbody
              tr(v-for="(value, index) in fontHeadingSize")
                td(width='35%')
                  code {{`$font-size-${index}`}}
                td(width='25%')
                  div.-text {{value.rem}}
                  div.-text {{value.size}}
                td(width='40%')
                  div.-text(:style="`font-size:${value.rem};line-height:1;`") Aa

      h3 Font size - system
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
            tbody
              tr(v-for="(value, index) in fontSystemSize")
                td(width='35%')
                  code {{`$font-size-${index}`}}
                td(width='25%')
                  div.-text {{value.rem}}
                  div.-text {{value.size}}
                td(width='40%')
                  div.-text(:style="`font-size:${value.rem};line-height:${value.rem};`") Aa

      h2 Border radius
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
            tbody
              tr(v-for="(value, index) in borderRadius")
                td(width='35%')
                  code {{`$border-radius-${index}`}}
                td(width='25%')
                  div.-text {{value.radius}}
                    div.-text(v-if="value.rem") {{value.rem}}
                td(width='40%')
                  div.-text.-bg--black(:style="`height:1rem;width:1rem;border-radius:${value.radius};`")

      h2 Opacity
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
                th
                  div Example
            tbody
              tr(v-for="(value, index) in elementOpacity")
                td(width='35%')
                  code {{`$opacity-${index}`}}
                td(width='25%')
                  div.-text {{value.opacity}}
                td(width='40%')
                  div.example-opacity.-rounded(:style="`height:3rem;`")
                    div.-text.-bg--black.-rounded(:style="`height:3rem;opacity:${value.opacity};`")

      h2 Z-index
      section.chi-table.-xs.-mt--2.-mb--4
        div
          table.-text
            thead
              tr.-text--grey
                th
                  div Token
                th
                  div Value
            tbody
                tr(v-for="(value, index) in elementZindex")
                  td(width='35%')
                    code {{`$z-index-${index}`}}
                  td(width='65%')
                    div.-text {{value.zindex}}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import tokens, {fontWeight, fontSize, fontHeadingSize, fontSystemSize, borderRadius, elementZindex, elementOpacity} from './fixtures';

@Component({
  data() {
    return {
      fontWeight,
      fontSize,
      fontHeadingSize,
      fontSystemSize,
      borderRadius,
      elementZindex,
      elementOpacity,
    }
  },
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
      },
  },
  methods: {
    getColor: function(context) {
      switch (this.$store.state.themes.theme) {
        case 'lumen': return (tokens as any)[context]['lumen'];
        case 'portal': return (tokens as any)[context]['portal'];
        case 'centurylink': return (tokens as any)[context]['centurylink'];
        case 'brightspeed': return (tokens as any)[context]['brightspeed'];
        default: return;
      }
    }
  }
})
export default class DesignTokens extends Vue {}
</script>
