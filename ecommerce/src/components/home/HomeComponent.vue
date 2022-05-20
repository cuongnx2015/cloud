<template>
  <v-divider></v-divider>
  <slider-hot-new />
  <block-under-carousel />
  <block-best-seller :NameBlock="NameBlock1" :IconBlock="IconBlock1" />
  <block-best-seller :NameBlock="NameBlock2" :IconBlock="IconBlock2" />
  <block-best-seller :NameBlock="NameBlock3" :IconBlock="IconBlock3" />
  <resister-email />
  <footer-home />
</template>

<script>
import SliderHotNew from "./SliderHotNews.vue";
import BlockBestSeller from "./BlockBestSeller.vue";
import BlockUnderCarousel from "./BlockUnderCarousel.vue";
import ResisterEmail from "./ResisterEmail.vue";
import FooterHome from "./FooterHome.vue";

export default {
  setup() {},
  components: {
    SliderHotNew,
    BlockBestSeller,
    BlockUnderCarousel,
    ResisterEmail,
    FooterHome,
  },
  data() {
    return {
      NameBlock1: "MÓN NGON ĐƯỢC YÊU THÍCH NHẤT",
      IconBlock1: "mdi-certificate",
      IconBlock2: "mdi-monitor",
      NameBlock2: "MÓN ĂN BÁN CHẠY NHẤT - GIAO HÀNG MIỄN PHÍ",
      IconBlock3: "mdi-mouse",
      NameBlock3: "MÓN MỚI - GIAO HÀNG MIỄN PHÍ",
    };
  },
};
</script>