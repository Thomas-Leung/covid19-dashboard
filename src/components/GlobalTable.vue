<template>
  <div class="content">
    <div class="search-layout">
      <p class="ma-4 title">Global Statistic</p>

      <div style="background:white; margin: 12px 16px 12px 10px; border-radius:20px; width: 40%">
        <v-text-field
          solo
          dense
          filled
          clearable
          @click:clear="query = ''"
          single-line
          hide-details
          color="grey darken-2"
          background-color="grey lighten-5"
          prepend-inner-icon="mdi-magnify"
          v-model="query"
        ></v-text-field>
      </div>
    </div>
    <div class="wrap">
      <table id="table">
        <thead>
          <tr>
            <th v-for="(col, index) in columns" :key="index" class="subtitle-1 font-weight-medium">
              <!-- Use v-if because of countryInfo in our data -->
              <div v-if="col === 'countryInfo'">flag</div>
              <!-- Capitalize the first letter -->
              <div v-else>{{col.charAt(0).toUpperCase() + col.substring(1)}}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in computedRows" :key="index">
            <td v-for="(col, index) in columns" :key="index">
              <div v-if="col === 'countryInfo'">
                <img :src="row['countryInfo']['flag']" alt="flag" height="14vh" />
              </div>
              <div v-else>{{row[col]}}</div>
            </td>
          </tr>
          <td v-if="this.computedRows.length === 0" colspan="100%">
            <p class="body-1 pt-2">
              <v-icon>mdi-earth-off</v-icon> No country
            </p>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      query: "",
      rows: []
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
    mounted() {
    axios
      .get(`https://corona.lmao.ninja/countries`)
      .then(response => {
        console.log(response.data);
        this.rows = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  computed: {
    // used to get the number of columns
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      // return a list of JSON keys
      return Object.keys(this.rows[0]);
    },
    // search functionality
    computedRows: function() {
      var vm = this;
      return this.rows.filter(function(row) {
        // if match will be zero
        console.log(row);
        return (
          row["country"].toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
        );
      });
    }
  }
};
</script>

<style scoped>
td {
  text-align: center;
  padding: 2px;
}

table {
  margin: 0px 8px 10% 4px;
  border-collapse: collapse;
}

table,
td,
th {
  border: 2px solid grey;
}

.wrap {
  height: 100%;
  overflow: auto;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.wrap::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE and Edge */
.wrap {
  -ms-overflow-style: none;
}

.content {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.search-layout {
  display: flex;
  justify-content: space-between;
}
</style>