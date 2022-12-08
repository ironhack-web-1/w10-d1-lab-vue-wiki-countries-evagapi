<template>
  <div class="col-7">
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <div class="text-center">
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          :alt="`${country.name.common} flag`"
          style="width: 300px"
        />
        <h1>{{ country.name.common }}</h1>
      </div>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style="width: 30%">Capital</td>
            <td>
              <ul class="list-unstyled">
                <li v-for="capital in country.capital">{{ capital }}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{{ country.area }} km <sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td v-if="borders.length > 0">
              <ul class="list-unstyled">
                <li v-for="border in borders">
                  <router-link :to="border.code">{{ border.name }}</router-link>
                </li>
              </ul>
            </td>
            <td v-else>None</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      country: null,
    };
  },
  props: {
    alpha3Code: { type: String, required: true },
    countries: { type: Array },
  },
  methods: {
    async fetchCountry() {
      const url = `https://ih-countries-api.herokuapp.com/countries/${this.alpha3Code}`;

      let response = await fetch(url);
      let countryObject = await response.json();
      this.country = countryObject;
      this.isLoading = false;
    },
    getCountryNameFromCode(alpha3Code) {
      const country = this.countries.find(
        (country) => alpha3Code === country.alpha3Code
      );
      return country.name.common;
    },
  },
  computed: {
    borders() {
      return this.country.borders.map((borderCode) => ({
        code: borderCode,
        name: this.getCountryNameFromCode(borderCode),
      }));
    },
  },
  watch: {
    alpha3Code() {
      this.fetchCountry();
    },
  },
  mounted() {
    this.fetchCountry();
  },
};
</script>
