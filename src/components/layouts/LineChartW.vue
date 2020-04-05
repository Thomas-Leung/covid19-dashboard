<template>
  <div class="line-chart-content">
    <line-chart
      v-if="ready"
      class="line-chart"
      :chartData="this.chartData"
      :options="this.options"
    />
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "@/components/layouts/LineChart.vue";

export default {
  props: {
    selectedCountry: {
      type: String,
      required: true
    }
  },
  components: {
    LineChart
  },
  data: function() {
    return {
      chartData: null,
      options: null,
      ready: false
    };
  },
  methods: {
    getCountryData(country) {
      // due to the API, we need to check if it is a provence or not
      var url = `https://corona.lmao.ninja/v2/historical/${country}?lastdays=all`;
      if (country == "Hong Kong")
        url = `https://corona.lmao.ninja/v2/historical/china/hong%20kong?lastdays=all`;
      else if (
        country === "Channel Islands" ||
        country === "British Virgin Islands" ||
        country === "Isle of Man"
      )
        url = `https://corona.lmao.ninja/v2/historical/uk/${country}?lastdays=all`;
      else if (country === "Moldova, Republic of")
        url = `https://corona.lmao.ninja/v2/historical/Moldova?lastdays=all`;
      else if (country === "Guadeloupe" || country === "Mayotte")
        url = `https://corona.lmao.ninja/v2/historical/france/${country}?lastdays=all`;

      axios
        .get(url)
        .then(response => {
          if (response.status === 200) {
            this.country = response.data;
            var xLabels = Object.keys(this.country["timeline"]["cases"]);
            var yValues = Object.values(this.country["timeline"]["cases"]);
            this.fillData(xLabels, yValues);
            this.fillOptions(`Accumulated Cases ${country}`);
          }
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    fillData(labelsArr, dataArr) {
      this.chartData = {
        labels: labelsArr,
        datasets: [
          {
            // another line graph
            label: "Cases",
            data: dataArr,
            backgroundColor: ["rgba(56, 139, 239,.5)"],
            borderColor: ["rgba(56, 139, 239)"],
            borderWidth: 3
          }
        ]
      };
    },
    fillOptions(title) {
      this.options = {
        title: {
          text: title,
          display: true,
          fontSize: 16,
          padding: 14
        },
        responsive: true,
        maintainAspectRatio: false,
        lineTension: 1,
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Date"
              },
              ticks: {
                beginAtZero: true,
                padding: 25
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Cases"
              },
              ticks: {
                beginAtZero: true,
                padding: 25
              }
            }
          ]
        }
      };
    }
  },
  mounted() {
    axios
      .get(`https://corona.lmao.ninja/v2/historical/all`)
      .then(response => {
        if (response.status === 200) {
          var globally = response.data;
          // x and y axis label
          var xLabels = Object.keys(globally["cases"]);
          var yValues = Object.values(globally["cases"]);
          this.fillData(xLabels, yValues);
          // graph title
          this.fillOptions("Accumulated Cases Globally");
          this.ready = true;
        }
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  watch: {
    selectedCountry: function(newVal, oldVal) {
      this.getCountryData(newVal);
    }
  }
};
</script>

<style>
.line-chart-content,
.line-chart {
  height: 99%;
  width: 99%;
  margin-left: 4px;
}
</style>