<template lang="pug">
  <ComponentExample title="Icons" id="icons" padding="-p--0">
    <Wrapper slot="example">
      h4 Business
      .chi-grid.icon-library.-pt--2.-pb--6
        each name in ['business-big-data', 'business-briefcase', 'business-calendar', 'business-checklist', 'business-consulting', 'business-cost-control', 'business-deal', 'business-finance', 'business-growth', 'business-lower-costs', 'business-opportunities', 'business-reports', 'business-solutions', 'business-support-ticket', 'business-time']
          .chi-col.-w--6.-w-xl--3.-mb--2
            .chi-card.-py--4.-bg--grey-10.-no-border.-align--center
              .chi-card__content
                chi-marketing-icon(icon=`${name}` size='md')
            p.-text--center=name

      h4 Device
      .chi-grid.icon-library.-pt--2.-pb--6
        each name in ['device-desktop', 'device-ip-phone', 'device-laptop', 'device-mobile-phone', 'device-router', 'device-server', 'device-switch', 'device-video-streaming']
          .chi-col.-w--6.-w-xl--3.-mb--2
            .chi-card.-py--4.-bg--grey-10.-no-border.-align--center
              .chi-card__content
                chi-marketing-icon(icon=`${name}` size='md')
            p.-text--center=name

      h4 People
      .chi-grid.icon-library.-pt--2.-pb--6
        each name in ['people-admin', 'people-customer', 'people-executive', 'people-support', 'people-us-network']
          .chi-col.-w--6.-w-xl--3.-mb--2
            .chi-card.-py--4.-bg--grey-10.-no-border.-align--center
              .chi-card__content
                chi-marketing-icon(icon=`${name}` size='md')
            p.-text--center=name

      h4 Platform
      .chi-grid.icon-library.-pt--2.-pb--6
        each name in ['platform-adaptive-networking', 'platform-connected-security', 'platform-edge-compute', 'platform-it-agility-hybrid-cloud', 'platform-voice-unified-communications']
          .chi-col.-w--6.-w-xl--3.-mb--2
            .chi-card.-py--4.-bg--grey-10.-no-border.-align--center
              .chi-card__content
                chi-marketing-icon(icon=`${name}` size='md')
            p.-text--center=name

      h4 Products
      .chi-grid.icon-library.-pt--2.-pb--6
        each name in ['products-apps', 'products-designs', 'products-network-solutions']
          .chi-col.-w--6.-w-xl--3.-mb--2
            .chi-card.-py--4.-bg--grey-10.-no-border.-align--center
              .chi-card__content
                chi-marketing-icon(icon=`${name}` size='md')
            p.-text--center=name
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Icons extends Vue {}
</script>
