<template lang="pug">
  div
    h2 Examples
    p.-text To render application layout, use the tag <code>chi-main</code>.

    <Base />
    <BaseHelp />
    <BaseBackLink />
    <BaseSubtitle />
    <BaseSubtitleButtons />
    <BasePageLevelActions />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseSubtitleButtons from './_base-back-link-subtitle-buttons.vue';
import BaseSubtitle from './_base-back-link-subtitle.vue';
import BaseBackLink from './_base-back-link.vue';
import BaseHelp from './_base-help.vue';
import BasePageLevelActions from './_base-page-level-actions.vue';
import Base from './_base.vue';

@Component({
  components: {
    Base,
    BaseHelp,
    BaseBackLink,
    BaseSubtitle,
    BaseSubtitleButtons,
    BasePageLevelActions
  },
})
export default class Examples extends Vue {}
</script>
