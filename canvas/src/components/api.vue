<template>
  <!-- 默认 300 * 150 -->
  <canvas
    style="border:1px solid #000"
    id="canvasWrap"
    width="800"
    height="800"
  >
    你的浏览器不支持canvas
  </canvas>
</template>
<script>
export default {
  mounted() {
    let canvas = document.getElementById('canvasWrap'); // canvas元素
    if (canvas.getContext) {
      // 矩形
      // 兼容性处理
      let cxt = canvas.getContext('2d'); // 上下文, 后面的画图都是拿这个对象来进行绘制的
      cxt.fillStyle = 'hsla(360, 100%, 80%, 1)';
      cxt.fillRect(100, 100, 200, 200);
      
      // 从坐标为120 * 120 处 擦除宽高分别为20px
      cxt.clearRect(120,120,20,20)
      // 描边
      cxt.strokeStyle='hsla(170,60%,40%,1)'
      cxt.lineWidth=4 // 设置宽度
      cxt.strokeRect(200, 150, 50, 50);
      // 路径
      cxt.beginPath()
      cxt.moveTo(310,300)
      cxt.lineTo(310,350)
      cxt.lineTo(400,350)
      cxt.strokeStyle='green'
      cxt.fillStyle='hsl(160,20%,80%)'
      cxt.fill()
    } else {
      // 针对不支持canvas的浏览器做的优雅降级
    }
  },
};
</script>
