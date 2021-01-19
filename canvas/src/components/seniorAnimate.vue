<template>
  <canvas
    id="seniorAnimate"
    width="500"
    height="500"
    style="border:1px solid hsl(160,30%,20%)"
  ></canvas>
</template>
<script>
import { ball } from '../utils/ball.js';
let run = false;
let ref = null;
export default {
  data() {
    return {
      cxt: null,
      canvas: null,
    };
  },
  beforeDestroy() {
    this.canvas.removeEventListener('click', this.clkProcess);
    this.canvas.removeEventListener('mousemove', this.moveProcess);
    this.canvas.removeEventListener('mouseout', this.outProcess);
  },
  mounted() {
    this.canvas = document.getElementById('seniorAnimate');
    if (this.canvas.getContext) {
      this.cxt = this.canvas.getContext('2d');
    }
    this.canvas.addEventListener('click', this.clkProcess);
    this.canvas.addEventListener('mousemove', this.moveProcess);
    this.canvas.addEventListener('mouseout', this.outProcess);
    this.draw();
  },
  methods: {
    draw(flag) {
      this.clear();
      this.cxt.beginPath();

      if (ball.x + ball.vx > this.canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
      if (ball.y + ball.vy > this.canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      }

      this.cxt.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      this.cxt.fillStyle = ball.fillColor;
      this.cxt.fill();
      ball.x += ball.vx;
      ball.y += ball.vy;
      if (flag!==true) {
        ref = window.requestAnimationFrame(this.draw);
      }
    },
    clear() {
      // 长尾效果
      this.cxt.fillStyle = 'hsla(360,0%,100%,0.3)';
      this.cxt.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    clkProcess() {
      if (!run) {
        ref = window.requestAnimationFrame(this.draw);
        run = true;
      }
    },
    moveProcess(e) {
      if (!run) {
        this.clear();
        ball.x = e.offsetX;
        ball.y = e.offsetY;
        // 画小球
        this.draw(true);
      }
    },
    outProcess() {
      window.cancelAnimationFrame(ref);
      run = false;
    },
  },
};
</script>
