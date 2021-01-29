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
    <section class="section" id="body">
      <b-loading :is-full-page="false" v-model="isLoading" />
      <BibleSelector class="screen-only" />
      <div class="container" id="writebook">
        <div class="content">
          <span class="print-only">
            {{ today }}
          </span>
          {{ $store.getters.bookName }}
          {{ $store.state.chapter }}:{{ verseNumber }}
          <span class="screen-only">
            {{ $store.getters.verse }}
          </span>
        </div>
        <b-field class="screen-only">
          <b-button type="is-primary" icon="printer" expanded @click="print">
            Print
          </b-button>
        </b-field>

        <WriteBook type="grey" />
        <WriteBook type="transparent" />

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
  private selectViaHash() {
    const ifNaN = (x: number, y: number) => (isNaN(x) ? y : x);
    const hash = new URL(location.href).hash;
    const [version, book, _chapter, _verseStart, _verseEnd] = hash
      .substr(1)
      .split("/");
    const chapter = ifNaN(parseInt(_chapter), 1);
    const verseStart = ifNaN(parseInt(_verseStart), 1);
    const verseEnd = ifNaN(parseInt(_verseEnd), verseStart);

    return this.$store.dispatch("selectRange", {
      version,
      book,
      chapter,
      verseStart,
      verseEnd
    });
  }

  async created() {
    try {
      await this.$store.dispatch("loadMeta");
      window.addEventListener("hashchange", this.selectViaHash);
      await this.selectViaHash();
    } catch (e) {
      this.$buefy.toast.open({
        duration: 5000,
        message: e.toString(),
        position: "is-bottom",
        type: "is-danger"
      });
    }
  }

  async destroyed() {
    window.removeEventListener("hashchange", this.selectViaHash);
  }

  get isLoading() {
    return this.$store.state.loading;
  }

  get verseNumber() {
    if (this.$store.state.verseStart === this.$store.state.verseEnd) {
      return this.$store.state.verseStart;
    }
    return `${this.$store.state.verseStart}-${this.$store.state.verseEnd}`;
  }

  private today = "";

  private print() {
    this.today = new Date().toLocaleDateString();
    this.$nextTick(() => window.print());
  }
}
</script>

<style>
@media print {
  .screen-only {
    display: none !important;
  }
  .section {
    padding: 1em !important;
  }

  #app {
    height: 100vh;
  }
  #body {
    height: 100%;
  }
  #writebook {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #writebook .page {
    flex: 1;
  }
}
@media screen {
  .print-only {
    display: none !important;
  }
}
.copyright {
  font-size: 0.8rem;
}
</style>
