<template>
  <div id="expansion-panel-view">
    <h2>Expansion Panel</h2>
    <h3>Pending</h3>
    <ExpansionPanel
      v-for="(state, index) in states"
      :key="index"
      :step="index + 1"
      title="Title"
      state-icon="true"
      state-tooltip="The step has been done"
      :state="active === index ? 'active' : active > index ? 'done' : 'pending'"
    >
      <div slot="active">
        <div class="chi-epanel__subtitle">
          Optional subtitle
        </div>
        <p class="chi-epanel__text">
          Content in expansion panel (e.g. a form to select a product package)
        </p>
      </div>
      <div slot="done">
        Use this area to present<br />
        a read-only summary of what the user<br />
        entered or selected in step 1.<br />
        (e.g.) a package selection
      </div>
      <!-- <div slot="footer" class="-w--100">
        <div class="-bg--primary">
          Test
        </div>
      </div> -->
      <button slot="footerStart" class="chi-button" @click="active -= 1">Previous</button>
      <button slot="footerEnd" class="chi-button -primary" @click="active += 1">
        Continue
      </button>
      <div slot="change">
        <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
      </div>
    </ExpansionPanel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import ExpansionPanel from '../components/expansion-panel/ExpansionPanel';
import { EXPANSION_PANEL_STATES } from '../constants/types';

@Component({
  components: {
    ExpansionPanel,
  },
  data: () => {
    return {
      active: 0,
      states: EXPANSION_PANEL_STATES,
    };
  },
})
export default class ExpansionPanelView extends Vue {}
</script>

<style lang="scss"></style>
