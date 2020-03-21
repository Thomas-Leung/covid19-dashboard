<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" absolute permanent>
      <v-list-item class="px-2">
        <v-icon class="pr-2 pl-2">mdi-desktop-mac-dashboard</v-icon>
        <v-list-item-title>COVID19 Dashboard</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon :class="{'mt-1': !item.mdi}">
            <v-icon v-if="item.mdi">{{ item.icon }}</v-icon>
            <p v-else class="headline">{{ item.icon }}</p>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content class="ml-12 pl-8">
      <Header />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Global", icon: "mdi-earth", mdi: true },
        { title: "Canada", icon: "🇨🇦", mdi: false },
        { title: "About", icon: "mdi-information", mdi: true }
      ],
      mini: true
    };
  }
};
</script>