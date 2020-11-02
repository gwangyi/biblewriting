<template>
  <div class="page container">
    <div v-for="(row, i) in page" :key="i" class="row">
      <svg v-for="(cell, i) in row" :key="i" class="cell" viewBox="0 0 10 10">
        <text x="50%" y="50%">{{ cell }}</text>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const within = (n: number, min: number, max: number) => n >= min && n < max;

@Component({})
export default class WriteBook extends Vue {
  get verse() {
    return this.$store.getters.verse;
  }

  get page() {
    const page = [];
    let i = 0;
    while (i < this.verse.length) {
      const row = [];
      while (this.verse[i] === " " && i < this.verse.length) ++i;
      if (i >= this.verse.length) break;

      let j = 0,
        k = 0;
      while (k < this.glyphPerRow && i + k < this.verse.length) {
        if (this.verse[i + j] == "\n") {
          j += 1;
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
      if (row.length > 0) {
        while (k < this.glyphPerRow) {
          row.push("");
          ++k;
        }
        page.push(row);
      }
      i += j;
    }
    return page;
  }

  get glyphPerRow() {
    return Math.max(
      Math.ceil(Math.sqrt(this.verse.length / 0.7) + 1) +
        Math.ceil((this.verse.match(/\n/g) || []).length * 0.35),
      10
    );
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

.cell:before {
  content: "";
  float: left;
  padding-top: 100%;
}

svg.cell text {
  font-family: "Nanum Gothic";
  font-weight: 700;
  font-size: 9px;
  text-anchor: middle;
  dominant-baseline: central;
}

.grey text {
  fill: #ccc;
}

.transparent text {
  fill: transparent;
}
</style>
