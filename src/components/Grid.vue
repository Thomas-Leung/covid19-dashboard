<template>
  <div class="grid-content">
    <h1>Overview</h1>
    <grid-layout
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
        <v-sheet color="grey lighten-3" height="100%" style="border-radius:15px;">
          <component v-bind:is="item.content" class="tab"></component>
        </v-sheet>
      </grid-item>
    </grid-layout>
    <!-- <BarChart/> -->
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import OverviewLayout from "@/components/layouts/OverviewLayout.vue";
import GlobalTable from '@/components/GlobalTable.vue';
import LineChart from "@/components/layouts/LineChart.vue";
// import BarChart from "@/components/layouts/BarChart.vue";

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    OverviewLayout,
    LineChart,
    GlobalTable
    // BarChart
  },
  data: function() {
    return {
      // you have to define x, y, w, h, i or else the grid will not work
      layout: [
        { x: 0, y: 0, w: 9, h: 13, i: "1", resizable: null, content: "GlobalTable" },
        // { x: 9, y: 0, w: 3, h: 5, i: "0", resizable: false, content: "OverviewLayout" }
      ]
    };
  }
};
</script>

<style>
</style>