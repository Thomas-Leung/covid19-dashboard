<template>
  <div class="rounded-card my-6">
    <div
      class="card-text font-weight-bold"
    >Remember to WASH YOUR HANDS, do NOT TOUCH YOUR FACE and practice SOCIAL DISTANCING!</div>
    <v-btn dark icon class="github-btn font-weight-light" v-on:click="openGithub()">
      <v-icon large>mdi-github</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    openGithub: function() {
      window.open("https://github.com/Thomas-Leung/covid19-dashboard");
    }
  }
};
</script>

<style>
.rounded-card {
  position: relative;
  border-radius: 20px;
  background: #06070c;
  padding: 20px;
  height: 450px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.3);
}

.card-text {
  color: white;
  font-size: 2em;
  line-height: 0.9cm;
}

.github-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
</style>