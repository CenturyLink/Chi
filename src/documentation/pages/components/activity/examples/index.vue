<template lang="pug">
  div
    h3 Examples
    p.-text
      | To render an activity, use the class <code>chi-activity</code>.
    <Base />
    <WithAvatar />
    <Feed />
    <CompactFeed />
    <FeedStories />
    <FeedStoriesIcons />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FeedStories from './_feed-stories.vue';
import Base from './_base.vue';
import FeedStoriesIcons from './_feed-stories-icons.vue';
import WithAvatar from './_with-avatar.vue';
import Feed from './_feed.vue';
import CompactFeed from './_compact-feed.vue';

@Component({
  components: {
    Base,
    WithAvatar,
    Feed,
    FeedStoriesIcons,
    CompactFeed,
    FeedStories,
  }
})
export default class Examples extends Vue {}
</script>
