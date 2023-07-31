<template lang="pug">
  div
    <TitleAnchor title="Responsive Layout" id="responsive-layout" titleSize="h2" />
    p.-text
      | Chi defines 5 different viewports: XS, SM, MD, LG and XL. By default, 
      | columns in a grid container behave the same across viewport sizes. 
      | You will often want to change the layout based on the user's current 
      | viewport. You may accomplish this by setting viewport-specific 
      | classes to each of your columns that denote sizing or layout 
      | preferences for the viewport or viewports you are concerned with changing.
      br
      br
      |It is important to note that viewport-specific classes apply to their 
      | respective viewport and any larger viewport (unless overridden by a 
      | larger viewport class). For example, specifying <code>-w-md--6</code> 
      | would apply a width of 6 units to the column in MD, LG and XL viewports.
    
    .chi-alert.-info.-my--3
      i.chi-alert__icon.chi-icon.icon-circle-info
      .chi-alert__content
        p.chi-alert__text Try resizing your browser window to see the following examples in action as you change the viewport size.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ResponsiveLayout extends Vue {}
</script>
