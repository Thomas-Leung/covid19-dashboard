<template>
  <div class="home">
    <Header />
    <Grid />
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
