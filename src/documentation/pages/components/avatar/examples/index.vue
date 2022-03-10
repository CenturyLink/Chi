<template lang="pug">
  div
    h3 Examples
    p.-text
      | To render an avatar, apply the class <code>chi-avatar</code> to a div element and place an image inside.
    <Base />
    <IconAvatar />
    <InitialAvatar />
    h3 Customizations
    <ColorCustomization />
    <LightTransparent />
    <Sizes />
    <AvatarGroups />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AvatarGroups from './_avatar-groups.vue';
import Base from './_base.vue';
import ColorCustomization from './_color-customization.vue';
import IconAvatar from './_icon-avatar.vue';
import InitialAvatar from './_initial-avatar.vue';
import LightTransparent from './_light-transparent.vue';
import Sizes from './_sizes.vue';

@Component({
  components: {
    Base,
    IconAvatar,
    InitialAvatar,
    ColorCustomization,
    LightTransparent,
    Sizes,
    AvatarGroups,
  }
})
export default class Examples extends Vue {}
</script>
