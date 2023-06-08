<template>
  <div id="expansion-panel-view">
    <h2>Expansion Panel</h2>
    <h3>Pending</h3>
    <ExpansionPanel
      v-for="(state, index) in states"
      :key="index"
      :step="index + 1"
      title="Title"
      :state="active === index ? 'active' : active > index ? 'done' : 'pending'"
    >
      <template v-slot:active>
        <div class="chi-epanel__subtitle">Optional subtitle</div>
        <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select a product package)</p>
      </template>
      <template v-slot:done>
        Use this area to present<br />
        a read-only summary of what the user<br />
        entered or selected in step 1.<br />
        (e.g.) a package selection
      </template>
      <template v-slot:footerStart>
        <button class="chi-button" @click="active -= 1">Previous</button>
      </template>
      <template v-slot:footerEnd>
        <button class="chi-button -primary" @click="active += 1">Continue</button>
      </template>
      <template v-slot:change>
        <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
      </template>
    </ExpansionPanel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import ExpansionPanel from '@/components/expansion-panel/ExpansionPanel';
import { EXPANSION_PANEL_STATES } from '@/constants/types';

@Component({
  components: {
    ExpansionPanel,
  },
})
export default class ExpansionPanelView extends Vue {
  active = 0;
  states = EXPANSION_PANEL_STATES;
}
</script>
