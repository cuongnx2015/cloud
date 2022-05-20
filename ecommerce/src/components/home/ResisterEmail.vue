<template>
  <div class="ma-2">
    <v-banner lines="one" color="warning" class="banner">
      <template v-slot:text>
        <span class="text"
          >Mua hàng online với nhiều ưu đãi hơn, hãy đăng ký ngay</span
        >
      </template>
      <template> </template>
      <template v-slot:actions>
        <v-btn class="ma-2 text" @click="dialog = true"
          >Đăng ký<v-icon end icon="mdi-send"></v-icon
        ></v-btn>
      </template>
    </v-banner>
  </div>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h4">Đăng ký nhận các ưu đãi từ cửa hàng</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nhập vào email của bạn*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" text @click="dialog = false"> OK </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  setup() {},
};
</script>
<style scoped>
.banner {
  background-color: #d7202c;
}
.text {
  font-size: 20px;
  color: azure !important;
}
</style>