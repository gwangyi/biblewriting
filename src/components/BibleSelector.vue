<template>
  <div class="container">
    <section>
      <b-field>
        <b-select v-model="version" rounded expanded icon="translate">
          <option
            v-for="version in versions"
            :value="version.code"
            :key="version.code"
          >
            {{ version.name }}
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
      <b-field>
        <b-checkbox v-model="ranged">
          여러 절 보기
        </b-checkbox>
      </b-field>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { debounce } from "typescript-debounce-decorator";
import { CodeMapEntry } from "@/store/index";

@Component
export default class BibleSelector extends Vue {
  created() {
    this.onBookName();
  }

  get version() {
    return this.$store.state.version;
  }

  set version(version) {
    (async () => {
      try {
        await this.$store.dispatch("select", { version });
      } catch (e) {
        this.$buefy.toast.open({
          duration: 5000,
          message: String(e),
          position: "is-bottom",
          type: "is-danger"
        });
      }
    })();
  }

  private book = "";
  private ranged = false;

  @Watch("$store.getters.bookName")
  private onBookName() {
    this.book = this.$store.getters.bookName;
  }

  @Watch("book")
  private async onBook() {
    const book = (this.$store.getters.books as CodeMapEntry[]).find(
      ({ name }) => name === this.book
    );
    if (book && this.$store.state.book !== book.code) {
      try {
        await this.$store.dispatch("select", { book: book.code });
      } catch (e) {
        this.$buefy.toast.open({
          duration: 5000,
          message: String(e),
          position: "is-bottom",
          type: "is-danger"
        });
      }
    }
  }

  get chapter() {
    return this.$store.state.chapter || 1;
  }

  set chapter(chapter) {
    this.setchapter(chapter);
  }

  @debounce(500)
  private async setchapter(chapter: number) {
    if (this.chapter !== chapter) {
      try {
        await this.$store.dispatch("selectRange", { chapter });
      } catch (e) {
        this.$buefy.toast.open({
          duration: 5000,
          message: String(e),
          position: "is-bottom",
          type: "is-danger"
        });
      }
    }
  }

  get singleVerse() {
    return this.$store.state.verseStart || 1;
  }

  set singleVerse(verse) {
    this.setverse(verse, verse);
  }

  get multiVerse() {
    const start = this.$store.state.verseStart || 1;
    const end = this.$store.state.verseEnd || 1;
    return [start, end];
  }

  set multiVerse(verse) {
    if (verse.length === 2) {
      this.setverse(verse[0], verse[1]);
    }
  }

  get verse() {
    if (this.ranged) {
      return this.multiVerse;
    }
    return this.singleVerse;
  }

  set verse(verse) {
    if (this.ranged) {
      this.multiVerse = verse;
    } else {
      this.singleVerse = verse;
    }
  }

  @debounce(200)
  private async setverse(verseStart: number, verseEnd: number) {
    if (this.multiVerse[0] !== verseStart || this.multiVerse[1] !== verseEnd) {
      try {
        await this.$store.dispatch("selectRange", { verseStart, verseEnd });
      } catch (e) {
        this.$buefy.toast.open({
          duration: 5000,
          message: String(e),
          position: "is-bottom",
          type: "is-danger"
        });
      }
    }
  }

  get versions() {
    return this.$store.getters.versions;
  }

  get bookNames() {
    return (this.$store.getters.books as CodeMapEntry[])
      .map(({ name }) => name)
      .filter((name: string) =>
        name.toLowerCase().includes(this.book.toLowerCase())
      );
  }

  get chapters() {
    return this.$store.getters.chapters;
  }

  get verses() {
    return this.$store.getters.verses;
  }
}
</script>
