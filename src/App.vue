<template>
  <v-app>
    <Navbar />
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>
<style>
.v-application--wrap {
  background-color: #f5f5f5;
}
</style>
