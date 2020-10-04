/* eslint-disable */
<template>
  <div id="app">
    <Toolbar :personaName="profileData.details" />
    <Persona :profileData="profileData" />
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Persona from "./components/Persona.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Toolbar,
    Persona,
  },
  computed: {
    ...mapGetters([
      // map this.profileData to this.$store.getters.profileData
      "profileData",
    ]),
  },
  mounted() {
    this.$store.dispatch("getPersonaData");
  },
};
</script>

<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin:0;
  padding:0;
}
html {
  font-family: $main-font-family;
  font-weight: 300;
  font-size: $default-font-size;
  line-height: $main-line-height;
}
body {
  margin: 0;
  padding: 0;
  background-color: $very-dark-grayish-cyan;
}
#app {
  font-family: $main-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
