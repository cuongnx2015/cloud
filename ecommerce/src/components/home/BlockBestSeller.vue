<template>
  <v-container>
    <div class="ma-1">
      <v-row justify="center">
        <v-col cols="12">
          <v-banner
            lines="one"
            :icon="IconBlock"
            color="warning"
            class="banner"
          >
            <template v-slot:text>
              <span class="text">{{ NameBlock }}</span>
            </template>
            <template v-slot:actions>
              <v-btn class="ma-2 text"
                >Xem tất cả <v-icon end icon="mdi-arrow-right"></v-icon
              ></v-btn>
            </template>
          </v-banner>
        </v-col>
      </v-row>
      <br />
      <v-row justify="center" class="ma-0">
        <v-card class="mx-auto" max-width="260" v-for="i in items" :key="i.id">
          <v-img class="align-end text-black" height="200" :src="i.src" cover>
            <!-- <v-card-title>Alient Ware 1</v-card-title> -->
          </v-img>
          <v-card-subtitle class="pt-4">{{ i.name }}</v-card-subtitle>
          <v-card-text>
            <div class="price">{{ i.price }}</div>
            <div>
              {{ i.description_1 }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange"> Xem chi tiết </v-btn>
            <v-btn color="orange"> Mua ngay </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <div class="text-center">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  props: {
    NameBlock: String,
    IconBlock: String,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Phô mai viên (4 viên)",
          src: "https://kfcvietnam.com.vn/uploads/product/e461936e9a87ca5d92486c3aa259b1f7.png",
          price: "30.000đ",
          description_1: "Vị ngon trên từng ngón tay, tròn vị ngon vui",
        },
        {
          id: 2,
          name: "Gà Popcorn (Lớn)",
          src: "https://kfcvietnam.com.vn/uploads/product/94a586581e0434ff7505aefd60526b70.png",
          price: "58.000đ",
          description_1: "Nhân đôi niềm vui với phần gà lớn hơn",
        },
        {
          id: 3,
          name: "Hot Wings (5 Miếng)",
          src: "https://kfcvietnam.com.vn/uploads/product/b383b84db23857de70ac5ee6199208ec.png",
          price: "75.000đ",
          description_1: "Vị ngon trên từng ngón tay, tròn vị ngon vui",
        },
        {
          id: 4,
          name: "Súp rong biển (1 phần)",
          src: "https://kfcvietnam.com.vn/uploads/product/6f0c074738973430bbf70a4f84ed09f7.jpg",
          price: "14.000₫",
          description_1: "Thơm ngon, đem đến nhiều giá trị dinh dưỡng",
        },
      ],
    };
  },
  setup() {},
};
</script>

<style scoped>
.text {
  font-size: 15px;
  color: azure !important;
  font-family: Nunito;
  font-weight: 700;
}
.price {
  color: red;
  font-weight: 900;
  font-size: 20px;
}
.pt-4 {
  font-size: 20px;
  color: black;
}
.banner {
  background-color: #d7202c;
}
</style>