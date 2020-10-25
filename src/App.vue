<template>
  <div id="app">
    <section class="hero is-primary screen-only">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            성경쓰기연습장 생성기
          </h1>
          <h2 class="subtitle">
            Data from
            <a href="https://bskorea.or.kr/" target="_blank">대한성서공회</a>
          </h2>
          <img src="./assets/logo.png" />
        </div>
      </div>
    </section>
    <section class="section">
      <b-loading :is-full-page="false" v-model="isLoading" />
      <BibleSelector class="screen-only" />
      <div class="container">
        <div class="content">
          {{ $store.getters.bookName }}
          {{ $store.state.chapter }}:{{ $store.state.verse }}
          <span class="screen-only">
            {{ $store.getters.verse }}
          </span>
        </div>
        <b-field class="screen-only">
          <b-button type="is-primary" icon="printer" expanded @click="print"
            >Print</b-button
          >
        </b-field>

        <WriteBook class="grey" />
        <WriteBook class="transparent" />

        <span class="copyright screen-only">
          Icons made by
          <a href="https://www.flaticon.com/authors/itim2101" title="itim2101"
            >itim2101</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com</a
          >
        </span>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BibleSelector from "./components/BibleSelector.vue";
import WriteBook from "./components/WriteBook.vue";

@Component({
  components: {
    BibleSelector,
    WriteBook
  }
})
export default class App extends Vue {
  async created() {
    await this.$store.dispatch("loadMeta");
    await this.$store.dispatch("loadChapter");
  }

  get isLoading() {
    return this.$store.state.loading;
  }

  private print() {
    window.print();
  }
}
</script>

<style>
@media print {
  .screen-only {
    display: none !important;
  }
}
.copyright {
  font-size: 0.8rem;
}
</style>
