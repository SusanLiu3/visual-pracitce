<template>
  <div id="mapWrap"></div>
</template>
<script>
export default {
  mounted() {
    var map = new AMap.Map('mapWrap', {
      resizeEnable: true,
      center: [116.480983, 39.989628],
      zoom: 11,
    });
    AMap.plugin('AMap.ToolBar', function() {
      var toolbar = new AMap.ToolBar();
      map.addControl(toolbar);
    });
  },
};
</script>
