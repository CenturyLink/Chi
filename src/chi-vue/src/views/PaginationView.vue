<template>
  <div id="paginationview">
    <h1>Pagination</h1>
    <h2>Base</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -w-md--6 -py--2">
        <Pagination
          :pages="5"
          :currentPage="3"
          @chiPageChange="e => pageChange(e)"
        />
      </div>
      <div class="chi-col -w--12 -w-md--6 -py--2 -bg--black">
        <Pagination :pages="5" :currentPage="3" :inverse="true" />
      </div>
    </div>

    <h2>Disabled</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -w-md--6 -py--2">
        <Pagination :pages="5" :currentPage="1" />
      </div>
      <div class="chi-col -w--12 -w-md--6 -py--2 -bg--black">
        <Pagination :pages="5" :currentPage="1" :inverse="true" />
      </div>
    </div>

    <h2>Truncation</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -w-md--6 -py--2">
        <Pagination :pages="12" :currentPage="3" />
      </div>
      <div class="chi-col -w--12 -w-md--6 -py--2 -bg--black">
        <Pagination :pages="12" :currentPage="3" :inverse="true" />
      </div>
    </div>

    <h2>Double Truncation</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -w-md--6 -py--2">
        <Pagination :pages="12" :currentPage="6" />
      </div>
      <div class="chi-col -w--12 -w-md--6 -py--2 -bg--black">
        <Pagination :pages="12" :currentPage="6" :inverse="true" />
      </div>
    </div>

    <h2>Results Label</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -w-md--6 -py--2">
        <Pagination :pages="12" :currentPage="3" :results="240" />
      </div>
      <div class="chi-col -w--12 -w-md--6 -py--2 -bg--black">
        <Pagination
          :pages="12"
          :currentPage="6"
          :inverse="true"
          :results="240"
        />
      </div>
    </div>

    <h2>Page Size</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -py--2">
        <Pagination
          :pages="12"
          :currentPage="3"
          :results="240"
          :page-size="true"
          @chiPageSizeChange="e => pageSizeChange(e)"
        />
      </div>
      <div class="chi-col -w--12 -py--2 -bg--black">
        <Pagination
          :pages="12"
          :currentPage="3"
          :inverse="true"
          :results="240"
          :page-size="true"
        />
      </div>
    </div>

    <h2>Page Jumper</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -py--2">
        <Pagination
          :pages="12"
          :currentPage="3"
          :results="240"
          :page-size="true"
          :page-jumper="true"
          @chiPageChange="e => pageChange(e)"
        />
      </div>
      <div class="chi-col -w--12 -py--2 -bg--black">
        <Pagination
          :pages="12"
          :currentPage="3"
          :inverse="true"
          :results="240"
          :page-size="true"
          :page-jumper="true"
        />
      </div>
    </div>

    <h2>Compact</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -w-md--6 -py--2">
        <Pagination :pages="3" :currentPage="2" :compact="true" />
      </div>
      <div class="chi-col -w--12 -w-md--6 -py--2 -bg--black">
        <Pagination
          :pages="3"
          :currentPage="2"
          :compact="true"
          :inverse="true"
        />
      </div>
    </div>

    <h2>Page Jumper</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -w-md--6 -py--2">
        <Pagination
          :pages="3"
          :currentPage="2"
          :compact="true"
          :page-jumper="true"
        />
      </div>
      <div class="chi-col -w--12 -w-md--6 -py--2 -bg--black">
        <Pagination
          :pages="3"
          :currentPage="2"
          :compact="true"
          :page-jumper="true"
          :inverse="true"
        />
      </div>
    </div>

    <h2>First and Last page buttons</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -w-md--6 -py--2">
        <Pagination
          :pages="3"
          :currentPage="2"
          :compact="true"
          :page-jumper="true"
          :first-last="true"
        />
      </div>
      <div class="chi-col -w--12 -w-md--6 -py--2 -bg--black">
        <Pagination
          :pages="3"
          :currentPage="2"
          :compact="true"
          :page-jumper="true"
          :first-last="true"
          :inverse="true"
        />
      </div>
    </div>

    <h2>Additional Sizes</h2>
    <div class="chi-grid -mx--1">
      <div class="chi-col -w--12 -w-md--6 -py--2">
        <div class="-text--bold">-sm</div>
        <Pagination :pages="5" :currentPage="3" size="sm" />
        <div class="-text--bold">-md</div>
        <Pagination :pages="5" :currentPage="3" size="md" />
        <div class="-text--bold">-lg</div>
        <Pagination :pages="5" :currentPage="3" size="lg" />
        <div class="-text--bold">-xl</div>
        <Pagination :pages="5" :currentPage="3" size="xl" />
      </div>
      <div class="chi-col -w--12 -w-md--6 -py--2 -bg--black">
        <div class="-text--bold -text--light">-sm</div>
        <Pagination :pages="5" :currentPage="3" size="sm" :inverse="true" />
        <div class="-text--bold -text--light">-md</div>
        <Pagination :pages="5" :currentPage="3" size="md" :inverse="true" />
        <div class="-text--bold -text--light">-lg</div>
        <Pagination :pages="5" :currentPage="3" size="lg" :inverse="true" />
        <div class="-text--bold -text--light">-xl</div>
        <Pagination :pages="5" :currentPage="3" size="xl" :inverse="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pagination from '../components/pagination/pagination';

@Component({
  components: {
    Pagination
  }
})
export default class PaginationView extends Vue {
  pageChange(e: Event) {
    console.log(e);
  }

  pageSizeChange(e: Event) {
    console.log(e);
  }
}
</script>

<style lang="scss"></style>
