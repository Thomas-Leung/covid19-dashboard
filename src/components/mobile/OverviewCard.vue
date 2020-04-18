<template>
  <div class="rounded-card my-6 text-dark">
    <div class="card-text font-weight-bold mb-4">Global Status</div>
    <div class="headline mb-2">
      <span class="font-weight-bold" style="color:#F2BF42">Cases:</span>
      {{cases}}
    </div>
    <div class="headline mb-2">
      <span class="font-weight-bold" style="color:#F35A51">Deaths:</span>
      {{deaths}}
    </div>
    <div class="headline mb-2">
      <span class="font-weight-bold" style="color:#1CA552">Recovered:</span>
      {{recovered}}
    </div>
    <img src="../../assets/earth.svg" alt="earth" id="earth" />

    <div class="grid-container">
      <div class="grid-item">
        Today Cases
        <div class="font-weight-bold headline">{{todayCases}}</div>
      </div>
      <div class="grid-item">
        Today Deaths
        <div class="font-weight-bold headline">{{todayDeaths}}</div>
      </div>
      <div class="grid-item">
        Affected Countries
        <br />
        <div class="font-weight-bold headline">{{affectedCountries}}</div>
      </div>
      <div class="grid-item">
        Total
        <br />Test
        <div class="font-weight-bold headline">{{tests}}</div>
      </div>
    </div>
    <div class="overline mb-4 mt-6 text-dark update-text">Last update: {{updated}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get(`https://corona.lmao.ninja/v2/all`)
      .then(response => {
        this.cases = response.data["cases"];
        this.deaths = response.data["deaths"];
        this.recovered = response.data["recovered"];
        var splitTime = new Date(response.data["updated"])
          .toISOString()
          .split("T");
        this.updated = `${splitTime[0]}\u00A0\u00A0${
          splitTime[1].split(":")[0]
        }:${splitTime[1].split(":")[1]}(UTC)`;
        this.todayCases = response.data["todayCases"];
        this.todayDeaths = response.data["todayDeaths"];
        this.tests = response.data["tests"];
        this.affectedCountries = response.data["affectedCountries"];
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
      updated: "",
      todayCases: "",
      todayDeaths: "",
      tests: "",
      affectedCountries: ""
    };
  }
};
</script>

<style scoped>
.rounded-card {
  position: relative;
  border-radius: 20px;
  background: #1e2f48;
  padding: 20px;
  height: 450px;
  box-shadow: 1px 4px 10px "rgba(0, 0, 0, 0.3)";
  overflow: hidden;
}

.card-text {
  color: white;
  font-size: 2em;
  line-height: 0.9cm;
}

.text-dark {
  color: white;
}

.update-text {
  position: absolute;
  bottom: 8px;
}

#earth {
  position: absolute;
  width: 120%;
  opacity: 0.25;
  right: -130px;
  bottom: -140px;
}

/* position: relative so that earth is behind the grid*/
.grid-container {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
}
.grid-item {
  padding: 20px;
  text-align: start;
}
</style>