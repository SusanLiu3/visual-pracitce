<template>
  <div id="test">
    <canvas id="clockWrap" width="500" height="200" style="border:1px solid #f45"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvas: null,
      cxt: null
    };
  },
  mounted() {
    this.canvas = document.getElementById("clockWrap");
    if (this.canvas.getContext) {
      this.cxt = this.canvas.getContext("2d");
      this.cxt.translate(75, 75);
      this.cxt.rotate(-Math.PI / 2);
      this.cxt.strokeStyle = "#000";
      this.cxt.fillStyle = "#fff";
      this.cxt.lineCap = "round";
      this.cxt.save();
      this.cxt.lineWidth = 5;
      this.run()
    }
  },
  methods: {
    drawHoursLine() {
      this.cxt.save();
      for (let i = 0; i < 12; i++) {
        this.cxt.beginPath();
        this.cxt.moveTo(55, 0);
        this.cxt.lineTo(65, 0);
        this.cxt.stroke();
        this.cxt.rotate(Math.PI / 6);
      }
      this.cxt.restore();
    },
    drawMinutesLine() {
      this.cxt.save();
      this.cxt.lineWidth = 3;
      for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
          this.cxt.beginPath();
          this.cxt.moveTo(55, 0);
          this.cxt.lineTo(58, 0);
          this.cxt.stroke();
        }
        this.cxt.rotate(Math.PI / 30);
      }
      this.cxt.restore();
    },
    run() {
      this.cxt.clearRect(-75, -75, 500,200);
      this.drawHoursLine();
      this.drawMinutesLine();
      this.cxt.save();
      //
      let now = new Date();
      let h = now.getHours();
      let s = now.getSeconds();
      let m = now.getMinutes();
      h = h > 12 ? h - 12 : h;
      // 画小时
      this.cxt.beginPath();
      this.cxt.rotate(
        (h * Math.PI) / 6 + (m * Math.PI) / 360 + (s * Math.PI) / 21600
      );
      this.cxt.lineWidth = 6;
      this.cxt.beginPath();
      this.cxt.moveTo(-10, 0);
      this.cxt.lineTo(50, 0);
      this.cxt.stroke();
      this.cxt.restore();

      this.cxt.save();
      // 画分种
      this.cxt.lineWidth = 4;
      this.cxt.beginPath();
      this.cxt.rotate((m * Math.PI) / 30 + (s * Math.PI) / 1800);
      this.cxt.moveTo(-15, 0);
      this.cxt.lineTo(52, 0);
      this.cxt.stroke();
      this.cxt.restore();

      this.cxt.save();
      this.cxt.lineWidth = 2;
      this.cxt.strokeStyle = "#f45";
      this.cxt.fillStyle = "#f45";
      this.cxt.beginPath();
      this.cxt.rotate((s * Math.PI) / 30);
      this.cxt.moveTo(-20, 0);
      this.cxt.lineTo(44, 0);
      this.cxt.stroke();

      this.cxt.beginPath();
      this.cxt.arc(0, 0, 6, 0, Math.PI * 2);
      this.cxt.fill();

      this.cxt.beginPath();
      this.cxt.arc(48, 0, 4, 0, Math.PI * 2);
      this.cxt.stroke();

      this.cxt.restore();

      window.requestAnimationFrame(this.run);
    }
  }
};
</script>
