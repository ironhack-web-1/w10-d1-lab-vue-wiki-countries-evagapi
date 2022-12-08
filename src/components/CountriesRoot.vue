<template>
  <div class="container">
    <p v-if="isLoading">Loading...</p>
    <div v-else class="row">
      <CountriesList :countries="countries" />
      <router-view :countries="countries" />
    </div>
  </div>
</template>

<script>
import CountriesList from "./CountriesList.vue";
const API_URL = "https://ih-countries-api.herokuapp.com/countries/";

export default {
  components: { CountriesList },
  data() {
    return {
      isLoading: true,
      countries: [],
    };
  },
  methods: {
    async fetchCountries() {
      let response = await fetch(API_URL);
      let countriesArray = await response.json();
      this.countries = countriesArray;
      this.isLoading = false;
    },
  },
  mounted() {
    this.fetchCountries();
  },
};
</script>
