<template>
  <!-- 默认 300 * 150 -->
  <canvas
    style="border:1px solid #000"
    id="canvasWrap"
    width="500"
    height="500"
  >
    你的浏览器不支持canvas
  </canvas>
</template>
<script>
export default {
  mounted() {
    let canvas = document.getElementById('canvasWrap'); // canvas元素
    if (canvas.getContext) {
      // 兼容性处理
      let cxt = canvas.getContext('2d'); // 上下文, 后面的画图都是拿这个对象来进行绘制的
      cxt.fillStyle = 'hsla(360, 100%, 80%, 1)';
      cxt.fillRect(100, 100, 200, 200);
      cxt.fillStyle = 'hsla(270,100%,40%,1)';
      cxt.fillRect(200, 150, 50, 50);
      cxt.strokeStyle = 'hsla(160,60%,30%,1)';
      cxt.strokeWidth='20px'
      cxt.strokeRect(200, 150, 50, 50);
    } else {
      // 针对不支持canvas的浏览器做的优雅降级
    }
  },
};
</script>
