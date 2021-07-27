<template>
  <div id="search-input-view">
    <div class="search-input-examples__wrapper">
      <h2>Search Input</h2>
      <h3>xs</h3>
      <SearchInput
        @chiInput="ev => input(ev)"
        @chiChange="ev => change(ev)"
        @chiClean="ev => clean(ev)"
        @chiFocus="ev => focus(ev)"
        @chiBlur="ev => blur(ev)"
        @chiSearch="ev => search(ev)"
        class="-mt--2"
        size="xs"
      />
      <h3>sm</h3>
      <SearchInput class="-mt--2" size="sm" />
      <h3>md</h3>
      <SearchInput class="-mt--2" size="md" />
      <h3>lg</h3>
      <SearchInput class="-mt--2" size="lg" />
      <h3>lg</h3>
      <SearchInput class="-mt--2" size="xl" />
      <h3>disabled</h3>
      <SearchInput class="-mt--2" disabled />
      <h3>value</h3>
      <SearchInput class="-mt--2" value="Value" />
      <h3>placeholder</h3>
      <SearchInput class="-mt--2" placeholder="placeholder" />
      <h3>name</h3>
      <SearchInput class="-mt--2" name="name" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from '../components/search-input/SearchInput';

@Component({
  components: {
    SearchInput,
  },
})
export default class SearchInputView extends Vue {
  input(ev: Event) {
    console.log('input ' + ev);
  }

  change(ev: Event) {
    console.log('change ' + ev);
  }

  clean() {
    console.log('clean');
  }

  focus() {
    console.log('focus');
  }

  blur() {
    console.log('blur');
  }

  search(ev: Event) {
    console.log('search ' + ev);
  }
}
</script>

<style lang="scss">
.search-input-examples__wrapper {
  max-width: 20rem;
}
</style>
