<template>
  <v-app id="app">
    <messagePS/>
    <!-- Componete de Loading FullScreen -->
  </v-app>
</template>
<script>

import messagePS from "./components/messagePS"
export default {
  created() {
    // Deixar o tema no modo escuro
    this.$vuetify.theme.dark = false;
  },
  components: { messagePS }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
html,
h1,
h3 {
  color: red;
}
.found {
  padding: 15px;
}
body {
  color: rgb(211, 211, 211);
  margin: 0;
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #212121;
  font-family: "Roboto", sans-serif;
}
</style>