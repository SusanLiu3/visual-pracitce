<template>
  <canvas
    id="clipWrap"
    width="400"
    height="180"
    style="border:1px dashed green"
  ></canvas>
</template>
<script>
import clip from '../img/clip.jpg';
export default {
  mounted() {
    let canvas = document.getElementById('clipWrap');
    if (canvas.getContext) {
      let cxt = canvas.getContext('2d');
      cxt.fillStyle = '#dedede';
      cxt.fillRect(0, 0, 400, 180);
      canvas.style.background = `url("https://www.kkkk1000.com/images/globalCompositeOperation/bg3.jpg") no-repeat 0 0`;
      canvas.style.backgroundSize = '400px, 180px';
      canvas.addEventListener('mousedown', downProcess, false);
      canvas.addEventListener('mousemove', moveProcess, false);
      canvas.addEventListener('mouseup', upProcess, false);
      cxt.lineWidth = 20;
      cxt.lineJoin = 'round';
      let x = 0,
        y = 0;
      let drawFlag = false;
      function downProcess(e) {
        x = e.offsetX;
        y = e.offsetY;

        drawFlag = true;
      }

      let clearCount=0

      function moveProcess(e) {
        if (drawFlag) {
          clearCount++
          cxt.beginPath();
          cxt.moveTo(x, y);
          cxt.globalCompositeOperation = 'destination-out'; // 在源对象
          x = e.offsetX;
          y = e.offsetY;
          cxt.lineTo(e.offsetX, e.offsetY);
          cxt.closePath();
          cxt.stroke();
        }
      }
      function upProcess(e) {
        drawFlag = false;
        if (clearCount>30){
          cxt.clearRect(0,0,400,250)
        }
      }
    }
  },
};
</script>
<style scoped>
canvas {
  /* 设置鼠标的光标是一张图片， 16和22 分别表示热点的X坐标和Y坐标 */
  /* https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor/url */
  cursor: url('https://www.kkkk1000.com/images/globalCompositeOperation/mouse.png')
      16 22,
    auto;
}
</style>
