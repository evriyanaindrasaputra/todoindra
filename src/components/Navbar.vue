<template>
  <nav>
    <v-snackbar v-model="snackbar" top>
      "Project Added"
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>

    <v-toolbar flat class="grey lighten-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Indra</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Dropdown Menu -->
      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="grey" text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- End of Dropdown Menu -->
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="teal lighten-3" dark>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="90">
            <img src="/img3.png" />
          </v-avatar>
          <p class="white--text subheading mt-2">Chun li</p>
        </v-flex>
        <v-flex class="mt-3 mb-5">
          <Popup @projectAdd="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
        @click.stop="drawer = !drawer"
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      snackbar: false,
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
    };
  },
  methods: {
    changeDrawer() {
      this.drawer != this.drawer;
    },
  },
  watch: {
    changeSnackbar() {
      this.$emit("projectAdded");
    },
  },
};
</script>

<style></style>
