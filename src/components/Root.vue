<template>
  <div class="container">
    <div class="row">
      <CountriesList />
      <router-view />
    </div>
  </div>
</template>

<script>
import CountriesList from "./CountriesList.vue";
export default {
  components: { CountriesList },
};
</script>
