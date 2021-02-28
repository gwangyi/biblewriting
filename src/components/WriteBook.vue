<template>
  <div class="page container">
    <div v-for="(row, i) in page" :key="i" class="row">
      <WriteCell v-for="(cell, i) in row" :key="i" :cell="cell" :type="type" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import WriteCell from "./WriteCell.vue";

const within = (n: number, min: number, max: number) => n >= min && n < max;

@Component({
  components: { WriteCell }
})
export default class WriteBook extends Vue {
  @Prop({ default: "" })
  private type!: string;

  private glyphPerRow = 10;

  @Watch("verse")
  private adjustGlyphsPerRow() {
    let min = 10,
      max = this.verse.length;
    let diff = 0;
    this.glyphPerRow = 10;

    while (min < max) {
      this.glyphPerRow = Math.floor((min + max) / 2);
      diff = this.page.length - this.glyphPerRow * 0.7;
      if (min === this.glyphPerRow) break;
      if (diff > 0) {
        min = this.glyphPerRow;
      } else if (diff < 0) {
        max = this.glyphPerRow;
      } else {
        break;
      }
    }

    if (diff > 0) this.glyphPerRow += 1;
    if (this.glyphPerRow < 10) this.glyphPerRow = 10;
  }

  get verse() {
    return this.$store.getters.verse;
  }

  get page() {
    const page = [];
    let i = 0;
    let first = true;
    while (i < this.verse.length) {
      const row = [];
      while (this.verse[i] === " " && i < this.verse.length) ++i;
      if (i >= this.verse.length) break;

      let j = 0,
        k = 0;

      if (first) {
        k += 1;
        row.push("");
      }
      first = false;

      while (k < this.glyphPerRow && i + j < this.verse.length) {
        if (this.verse[i + j] == "\n") {
          j += 1;
          first = true;
          break;
        } else if (
          within(this.verse.charCodeAt(i + j), 32, 256) &&
          within(this.verse.charCodeAt(i + j + 1), 32, 256)
        ) {
          row.push(this.verse[i + j] + this.verse[i + j + 1]);
          j += 2;
        } else {
          row.push(this.verse[i + j]);
          j += 1;
        }
        ++k;
      }
      if (
        row.length === this.glyphPerRow &&
        [".", ",", '"', "'"].includes(this.verse[i + j])
      ) {
        row[row.length - 1] += this.verse[i + j];
        j += 1;
      }
      if (row.length > 0) {
        while (row.length < this.glyphPerRow) {
          row.push("");
        }
        page.push(row);
      }
      i += j;
    }
    return page;
  }
}
</script>

<style scoped>
@import (
  "https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap"
);

.page {
  display: flex;
  flex-direction: column;
  margin: 1em 0;
}

.row {
  display: flex;
  flex-direction: row;
}

.cell {
  flex: 1;
  height: auto;
  border: 1px solid black;
  margin: -0.5px;
}
</style>
