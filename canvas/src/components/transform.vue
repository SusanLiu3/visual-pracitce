<template>
  <canvas
    id="transformWrap"
    width="500"
    height="600"
    style="border:1px solid hsl(120,40%,40%)"
  ></canvas>
</template>
<script>
export default {
  name: 'transform',
  mounted() {
    let canvas = document.getElementById('transformWrap');
    if (canvas.getContext) {
      let cxt = canvas.getContext('2d');
      cxt.fillRect(0, 0, 150, 150);
      cxt.save();

      cxt.fillStyle = '#09f';
      cxt.fillRect(15, 15, 120, 120);
      cxt.save(); // 保存上次状态
      cxt.fillStyle = 'hsl(360,0%,100%)';
      cxt.globalAlpha = '.3';
      cxt.fillRect(30, 30, 90, 90);
      cxt.restore();
      cxt.fillRect(45, 45, 60, 60);
      cxt.restore();
      cxt.fillRect(60, 60, 30, 30);

      cxt.translate(140, 0);
      cxt.save();
      for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
          cxt.save();
          cxt.translate(140 + j * 30, 0 + i * 30); // 移动canvas的原点
          cxt.fillStyle = `hsl(${300 - (j + 1) * 60} ,${100 -
            (i + 1) * 20}%,${100 - (j + 1) * 20}%)`;
          cxt.fillRect(0, 0, 30, 30);
          cxt.restore();
        }
      }

      // rotate(angle) 以原点为中心旋转canvas
      cxt.translate(0, 200);
      for (let i = 1; i < 6; i++) {
        cxt.save();
        cxt.fillStyle = `hsl(${240 - 40 * i},${100 - 15 * i}%,${100 -
          15 * i}%)`;
        for (let j = 0; j < i * 6; j++) {
          cxt.rotate((Math.PI * 2) / (i * 6));
          cxt.beginPath();
          cxt.arc(0, i * 15, 5, 0, Math.PI * 2);
          cxt.fill();
        }
        cxt.restore();
      }

      // scale(x,y)
      cxt.translate(0, 300);
      cxt.save();
      cxt.scale(-5, 5);
      cxt.font = '12px serif';
      cxt.fillText('test scale', 0, 0);
      cxt.restore();
      cxt.scale(10, -2);
      cxt.fillRect(0, 0, 20, 20);

      //  变形 transform(a,b,c,d,e,f) 对变形矩阵进行变形
      cxt.restore();
      cxt.translate(0, 550);
      cxt.strokeStyle = 'hsl(120,40%,40%)';
      cxt.transform(2, Math.PI / 6, -Math.PI / 6, 1, 10, 10);
      cxt.strokeRect(0, 0, 60, 15);
    }
  },
};
</script>
