<template>
  <v-row justify="center" class="ma-2">
    <v-col lg="2" md="2" xl="2" cols="2" class="allz"
      ><v-row justify="center" class="pa-2">
        <v-img
          src="../../assets/logo_buger_quenn.png"
          max-height="80"
          max-width="250"
        ></v-img>
      </v-row>
    </v-col>
    <v-col lg="10" md="10" xl="10" cols="10" class="allz">
      <v-row class="search allz" justify="center">
        <v-col lg="5" md="5" xl="5" cols="5" class="pa-1 ma-1">
          <v-text-field
            class="pa-0 ma-0 timkiem"
            variant="outlined"
            label="Nhập tên sản phẩm để tìm kiếm"
            prepend-inner-icon="mdi-magnify"
            counter="120"
            density="comfortable"
            hide-details="auto"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-row justify="center" class="pa-2">
            <v-btn size="default" flat >
              ĐĂNG KÝ
              <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center" class="pa-2">
            <v-btn size="default" flat>
              ĐĂNG NHẬP
              <v-icon end icon="mdi-account-check-outline"></v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center" class="pa-2">
            <v-btn size="default" flat
              >KHUYẾN MÃI HOT <v-icon end icon="mdi-alert-decagram"></v-icon
            ></v-btn>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center" class="pa-2">
            <v-btn size="default" flat>
              GIỎ HÀNG
              <v-icon end icon="mdi-cart"></v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="menu" justify="space-between">
        <div class="d-flex justify-space-between">
          <v-btn variant="outlined" size="default" class="ma-2 btnMenu">
            TỔNG ĐÀI
            <v-icon end icon="mdi-phone-classic"></v-icon>
          </v-btn>
          <v-btn variant="outlined" class="ma-2 btnMenu"
            >VIDEOS <v-icon end icon="mdi-youtube"></v-icon
          ></v-btn>
          <v-btn variant="outlined" class="ma-2 btnMenu"
            >TUYỂN DỤNG <v-icon end icon="mdi-account"></v-icon
          ></v-btn>
          <v-btn variant="outlined" class="ma-2 btnMenu"
            >HỆ THỐNG CỬA HÀNG <v-icon end icon="mdi-store"></v-icon
          ></v-btn>
          <v-btn variant="outlined" class="ma-2 btnMenu"
            >GIỚI THIỆU <v-icon end icon="mdi-heart-outline"></v-icon
          ></v-btn>
          <v-btn variant="outlined" class="ma-2 btnMenu"
            >LIÊN HỆ <v-icon end icon="mdi-mail"></v-icon
          ></v-btn>
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.allz {
  font-family: Nunito !important;
  font-weight: 700 !important;
}
.btnMenu {
  color: black;
}
.v-btn { 
    font-family: Nunito !important;
  font-weight: 600 !important;
}
</style>
