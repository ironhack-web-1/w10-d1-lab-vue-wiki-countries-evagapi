<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
      <div v-for="country in countries">
        <router-link
          :to="{
            name: 'alpha3Code',
            params: { alpha3Code: country.alpha3Code },
          }"
        >
          <a
            :key="country._id"
            class="list-group-item list-group-item-action"
            :href="country.alpha3Code"
          >
            <img
              :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
            />
            <p>{{ country.name.official }}</p>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import countries from "../countries.json";

export default {
  data() {
    return {
      countries,
    };
  },
};
</script>
