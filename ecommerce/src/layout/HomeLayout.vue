<template>
  <menu-home />
  <router-view :key="$route.path" />
</template>

<script>
import MenuHome from "../components/home/MenuHome.vue";
export default {
  components: {
    MenuHome,
  },

  setup() {},
};
</script>
