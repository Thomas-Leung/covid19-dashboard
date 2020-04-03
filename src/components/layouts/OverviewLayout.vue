<template>
  <v-card
    class="mx-auto"
    width="100%"
    height="100%"
    color="#1E2F48"
    dark
    style="border-radius:15px;"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="title mb-1">Global Status</v-list-item-title>
        <v-list-item-title class="body-1 mb-1">
          <span class="body-1 font-weight-bold" style="color:#F2BF42">Cases:</span>
          {{cases}}
        </v-list-item-title>
        <v-list-item-title class="body-1 mb-1">
          <span class="body-1 font-weight-bold" style="color:#F35A51">Deaths:</span>
          {{deaths}}
        </v-list-item-title>
        <v-list-item-title class="body-1 mb-1">
          <span class="body-1 font-weight-bold" style="color:#1CA552">Recovered:</span>
          {{recovered}}
        </v-list-item-title>
        <div class="overline mb-4 mt-6">Last update: {{updated}}</div>
      </v-list-item-content>
      <v-list-item-avatar tile size="80">
        <img src="../../assets/earth.svg" alt="earth" />
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get(`https://corona.lmao.ninja/all`)
      .then(response => {
        this.cases = response.data["cases"];
        this.deaths = response.data["deaths"];
        this.recovered = response.data["recovered"];
        this.updated = new Date(response.data["updated"]).toISOString().split('T')[0];
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  data: function() {
    return {
      cases: "",
      deaths: "",
      recovered: "",
      updated: ""
    };
  }
};
// {cases: 422959, deaths: 18907, recovered: 109144, updated: 1585114558616}
</script>

<style>
</style>