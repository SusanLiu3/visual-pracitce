<template>
  <canvas
    id="animateWrap"
    width="400"
    height="400"
    style="border:1px solid #dedede"
  ></canvas>
</template>
<script>
import earth from '../img/Canvas_earth.png';
import moon from '../img/Canvas_moon.png';
import sun from '../img/Canvas_sun.png';
export default {
  data() {
    return {
      cxt: null,
      canvas: null,
      earthImg: null,
      moonImg: null,
      sunImg: null,
    };
  },
  mounted() {
    this.canvas = document.getElementById('animateWrap');
    if (this.canvas.getContext) {
      this.cxt = this.canvas.getContext('2d');
      this.cxt.strokeStyle = 'rgba(0,153,255,0.4)';
      this.cxt.fillStyle = 'rgba(0,153,255,0.4)';
      this.cxt.globalCompositeOperation = 'lighter';
      this.earthImg = new Image();
      this.earthImg.src = earth;
      this.moonImg = new Image();
      this.moonImg.src = moon;
      this.sunImg = new Image();
      this.sunImg.src = sun;
      this.cxt.save();
      window.requestAnimationFrame(this.draw);
      // this.draw();
    }
  },
  methods: {
    draw() {
      this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas
      this.cxt.save();
      this.cxt.translate(200,200);

      let time = new Date();
      this.cxt.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
          ((2 * Math.PI) / 60000) * time.getMilliseconds()
      );
      this.cxt.translate(105, 0);
      this.cxt.drawImage(this.earthImg, 0, 0);

   
      this.cxt.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
          ((2 * Math.PI) / 6000) * time.getMilliseconds()
      );
      this.cxt.translate(0, 38);
      this.cxt.drawImage(this.moonImg,0,0);
  

      // 太阳系
      this.cxt.restore();
     
      this.cxt.beginPath();
      this.cxt.arc(200, 200, 100, 0, Math.PI * 2);
      this.cxt.stroke();
       this.cxt.drawImage(
        this.sunImg,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.cxt.restore();
      window.requestAnimationFrame(this.draw);
    },
  },
};
</script>
