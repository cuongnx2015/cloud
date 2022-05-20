<template>
  <div class="ma-3 allz">
    <v-row justify="center">
      <v-col cols="2">
        <v-list nav dense border>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            active-color="primary"
          >
            <v-list-item-avatar>
              <v-icon :icon="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="10">
        <v-carousel
          hide-delimiters
          height="490"
          interval="2000"
          class="carouselcss"
        >
          <v-carousel-item
            v-for="(item, i) in carousel"
            :key="i"
            :src="item.src"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <!-- <v-col cols="2">
        <v-row>
          <v-img
            src="https://jollibee.com.vn/uploads/dish/091277ef7fe806-hinhghep22.png"
            height="180"
          ></v-img>
        </v-row>
        <v-row>
          <v-img
            src="https://jollibee.com.vn/uploads/dish/03b21afa5ea334-149kmekong.png"
            height="180"
          ></v-img>
        </v-row>
        <v-row>
          <v-img
            src="https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png"
            height="180"
          ></v-img>
        </v-row>
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Món ngon yêu thích", icon: "mdi-heart" },
      { text: "Mua nhiều nhất", icon: "mdi-silverware-variant" },
      { text: "Món mới", icon: "mdi-new-box" },
      { text: "Combo nhóm", icon: "mdi-group" },
      { text: "Món lẻ", icon: "mdi-bowl" },

    ],
    carousel: [
      {
        src: require("../../assets/461e646e8b413dfa7698cd04d0fff36a.png"),
      },
      {
        src: require("../../assets/rousel2.png"),
      },
      {
        src: require("../../assets/rousel_7.png"),
      },
      {
        src: require("../../assets/rousel_6.png"),
      },
      {
        src: require("../../assets/rousel_33333.png"),
      },
      {
        src: require("../../assets/rousel_44444.png"),
      },
      {
        src: require("../../assets/rousel_444544.png"),
      },
    ],
  }),
  setup() {},
};
</script>

<style scoped>
.carouselcss {
  width: 100%;
  height: 100%;
}
.v-list-item {
  font-family: Nunito !important;
  font-weight: 700 !important;
}
</style>