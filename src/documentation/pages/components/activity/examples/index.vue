<template lang="pug">
h2 Examples
p.-text
  | To render an activity, use the class <code>chi-activity</code>.

BaseActivity 
WithAvatar
Feed
CompactFeed
FeedStories
FeedStoriesIcons
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import FeedStories from './_feed-stories.vue';
import BaseActivity from './_base.vue';
import FeedStoriesIcons from './_feed-stories-icons.vue';
import WithAvatar from './_with-avatar.vue';
import Feed from './_feed.vue';
import CompactFeed from './_compact-feed.vue';

@NuxtComponent({
  components: {
    BaseActivity,
    WithAvatar,
    Feed,
    FeedStoriesIcons,
    CompactFeed,
    FeedStories,
  },
})
export default class Examples extends Vue {}
</script>
