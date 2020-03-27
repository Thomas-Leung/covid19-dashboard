<template>
  <div class="wrap">
    <table id="table">
      <thead>
        <tr>
          <th v-for="(col, index) in columns" :key="index">
            <!-- Use v-if because of countryInfo in our data -->
            <div v-if="col !== 'countryInfo'">{{col}}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index" style="height: 90px;">
          <td v-for="(col, index) in columns" :key="index">
            <div v-if="col !== 'countryInfo'">{{row[col]}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      rows: [
        {
          country: "China",
          countryInfo: {
            _id: 156,
            lat: 35,
            long: 105,
            flag:
              "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/cn.png",
            iso3: "CHN",
            iso2: "CN"
          },
          cases: 81340,
          todayCases: 55,
          deaths: 3292,
          todayDeaths: 5,
          recovered: 74588,
          active: 3460,
          critical: 1034,
          casesPerOneMillion: 57,
          deathsPerOneMillion: 2
        },
        {
          country: "USA",
          countryInfo: {
            _id: 840,
            lat: 38,
            long: -97,
            flag:
              "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png",
            iso3: "USA",
            iso2: "US"
          },
          cases: 85594,
          todayCases: 159,
          deaths: 1300,
          todayDeaths: 5,
          recovered: 1868,
          active: 82426,
          critical: 2122,
          casesPerOneMillion: 259,
          deathsPerOneMillion: 4
        },
        {
          country: "Italy",
          countryInfo: {
            _id: 380,
            lat: 42.8333,
            long: 12.8333,
            flag:
              "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/it.png",
            iso3: "ITA",
            iso2: "IT"
          },
          cases: 80589,
          todayCases: 0,
          deaths: 8215,
          todayDeaths: 0,
          recovered: 10361,
          active: 62013,
          critical: 3612,
          casesPerOneMillion: 1,
          deathsPerOneMillion: 136
        },
        {
          country: "Spain",
          countryInfo: {
            _id: 724,
            lat: 40,
            long: -4,
            flag:
              "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/es.png",
            iso3: "ESP",
            iso2: "ES"
          },
          cases: 57786,
          todayCases: 0,
          deaths: 4365,
          todayDeaths: 0,
          recovered: 7015,
          active: 46406,
          critical: 3166,
          casesPerOneMillion: 1,
          deathsPerOneMillion: 93
        },
        {
          country: "Germany",
          countryInfo: {
            _id: 276,
            lat: 51,
            long: 9,
            flag:
              "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/de.png",
            iso3: "DEU",
            iso2: "DE"
          },
          cases: 43938,
          todayCases: 0,
          deaths: 267,
          todayDeaths: 0,
          recovered: 5673,
          active: 37998,
          critical: 23,
          casesPerOneMillion: 524,
          deathsPerOneMillion: 3
        },
        {
          country: "Iran, Islamic Republic of",
          countryInfo: {
            _id: 364,
            lat: 32,
            long: 53,
            flag:
              "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ir.png",
            iso3: "IRN",
            iso2: "IR"
          },
          cases: 29406,
          todayCases: 0,
          deaths: 2234,
          todayDeaths: 0,
          recovered: 10457,
          active: 16715,
          critical: 2746,
          casesPerOneMillion: 350,
          deathsPerOneMillion: 27
        },
        {
          country: "France",
          countryInfo: {
            _id: 250,
            lat: 46,
            long: 2,
            flag:
              "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/fr.png",
            iso3: "FRA",
            iso2: "FR"
          },
          cases: 29155,
          todayCases: 0,
          deaths: 1696,
          todayDeaths: 0,
          recovered: 4948,
          active: 22511,
          critical: 3375,
          casesPerOneMillion: 447,
          deathsPerOneMillion: 26
        },
        {
          country: "Switzerland",
          countryInfo: {
            _id: 756,
            lat: 47,
            long: 8,
            flag:
              "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ch.png",
            iso3: "CHE",
            iso2: "CH"
          },
          cases: 11811,
          todayCases: 0,
          deaths: 192,
          todayDeaths: 0,
          recovered: 131,
          active: 11488,
          critical: 141,
          casesPerOneMillion: 1,
          deathsPerOneMillion: 22
        }
      ]
    };
  },
  methods: {
    sortTable: function sortTable(col) {
      this.rows.sort(function(a, b) {
        if (a[col] > b[col]) {
          return 1;
        } else if (a[col] < b[col]) {
          return -1;
        }
        return 0;
      });
    }
  },
  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      // return a list of JSON keys
      return Object.keys(this.rows[0]);
    }
  }
};
</script>

<style scoped>
.wrap {
  height: 100%;
  overflow: auto;
}
</style>