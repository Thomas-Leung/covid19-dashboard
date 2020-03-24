<template>
  <div class="overview-content">
      <v-sheet color="grey lighten-3" height="100%">
          <h1>ok</h1>
      </v-sheet>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get(`https://corona.lmao.ninja/all`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
        console.log(response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style>
</style>