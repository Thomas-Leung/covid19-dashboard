<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["top10Labels", "top10Data"],
  data: () => ({
    chartdata: {
      datasets: [
        {
          label: "Data One",
          backgroundColor: [
            "rgba(221,69,42,1)",
            "rgba(220,86,129,1)",
            "rgba(230, 115, 61,1)",
            "rgba(236,186,69,1)",
            "rgba(206,112,52,1)",
            "rgba(100,206,209,1)",
            "rgba(104,137,235,1)",
            "rgba(86,94,143,1)",
            "rgba(169,122,207,1)",
            "rgba(107,66,240,1)"
            // 'rgba(54,73,93,0.5)'
          ]
        }
      ]
    },
    options: {
      title: {
        display: true,
        fontSize: 16,
        padding: 20,
        text: "Top 10 Most Cases Countries"
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted() {
    this.chartdata["labels"] = this.top10Labels;
    this.chartdata.datasets[0]["data"] = this.top10Data;
    // data: [40, 20, 30, 10, 20, 30, 40, 80, 90, 12, 34],
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style>
</style>