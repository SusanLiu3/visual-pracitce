<template>
  <canvas id="hitWrap" width="100" height="100" style="border:1px solid pink">
    <button id="btn">点击</button>
  </canvas>
</template>
<script>
export default {
  mounted() {
    let canvas = document.getElementById("hitWrap");
    if (canvas.getContext) {
      let cxt = canvas.getContext("2d");

      cxt.beginPath();
      cxt.arc(50, 50, 20, 0, Math.PI * 2);
      cxt.fill();
      // 目前浏览器不支持
    //   cxt.addHitRegion({ id: "btn" }); 
    // control 指定把事件转发到哪个元素上
    // cxt.addHitRegion({control:document.getElementById('btn')})
      canvas.addEventListener("mousemove", function(event) {
        if (event.region) {
          alert("test");
        }
      });
    }
  }
};
</script>