<template>
  <div class="grid-content">
    <grid-layout
      class="mb-8"
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        :isResizable="item.resizable"
      >
        <v-sheet color="blue-grey lighten-5" height="100%" style="border-radius:15px;">
          <component v-bind:is="item.content" class="tab"></component>
        </v-sheet>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import OverviewLayout from "@/components/layouts/OverviewLayout.vue";
import BarChart from "@/components/layouts/BarChart.vue";
import LineChart from "@/components/layouts/LineChart.vue";
import GlobalTable from "@/components/GlobalTable.vue";

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    OverviewLayout,
    BarChart,
    LineChart,
    GlobalTable
  },
  data: function() {
    return {
      // prettier-ignore
      // you have to define x, y, w, h, i or else the grid will not work
      layout: [
        { x: 0, y: 0, w: 3, h: 5, i: "0", resizable: false, content: "OverviewLayout" },
        { x: 0, y: 4, w: 3, h: 7, i: "1", resizable: null, content: "BarChart" },
        { x: 3, y: 0, w: 9, h: 12, i: "2", resizable: null, content: "LineChart" },
        { x: 0, y: 12, w: 12, h: 14, i: "4", resizable: null, content: "GlobalTable" },
      ]
    };
  }
};
</script>

<style>
</style>