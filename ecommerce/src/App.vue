<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
@font-face {
  font-family: "Nunito";
  src: local("Nunito"),
    url(./fonts/Nunito/Nunito-Regular.ttf) format("truetype");
}
</style>