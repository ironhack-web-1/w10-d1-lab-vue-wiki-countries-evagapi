<template>
  <div class="col-7">
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
          <td v-if="country.borders.length > 0">
            <ul class="list-unstyled">
              <li v-for="border in country.borders">
                <router-link :to="border"
                  >{{ getBorderName(border) }}{{ borderName }}</router-link
                >
              </li>
            </ul>
          </td>
          <td v-else>None</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import countries from "../countries.json";

export default {
  data() {
    return {
      countries,
      borderName: null,
    };
  },
  computed: {
    country() {
      return countries.find(
        (country) => country.alpha3Code === this.alpha3Code
      );
    },
    borderCountry() {},
  },
  props: { alpha3Code: { type: String, required: true } },
  methods: {
    getBorderName(border) {
      let borderCountry = countries.find(
        (country) => country.alpha3Code === border
      );
      this.borderName = borderCountry.name.common;
    },
  },
};
</script>
