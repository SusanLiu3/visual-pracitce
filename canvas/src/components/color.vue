<template>
  <canvas id="colorWrap" width="800" height="1000" style="border:1px solid blue">您的浏览器不支持canvas</canvas>
</template>
<script>
export default {
  mounted() {
    let canvas = document.getElementById("colorWrap");
    if (canvas.getContext) {
      let cxt = canvas.getContext("2d");
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          // 透明度 globalAlpha ,适用于绘制大量拥有相同透明度的图形；像单个图形的透明可以使用
          // css规范的颜色值hsla() rgba()
          cxt.globalAlpha = 0.8;
          // fillStyle 填充颜色
          cxt.fillStyle = `hsl(${360 - 60 * j},${100 - i * 20}%,${100 -
            (j + 1) * 10}%)`;
          cxt.fillRect(10 + j * 50, 10 + 50 * i, 50, 50);
          // strokeStyle 描边颜色
          cxt.beginPath();
          cxt.strokeStyle = `hsl(${360 - 60 * j},${100 - (i + 1) * 10}%,${100 -
            (j + 2) * 10}%)`;
          cxt.arc(350 + j * 45, 40 + i * 45, 20, 0, Math.PI * 2, false);
          cxt.stroke();
        }
      }

      // 线性样式 Line Styles
     
      cxt.beginPath();
      cxt.lineWidth = 13; // 设置线条宽度
      cxt.moveTo(10, 350);
      cxt.lineTo(10, 380);
      cxt.lineCap='butt' // 与水平对齐
      cxt.stroke();

      cxt.beginPath()
      cxt.moveTo(30,350)
      cxt.lineTo(30,380)
      // 端点处 会加上线条宽度一半的宽度作为半圆的半径
      cxt.lineCap='round' // 线条端点显示的样子，默认是butt，可选值 round square
      cxt.stroke()

      cxt.beginPath()
      cxt.moveTo(50,350)
      cxt.lineTo(50,380)
      cxt.lineWidth=10
      cxt.lineTo(70,350)
      cxt.lineTo(85,380)
      cxt.lineTo(90,350)
      // 线段连接处的显示样式 round - 圆的  bevel - 平的  mitre - 尖的（默认）
      cxt.lineJoin='round'
      cxt.lineCap='square' // 端点处会加上线条宽度一半的宽
      cxt.stroke()


    } else {
    }
  }
};
</script>