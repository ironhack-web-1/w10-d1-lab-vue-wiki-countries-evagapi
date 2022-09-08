<template>
  <div className="app">
    <Navbar />
    <CountriesList />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import CountriesList from "./components/CountriesList.vue";
export default { components: { Navbar, CountriesList } };
</script>
