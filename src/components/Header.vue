<template>
  <div class="header-content">
    <v-row class="mx-0">
      <v-col class="mb-n4">
        <h1 class="font-weight-bold mb-3">COVID-19 Dashboard</h1>
        <h3 class="mt-n4 mb-2">Overview</h3>
      </v-col>

      <v-col class="mt-4 mb-n4" style="text-align:end;">
        <v-dialog v-model="dialog" width="50%">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon large v-on="on" class="mr-2">mdi-help-circle-outline</v-icon>
                </template>
                <span>Help</span>
              </v-tooltip>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Hello!</v-card-title>
            <v-card-text>
              <div
                class="py-2"
              >Here is a list of functionalities that you can try it out in this dashboard:</div>
              <ul>
                <li>Click on the table header to sort from ascending or descending order.</li>
                <li>You can search for the country you want.</li>
                <li>If you click on a country in the table, it will show the accumulated cases of the country.</li>
                <li>You can adjust and resize some of the layouts in the dashboard to fits your needs.</li>
              </ul>
              <div
                class="py-2"
              >There are more features coming soon. If you found a bug, please create an issue on Github to help make this dashboard better! =]</div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn icon v-on:click="openGithub()">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon large v-on="on">mdi-github</v-icon>
            </template>
            <span>View on Github</span>
          </v-tooltip>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider color="grey" class="mx-3 mb-2"></v-divider>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    dialog: false
  }),
  methods: {
    openGithub: function() {
      window.open("https://github.com/Thomas-Leung/covid19-dashboard");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

h1,
h3 {
  font-family: "Source Sans Pro", sans-serif;
}
</style>