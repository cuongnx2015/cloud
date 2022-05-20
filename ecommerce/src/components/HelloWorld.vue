<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile> One of three columns </v-card>
      </v-col>
    </v-row>
    <br />
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-2" outlined tile> .col-12 .col-md-8 </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile> .col-6 .col-md-4 </v-card>
      </v-col>
    </v-row>

    <br />
    <v-row class="mb-6" justify="center" no-gutters>
      <v-col lg="2">
        <v-card class="pa-2" outlined tile> 1 of 3 </v-card>
      </v-col>
      <v-col md="auto">
        <v-card class="pa-2" outlined tile> Variable width content </v-card>
      </v-col>
      <v-col md="12">
        <v-card class="pa-2" outlined tile> 3 of 3 </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col lg="2">
        <v-card class="pa-2" outlined tile> 1 of 3 </v-card>
      </v-col>
      <v-col md="auto">
        <v-card class="pa-2" outlined tile> Variable width content </v-card>
      </v-col>
      <v-col lg="12">
        <v-card class="pa-2" outlined tile> 3 of 3 </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Roadmap",
        href: "https://vuetifyjs.com/introduction/roadmap/",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
