<template>
  <div class="line-chart-content">
    <button @click="fillData()">Randomize</button>
    <line-chart
      v-if="ready"
      class="line-chart"
      :chartData="this.chartData"
      :options="this.options"
    />
    {{selectedCountry}}
  </div>
</template>

<script>
import LineChart from "@/components/layouts/LineChart.vue";

export default {
  props: {
    selectedCountry: {
      type: String,
      default: "USA"
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
    getRandomInt() {
      console.log("click");
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    fillData() {
      this.chartData = {
        labels: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn",
          "Uranus",
          "Neptune"
        ],
        datasets: [
          {
            // another line graph
            label: "Planet Mass (x1,000 km)",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              6.7,
              139.8,
              116.4,
              50.7,
              49.2
            ],
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
          padding: 20
        },
        responsive: true,
        maintainAspectRatio: false,
        lineTension: 1,
        scales: {
          yAxes: [
            {
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
    this.ready = true;
    this.fillData();
    this.fillOptions("gaga")
  }
};
</script>

<style>
.line-chart-content,
.line-chart {
  height: 100%;
}
</style>