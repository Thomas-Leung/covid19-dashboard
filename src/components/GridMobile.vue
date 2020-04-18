<template>
  <div class="mobile-content mx-6">
    <HeaderMobile />
    <OverviewCard />
    <GithubCard />
  </div>
</template>

<script>
import HeaderMobile from "./mobile/HeaderMobile";
import OverviewCard from "./mobile/OverviewCard";
import GithubCard from "./mobile/GithubCard";

export default {
  components: {
    HeaderMobile,
    OverviewCard,
    GithubCard
  }
};
</script>

<style>
</style>