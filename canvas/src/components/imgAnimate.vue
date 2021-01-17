<template>
  <canvas style="border:1px solid yellow" id="imgAnimate" width="500" height="200"></canvas>
</template>
<script>
let canvasXSize = 500;
let canavsYSize = 200;
let x = 0;
let img = new Image();
let imgW;
let imgH;
let clearX = canvasXSize;
let clearY = canavsYSize;
import animate from "../img/animate2.jpg";
export default {
  data() {
    return {
      cxt: null,
      canvas: null
    };
  },
  mounted() {
    this.canvas = document.getElementById("imgAnimate");
    if (this.canvas.getContext) {
      this.cxt = this.canvas.getContext("2d");
      img.src = animate;
      img.onload = () => {
        imgW = img.width * 0.75;
        imgH = img.height * 0.75;
        clearX = canvasXSize;
        clearY = canavsYSize;
        if (imgW > canvasXSize) {
          x = canvasXSize - imgW;
          clearX = imgW;
        }
        if (imgH > canavsYSize) {
          clearY = imgH;
        }
        setInterval(() => {
          this.draw();
        }, 30);
      };
    }
  },
  methods: {
    draw() {
      this.cxt.clearRect(0, 0, clearX, clearY);
      if (imgW <= canvasXSize) {
        if (x > canvasXSize) {
          x = x - imgW;
        }
        if (x > 0) {
          this.cxt.drawImage(img, x - imgW, 0, imgW, imgH);
        }
      } else {
        if (x > canvasXSize) {
          x = canvasXSize - imgW;
        }
        if (x > canvasXSize - imgW) {
          this.cxt.drawImage(img, x - imgW + 1, 0, imgW, imgH);
        }
      }
      // draw image
      this.cxt.drawImage(img, x, 0, imgW, imgH);
      // amount to move
      x += 0.75;
    }
  }
};
</script>