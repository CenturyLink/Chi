<script setup lang="ts">
import { SECTION_URLS } from '~/constants/constants';

const { query } = useRoute();
const isDev = useRuntimeConfig().public.isDev;

// await navigateTo({
//   path: `/${SECTION_URLS.gettingStarted}${isDev ? '-wip' : ''}/introduction`,
//   query,
// });
</script>
