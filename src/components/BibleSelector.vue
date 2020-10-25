<template>
  <div class="container">
    <section>
      <b-field>
        <b-select v-model="version" rounded expanded icon="translate">
          <option
            v-for="version in versions"
            :value="version[1]"
            :key="version[1]"
          >
            {{ version[0] }}
          </option>
        </b-select>
      </b-field>
      <b-field>
        <b-autocomplete
          rounded
          v-model="book"
          :data="bookNames"
          icon="book-open-page-variant"
          clearable
          open-on-focus
        >
          <template slot="empty">No results found</template>
        </b-autocomplete>
      </b-field>
      <b-field label="장">
        <b-slider
          v-model="chapter"
          :min="1"
          :max="chapters"
          ticks
          :custom-formatter="val => (val ? val.toString() : '')"
        ></b-slider>
      </b-field>
      <b-field label="절">
        <b-slider
          v-model="verse"
          :min="1"
          :max="verses"
          ticks
          :custom-formatter="val => (val ? val.toString() : '')"
        ></b-slider>
      </b-field>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { debounce } from "typescript-debounce-decorator";

@Component
export default class BibleSelector extends Vue {
  created() {
    this.onBookName();
  }

  get version() {
    return this.$store.state.version;
  }

  set version(version) {
    this.$store.dispatch("select", { version });
  }

  private book = "";

  @Watch("$store.getters.bookName")
  private onBookName() {
    this.book = this.$store.getters.bookName;
  }

  @Watch("book")
  private onBook() {
    const bookPair = this.$store.getters.books.find(
      ([name]) => name === this.book
    );
    if (bookPair && this.$store.state.book !== bookPair[1]) {
      this.$store.dispatch("select", { book: bookPair[1] });
    }
  }

  get chapter() {
    return this.$store.state.chapter || 1;
  }

  set chapter(chapter) {
    this.setchapter(chapter);
  }

  @debounce(200)
  private setchapter(chapter) {
    if (this.chapter !== chapter) {
      this.$store.dispatch("select", { chapter });
    }
  }

  get verse() {
    return this.$store.state.verse || 1;
  }

  set verse(verse) {
    this.setverse(verse);
  }

  @debounce(200)
  private setverse(verse) {
    if (this.verse !== verse) {
      this.$store.dispatch("select", { verse });
    }
  }

  get versions() {
    return this.$store.getters.versions;
  }

  get bookNames() {
    return this.$store.getters.books
      .map(([name]) => name)
      .filter(name => name.toLowerCase().includes(this.book.toLowerCase()));
  }

  get chapters() {
    return this.$store.getters.chapters;
  }

  get verses() {
    return this.$store.getters.verses;
  }
}
</script>
