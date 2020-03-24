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
      >
        <v-sheet color="grey lighten-3" height="100%">
          <div v-html="item.i"></div>
          <OverviewLayout/>
        </v-sheet>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import OverviewLayout from '@/components/layouts/OverviewLayout.vue'


export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    OverviewLayout
  },
  data: function() {
    return {
      layout: [
        { x: 0, y: 0, w: 2, h: 2, i: "0" },
        { x: 2, y: 0, w: 2, h: 4, i: "1" },
        { x: 4, y: 0, w: 2, h: 5, i: `<h1><OverviewLayout/></h1>` },
        { x: 6, y: 0, w: 2, h: 3, i: "3" },
        { x: 8, y: 0, w: 2, h: 3, i: `<h1>Hello</h1>` }
      ]
    };
  }
};
</script>

<style>
</style>