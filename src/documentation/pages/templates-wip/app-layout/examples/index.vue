<template lang="pug">
h2 Examples
p.-text To render application layout, use the tag <code>chi-main</code>.

BaseExample
<HelpIcon />
<Alert />
<BackLink />
<BackLinkSubtitle />
<BackLinkSubtitleButtons />
<BackLinkSubtitleButtonsPageLevelActions />
<Dashboard />
<DashboardAlert />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import HelpIcon from './_help_icon.vue';
import Alert from './_alert.vue';
import Base from './_base.vue';
import BackLink from './_back_link.vue';
import BackLinkSubtitle from './_back_link_subtitle.vue';
import BackLinkSubtitleButtons from './_back_link_subtitle_buttons.vue';
import BackLinkSubtitleButtonsPageLevelActions from './_back_link_subtitle_buttons_page_level_actions.vue';
import Dashboard from './_dashboard.vue';
import DashboardAlert from './_dashboard_alert.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    HelpIcon,
    Alert,
    BackLink,
    BackLinkSubtitle,
    BackLinkSubtitleButtons,
    BackLinkSubtitleButtonsPageLevelActions,
    Dashboard,
    DashboardAlert,
  },
})
export default class Examples extends Vue {}
</script>
