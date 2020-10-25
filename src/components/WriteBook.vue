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

@Component({})
export default class WriteBook extends Vue {
  get verse() {
    return this.$store.getters.verse;
  }

  get page() {
    const page = [];
    for (let i = 0; i < this.verse.length; i += this.glyphPerRow) {
      while (this.verse[i] === " " && i < this.verse.length) ++i;
      if (i >= this.verse.length) break;
      page.push(
        Array.from(Array(this.glyphPerRow).keys()).map(
          idx => this.verse[idx + i] || ""
        )
      );
    }
    return page;
  }

  get glyphPerRow() {
    return Math.max(Math.ceil(Math.sqrt(this.verse.length / 0.7) + 1), 10);
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
