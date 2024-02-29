<template lang="pug">
.chi-grid__container.-pt--3
  <PrerecordedAudioVideo />
  <CaptionsPrerecorded />
  <AudioDescription />
  <CaptionsLive />
  <AudioPrerecorded />
  <AudioControl />
  <TimingAdjustable />
  <PauseStopHide />
  <ThreeFlashes />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import PrerecordedAudioVideo from './_prerecorded-audio-video.vue';
import CaptionsPrerecorded from './_captions-prerecorded.vue';
import AudioDescription from './_audio-description.vue';
import CaptionsLive from './_caption-live.vue';
import AudioPrerecorded from './_audio-prerecorded.vue';
import AudioControl from './_audio-control.vue';
import TimingAdjustable from './_timing-adjustable.vue';
import PauseStopHide from './_pause-stop-hide.vue';
import ThreeFlashes from './_three-flashes.vue';

@NuxtComponent({
  components: {
    PrerecordedAudioVideo,
    CaptionsPrerecorded,
    AudioDescription,
    CaptionsLive,
    AudioPrerecorded,
    AudioControl,
    TimingAdjustable,
    PauseStopHide,
    ThreeFlashes,
  },
})
export default class Examples extends Vue {}
</script>
