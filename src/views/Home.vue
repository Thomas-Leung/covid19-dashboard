<template>
  <div class="home">
    <mq-layout mq="mobile">
      <GridMobile />
    </mq-layout>
    <mq-layout mq="desktop" class="ml-12 pl-5 pr-4">
      <Header />
      <Grid />
    </mq-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import GridMobile from "@/components/GridMobile.vue";
import Header from "@/components/Header.vue";
import Grid from "@/components/Grid.vue";

export default {
  name: "Home",
  components: {
    GridMobile,
    Header,
    Grid
  }
};
</script>
