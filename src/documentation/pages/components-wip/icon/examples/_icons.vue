<template lang="pug">
  div
    h4 Icons
    .chi-grid.icon-library.-pt--2.-pb--6
      .chi-col.-w--6.-w-xl--2.-w-lg--3.-w-md--6.-mb--2(v-for="name in names")
        .chi-card.-py--4.-bg--grey-10.-no-border.-align--center
          .chi-card__content
            chi-icon(:icon='name' size='sm--3')
        p.-text--center icon-{{name}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      names: ['activity', 'address-book', 'api', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-long-down', 'arrow-long-left', 'arrow-long-right', 'arrow-long-up', 'arrow-sort', 'arrow-sync', 'arrow-to-bottom', 'arrow-vertical', 'arrows', 'asterisk', 'atom', 'attachment', 'autopay', 'ban', 'bank', 'bell-off-outline', 'bell-off', 'bell-outline', 'bell', 'bell-settings-outline', 'bookmark-outline', 'bookmark', 'box-application', 'box-cloudformation', 'box-container', 'box-deployment', 'box-fill', 'box-outline', 'box-script', 'box', 'cart-alt', 'cart-outline', 'cart', 'chart-bar', 'chart-line', 'chart-pie', 'chat-outline', 'chat', 'check-alt', 'check-double', 'check', 'checkbox-checked', 'checkbox', 'checklist-outline', 'checklist', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'circle-alert-outline', 'circle-alert', 'circle-arrow-down-outline', 'circle-arrow-down', 'circle-arrow-up-outline', 'circle-arrow-up', 'circle-check-outline', 'circle-check', 'circle-clock-outline', 'circle-clock', 'circle-code-outline', 'circle-code', 'circle-gear-outline', 'circle-gear', 'circle-info-outline', 'circle-info', 'circle-minus-outline', 'circle-minus', 'circle-outline', 'circle-pie', 'circle-play-outline', 'circle-play', 'circle-plus-outline', 'circle-plus', 'circle-question-outline', 'circle-question', 'circle-reload-outline', 'circle-reload', 'circle-slash', 'circle-slash-outline', 'circle-stop-outline', 'circle-stop', 'circle-user', 'circle-warning', 'circle-wrench', 'circle-x-outline', 'circle-x', 'circle', 'cloud-outline', 'cloud-products', 'cloud', 'comment-dots-outline', 'comment-dots', 'comment-outline', 'comment', 'comments-dots-outline', 'comments-dots', 'comments-outline', 'comments', 'compose-cancel', 'compose', 'computer', 'copy', 'cost', 'dashboard', 'database-outline', 'database', 'date', 'date-alt', 'delete', 'diagram-outline', 'diagram', 'drag-vertical-outline', 'drag-vertical', 'edge-solutions', 'edit', 'edit-cancel', 'edit-create', 'edit-reload', 'external-link', 'fact-check-outline', 'fact-check', 'file-check-outline', 'file-check', 'file-error-outline', 'file-export', 'file-invoice-gear', 'file-invoice', 'file-outline', 'file', 'filter-alt-off-outline', 'filter-alt-off', 'filter-alt-outline', 'filter-alt', 'filter', 'flag', 'folder-gear', 'folder-open', 'folder', 'globe-network', 'globe-outline', 'grid', 'hand-gear', 'handshake', 'heart', 'home-outline', 'home', 'inbox-multiple', 'inbox', 'key', 'life-ring', 'lightbulb-magic-outline', 'lightbulb-magic', 'link', 'list-alt', 'list', 'lock-outline', 'lock', 'login', 'logo-amazon', 'logo-aws', 'logo-azure', 'logo-centurylink', 'logo-cloudstack', 'logo-dimensiondata', 'logo-facebook', 'logo-github', 'logo-google', 'logo-hp', 'logo-linkedin', 'logo-linux', 'logo-openstack', 'logo-rackspace', 'logo-slack', 'logo-twitter', 'logo-vcloud', 'logo-vsphere', 'logo-youtube', 'logout', 'mail-incoming-outline', 'mail-incoming', 'mail-outgoing-outline', 'mail-outgoing', 'mail-outline', 'mail', 'map-marker-alt', 'map-marker', 'map-marker-outline', 'menu', 'microphone-mute', 'microphone', 'minus-alt', 'minus', 'moon-outline', 'moon', 'more-vert', 'more', 'nodes', 'number', 'page-first', 'page-last', 'paste', 'pause', 'phone', 'play', 'plus-alt', 'plus', 'print', 'radio-checked', 'radio', 'refresh', 'reload', 'reset', 'rocket', 'search', 'settings', 'share', 'shield', 'spinner', 'square-minus-outline', 'square-minus', 'square-plus-outline', 'square-plus', 'star-outline', 'star', 'stop', 'sun-outline', 'sun', 'sync', 'table-column-settings', 'table', 'tag-outline', 'tag', 'text', 'thumbtack-angle', 'ticket-wrench-multiple', 'ticket-wrench', 'triangle-down', 'triangle-left', 'triangle-right', 'triangle-up', 'triangle-wrench', 'unlock-outline', 'unlock', 'user-outline', 'user-settings', 'user', 'users', 'verified', 'video-camera-mute', 'video-camera', 'visible-off', 'visible', 'voip', 'warning-outline', 'warning', 'wifi-outline', 'wifi', 'wrench', 'x-alt', 'x'],
    }
  },
})
export default class Icons extends Vue {}
</script>
