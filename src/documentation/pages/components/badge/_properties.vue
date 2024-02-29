<template lang="pug">
h2 Web Component
<PropertiesGenerator tag="chi-badge" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Properties extends Vue {}
</script>
