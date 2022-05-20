<template>
  <div class="ma-5 tong">
    <v-row justify="center">
      <v-col>
        <v-row justify="center">
          <v-list-item lines="two">
            <google-map-iframe />
          </v-list-item>
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="center">
          <v-list-item lines="two">
            <v-list-item-header>
              <v-list-item-title>Kết nối cộng đồng</v-list-item-title>
              <v-list-item-subtitle
                :key="i.id"
                v-for="i in ketnoicongdong"
                class="ma-2"
                >{{ i.text }}</v-list-item-subtitle
              >
            </v-list-item-header>
          </v-list-item>
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="center">
          <v-list-item lines="two">
            <v-list-item-header>
              <v-list-item-title>Thông tin liên hệ </v-list-item-title>
              <v-list-item-subtitle
                :key="i.id"
                v-for="i in thongtinlienhe"
                class="ma-2"
                >{{ i.text }}</v-list-item-subtitle
              >
            </v-list-item-header>
          </v-list-item>
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="center">
          <v-img src="../../assets/logo_bocongthuong.png" height="100"></v-img>
        </v-row>
      </v-col>
    </v-row>
    <!-- 
    <v-row justify="center">
      <v-col>
        <v-row> Phương thức thành toán </v-row>
        <v-row justify="center">
          <v-col class="ma-3">
            <v-icon large color="#d7202c"> mdi-cash-usd </v-icon> Tiền mặt
          </v-col>
          <v-col class="ma-3">
            <v-icon large color="#d7202c"> mdi-qrcode-scan</v-icon>
            QR-Code
          </v-col>
          <v-col class="ma-3">
            <v-icon large color="#d7202c"> mdi-earth</v-icon>
            Internet Banking
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row> Danh sách các ngân hàng thanh toán online </v-row>
        <v-row justify="center">
          <v-img
            src="https://phongvu.vn/media/wysiwyg/phongvu/phongvu_v3/banklist.jpg"
            height="100"
          ></v-img>
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="center">
          <v-img
            src="https://phongvu.vn/media/wysiwyg/phongvu/phongvu_v3/da-dang-ky.png"
            height="100"
          ></v-img>
        </v-row>
      </v-col>
    </v-row> -->
  </div>
</template>
<script>
import GoogleMapIframe from "../../Generic/GoogleMapIframe.vue";
export default {
  components: {
    GoogleMapIframe,
  },
  data() {
    return {
      ketnoicongdong: [
        {
          id: 1,
          text: "Facebook",
        },
        {
          id: 1,
          text: "Youtube media",
        },
        {
          id: 1,
          text: "Diễn đàn trao đổi",
        },
      ],
      thongtinlienhe: [
        {
          id: 1,
          text: "Địa chỉ: 06 Trần Văn Ơn, P.Phú Lợi, TP Thủ Dầu Một, Bình Dương ",
        },
        {
          id: 1,
          text: "Email: mail@email.com",
        },
        {
          id: 1,
          text: "SĐT: 0274.999.999",
        },
      ],
    };
  },
  setup() {},
};
</script>
<style scoped>
.tong {
  font-family: Nunito;
  font-size: 15px;
  font-weight: 700;
}
.v-list-item-title {
  font-family: Nunito;
  font-size: 20px;
  font-weight: 700;
}
.v-list-item-subtitle {
  font-family: Nunito;
  font-size: 15px;
  font-weight: 700;
}
</style>