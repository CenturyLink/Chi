<template>
  <h2>Expansion Panel</h2>
  <h3>Pending</h3>
  <ExpansionPanel
    v-for="(state, index) in states"
    :key="index"
    :step="index + 1"
    title="Title"
    state-icon="true"
    state-icon-tooltip="The step has been done"
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
    <template v-slot:footer-start>
      <button class="chi-button" @click="active -= 1">Previous</button>
    </template>
    <template v-slot:footer-end>
      <button class="chi-button -primary" @click="active += 1">Continue</button>
    </template>
    <template v-slot:change>
      <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Edit</button>
    </template>
  </ExpansionPanel>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ExpansionPanel from '@/components/expansion-panel/ExpansionPanel';
import { EXPANSION_PANEL_STATES } from '@/constants/types';

const active = ref(0);
const states = ref(EXPANSION_PANEL_STATES);
</script>
