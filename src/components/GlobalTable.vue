<template>
  <div class="content" align="center">
    <div class="search-layout">
      <p class="ma-4 title">Global Statistic <span class="overline ml-3">*click table to sort</span></p>

      <div style="background:white; margin: 12px 16px 12px 10px; border-radius:20px; width: 40%">
        <v-text-field
          solo
          dense
          filled
          clearable
          label="search country"
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
            <th
              v-for="(col, index) in columns"
              :key="index"
              class="subtitle-1 font-weight-medium"
              @click="sortTable(col)"
            >
              <!-- Use v-if because of countryInfo in our data -->
              <div v-if="col === 'countryInfo'" class="pt-3 pb-4">flag</div>
              <!-- Capitalize the first letter -->
              <div v-else>{{col.charAt(0).toUpperCase() + col.substring(1)}}<br>
              <v-icon v-if="ascending && col == sortColumn">mdi-menu-up</v-icon>
              <v-icon v-else-if="col == sortColumn">mdi-menu-down</v-icon></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in computedRows" :key="index">
            <td v-for="(col, index) in columns" :key="index">
              <div v-if="col === 'countryInfo'">
                <img :src="row['countryInfo']['flag']" alt="flag" height="14vh" />
              </div>
              <div v-else-if="col === 'updated'">{{new Date(row[col]).toISOString().split('T')[0]}}</div>
              <div v-else>{{row[col]}}</div>
            </td>
          </tr>
          <td v-if="this.computedRows.length === 0" colspan="100%">
            <p class="body-1 pt-2">
              <v-icon>mdi-earth-off</v-icon>No country
            </p>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      query: "",
      rows: [],
      ascending: false,
      sortColumn: ""
    };
  },
  methods: {
    sortTable: function(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }

      var ascending = this.ascending;

      this.rows.sort(function(a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1;
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1;
        }
        return 0;
      });
    }
  },
  mounted() {
    axios
      .get(`https://corona.lmao.ninja/countries`)
      .then(response => {
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
        return (
          row["country"].toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
        );
      });
    }
  }
};
</script>

<style scoped>
table {
  width: 95%;
  text-align: center;
  margin: 0px 8px 2vh 4px;
  border-collapse: separate; /* Don't collapse */
  border-spacing: 0;
}

table th {
  /* Apply both top and bottom borders to the <th> */
  border-top: 3px solid;
  border-bottom: 3px solid;
  border-right: 2px solid;
}

table td {
  /* For cells, apply the border to one of each side only (right but not left, bottom but not top) */
  border-bottom: 2px solid;
  border-right: 2px solid;
}

table th:first-child,
table td:first-child {
  /* Apply a left border on the first <td> or <th> in a row */
  border-left: 2px solid;
}

table thead th {
  position: sticky;
  top: 0;
  background-color: rgb(198, 198, 199);
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
  padding-bottom: 60px;
}

.search-layout {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
}
</style>