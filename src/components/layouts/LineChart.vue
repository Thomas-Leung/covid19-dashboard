<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    options: function() {
      // this is how vue chartjs update options
      this.$data._chart.options = this.options;
      this.$data._chart.update();
    }
  }
};
</script>