<template>
  <div class="page container">
    <div v-for="(row, i) in page" :key="i" class="row">
      <svg v-for="(cell, i) in row" :key="i" class="cell" viewBox="0 0 10 10">
        <text x="50%" y="50%">{{ cell }}</text>
        <line
          x1="0"
          y1="5"
          x2="10"
          y2="5"
          style="stroke:rgb(192,192,192);stroke-width:1px"
          vector-effect="non-scaling-stroke"
        />
        <line
          x1="5"
          y1="0"
          x2="5"
          y2="10"
          style="stroke:rgb(192,192,192);stroke-width:1px"
          vector-effect="non-scaling-stroke"
        />
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

      while (k < this.glyphPerRow && i + k < this.verse.length) {
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
