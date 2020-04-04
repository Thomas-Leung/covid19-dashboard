<template>
  <div class="line-chart-content">
    <line-chart
      v-if="ready"
      class="line-chart"
      :chartdata="this.chartdata"
      :options="this.options"
    />
  </div>
</template>

<script>
import LineChart from "@/components/layouts/LineChart.vue";

export default {
  components: {
    LineChart
  },
  data: function() {
    return {
      chartdata: {
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
            data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
            backgroundColor: [
              "rgba(56, 139, 239,.5)" // Green
            ],
            borderColor: ["rgba(56, 139, 239)"],
            borderWidth: 3
          }
        ]
      },
      options: {
        title: {
          display: true,
          fontSize: 16,
          padding: 20,
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
      },
      ready: false
    };
  },
  mounted() {
    this.options["title"]["text"] = "haha";
    this.ready = true;
  }
};
</script>

<style>
.line-chart-content,
.line-chart {
  height: 100%;
}
</style>