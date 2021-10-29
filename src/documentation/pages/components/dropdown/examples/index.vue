<template lang="pug">
  div
    h2 Examples
    p.-text
      | A dropdown must be associated with an activator, commonly a button, which, at the time of being clicked, expands
      | the dropdown. Activator and dropdown should be contained in a div with a <code>chi-dropdown</code> class, or otherwise, the
      | activator must reference the dropdown with a <code>data-target</code> attribute.
      | Use the <code>chi-dropdown__trigger</code> class on your activator button to make the chevron appear.

    <BaseExample />
    <DataTargetExample />
    <HoverExample />
    <AnimateExample />
    <PositioningExample />

    h2 Menu
    <StatesExample />
    <DescriptionExample />
    <DividerExample />
    <IconsExample />
    <SearchBoxExample />

    h3 Checkboxes
    <CheckboxesBaseExample />
    <CheckboxesIconsExample />

    <RadioButtonsExample />
    <RangeInputExample />
    <ToggleSwitchExample />
    <PlainTextExample />

    h3 Helpers
    <TruncateLongMenuItemsExample />
    <FlexibleHeightExample />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseExample from './_base.vue';
import DataTargetExample from './_data_target.vue';
import HoverExample from './_hover.vue';
import AnimateExample from './_animate.vue';
import PositioningExample from './_positioning.vue';
import StatesExample from './_states.vue';
import DescriptionExample from './_description.vue';
import DividerExample from './_divider.vue';
import IconsExample from './_icons.vue';
import SearchBoxExample from './_search_box.vue';
import CheckboxesBaseExample from './_checkboxes_base.vue';
import CheckboxesIconsExample from './_checkboxes_icons.vue';
import RadioButtonsExample from './_radio_buttons.vue';
import RangeInputExample from './_range_input.vue';
import ToggleSwitchExample from './_toggle_switch.vue';
import PlainTextExample from './_plain_text.vue';
import TruncateLongMenuItemsExample from './_truncate_long_menu_items.vue';
import FlexibleHeightExample from './_flexible_height.vue';

@Component({
  components: {
    AnimateExample,
    BaseExample,
    CheckboxesBaseExample,
    CheckboxesIconsExample,
    DataTargetExample,
    DescriptionExample,
    DividerExample,
    FlexibleHeightExample,
    HoverExample,
    IconsExample,
    PlainTextExample,
    PositioningExample,
    RadioButtonsExample,
    RangeInputExample,
    SearchBoxExample,
    StatesExample,
    ToggleSwitchExample,
    TruncateLongMenuItemsExample
  }
})
export default class DropdownExamples extends Vue {
  mounted() {}
}
</script>
