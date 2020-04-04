<template>
  <div class="grid-content">
    <grid-layout
      class="mb-8"
      responsive
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
          <component
            v-bind:is="item.content"
            class="tab"
            @selectedCountry="newSelectedCountry"
            :selectedCountry="country"
          ></component>
        </v-sheet>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import OverviewLayout from "@/components/layouts/OverviewLayout.vue";
import PieChartW from "@/components/layouts/PieChartW.vue";
import LineChartW from "@/components/layouts/LineChartW.vue";
import GlobalTable from "@/components/GlobalTable.vue";

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    OverviewLayout,
    PieChartW,
    LineChartW,
    GlobalTable
  },
  data: function() {
    return {
      // prettier-ignore
      // you have to define x, y, w, h, i or else the grid will not work
      layout: [
        { x: 3, y: 0, w: 9, h: 16, i: "2", resizable: null, content: "LineChartW" },
        { x: 0, y: 0, w: 3, h: 5, i: "0", resizable: false, content: "OverviewLayout" },
        { x: 0, y: 4, w: 3, h: 11, i: "1", resizable: null, content: "PieChartW" },
        { x: 0, y: 16, w: 12, h: 16, i: "4", resizable: null, content: "GlobalTable" },
      ],
      country: ""
    };
  },
  methods: {
    newSelectedCountry: function(value) {
      this.country = value;
    }
  }
};
</script>