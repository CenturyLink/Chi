<script setup lang="ts">
import { SECTION_URLS } from '~/constants/constants';

const { path, query } = useRoute();
const isDev = useRuntimeConfig().public.isDev;

console.debug('Path:', path)
console.debug('Dev mode:', isDev)

if (path === '/') {
  // await navigateTo({
  //   path: `/${SECTION_URLS.gettingStarted}${isDev ? '-wip' : ''}`,
  //   query,
  // });
}
</script>
