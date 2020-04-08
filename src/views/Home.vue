<template>
  <div class="home">
    <mq-layout mq="mobile">
      <p>No Mobile yet</p>
    </mq-layout>
    <mq-layout mq="desktop">
      <Header />
      <Grid />
    </mq-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Grid from "@/components/Grid.vue";

export default {
  name: "Home",
  components: {
    Header,
    Grid
  }
};
</script>
