<template>
  <v-row>
    <v-col class="mb-4">
      <h1 class="font-weight-bold mb-3">COVID-19 Dashboard</h1>
      <p class="subheading font-weight-regular">
        For help and collaboration with other Vuetify developers,
        <br />please join our online
        <a
          href="https://community.vuetifyjs.com"
          target="_blank"
        >Discord Community</a>
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Header",
  data: () => ({})
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Dosis&display=swap");

h1 {
  font-family: "Dosis", sans-serif;
}
</style>
