<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        class="gmap_iframe"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=600&amp;height=90&amp;hl=en&amp;q=Đại học thủ dầu một&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
  width: 600px;
  height: 90px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 600px;
  height: 90px;
}
.gmap_iframe {
  width: 600px !important;
  height: 90px !important;
}
</style>