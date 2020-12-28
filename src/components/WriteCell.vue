<template>
  <svg
    class="cell"
    :class="{ grey: type === 'grey', transparent: type === 'transparent' }"
    viewBox="0 0 10 10"
  >
    <text
      :x="leftHalf ? '25%' : rightHalf ? '75%' : '50%'"
      y="50%"
      text-anchor="middle"
      dominant-baseline="central"
    >
      {{ cellGlyph }}
    </text>
    <text
      v-if="overlayGlyph"
      x="100%"
      y="50%"
      text-anchor="end"
      dominant-baseline="central"
    >
      {{ overlayGlyph }}
    </text>
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
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class WriteCell extends Vue {
  @Prop(String)
  private cell!: string;

  @Prop({ default: "" })
  private type!: string;

  get overlayGlyph() {
    if (
      this.cell.length >= 2 &&
      (this.cell.charCodeAt(0) < 32 || this.cell.charCodeAt(0) >= 256)
    ) {
      return this.cell[1];
    }
    return "";
  }

  get cellGlyph() {
    if (this.overlayGlyph) {
      return this.cell[0];
    }
    return this.cell;
  }

  get leftHalf() {
    if ([".", ","].includes(this.cell.trim())) {
      return true;
    }

    if (['" ', "' "].includes(this.cell)) {
      return true;
    }

    return false;
  }

  get rightHalf() {
    if ([' "', " '"].includes(this.cell)) {
      return true;
    }
    if (['"', "'"].includes(this.cell)) {
      return true;
    }

    return false;
  }
}
</script>

<style scoped>
svg.cell text {
  font-family: "Nanum Gothic";
  font-weight: 700;
  font-size: 8px;
}

.grey text {
  fill: #ccc;
}

.transparent text {
  fill: transparent;
}
</style>
