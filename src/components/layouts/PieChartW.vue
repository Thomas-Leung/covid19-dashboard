<template>
  <div>
    <PieChart v-if="ready" class="px-6" :top10Labels="top10Labels" :top10Data="top10Data" />
  </div>
</template>

<script>
import axios from "axios";
import PieChart from "@/components/layouts/PieChart.vue";

export default {
  components: {
    PieChart
  },
  data: function() {
    return {
      allCountries: [],
      top10Labels: [],
      top10Data: [],
      ready: false
    };
  },
  methods: {},
  mounted() {
    axios
      .get(`https://corona.lmao.ninja/countries`)
      .then(response => {
        this.allCountries = response.data;
        // sort in decensing order by cases in country
        this.allCountries.sort(function(a, b) {
          if (a["cases"] > b["cases"]) {
            return -1;
          } else if (a["cases"] < b["cases"]) {
            return 1;
          }
          return 0;
        });
        // get the top 10 data
        for (var i = 0; i < 10; i++) {
          this.top10Labels.push(this.allCountries[i]["country"]);
          this.top10Data.push(this.allCountries[i]["cases"]);
        }
        this.ready = true;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style>
</style>