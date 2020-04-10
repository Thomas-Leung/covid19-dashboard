<template>
  <div class="mt-12 ml-1 mb-n4">
    <div
      class="date mb-n2 font-weight-bold"
    >{{dayNames[date.getDay()]}}, {{monthNames[date.getMonth()]}} {{date.getDate()}}</div>
    <h1>COVID-19</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    // prettier-ignore
    monthNames: ["JANURARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
    // prettier-ignore
    dayNames: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  })
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
}

.date {
  color: darkgrey;
}
</style>