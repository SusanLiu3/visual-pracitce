<template>
  <!-- 默认 300 * 150 -->
  <canvas
    style="border:1px solid #000"
    id="canvasWrap"
    width="1000"
    height="900"
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
      cxt.clearRect(120, 120, 20, 20);
      // 描边
      cxt.strokeStyle = 'hsla(170,60%,40%,1)';
      cxt.lineWidth = 4; // 设置宽度
      cxt.strokeRect(200, 150, 50, 50);
      // 路径
      cxt.beginPath();
      cxt.moveTo(310, 300);
      cxt.lineTo(310, 350);
      cxt.lineTo(400, 330);
      cxt.lineWidth = 8; // 设置宽度
      cxt.fillStyle = 'hsl(160,20%,80%)';
      cxt.closePath(); // 非必须，
      cxt.stroke();

      // moveTo()
      cxt.beginPath();
      cxt.moveTo(50, 420);
      cxt.lineWidth = 1;
      cxt.strokeStyle = 'hsl(0,100%,0%)';
      cxt.strokeRect(50, 420, 20, 20);
      cxt.moveTo(80, 420);
      cxt.strokeStyle = 'hsl(120,80%,30%)';
      cxt.strokeRect(80, 420, 20, 20);

      // mdn 例子 四行三列
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          cxt.beginPath();
          let x = 450 + j * 80;
          let y = 450 + i * 80;
          let radius = 20;
          let startAngle = 0;
          let endAngle = (Math.PI + Math.PI * j) / 2;
          let clockwise = j % 2 === 0 ? false : true;
          cxt.arc(x, y, radius, startAngle, endAngle, clockwise);

          if (i > 1) {
            cxt.fill(); // 填充
          } else {
            cxt.stroke();
          }
        }
      }

      // 二次贝塞尔曲线
      cxt.beginPath();
      cxt.moveTo(40, 450);
      cxt.quadraticCurveTo(35, 470, 40, 600);
      cxt.quadraticCurveTo(55, 600, 70, 600);
      cxt.quadraticCurveTo(75, 610, 55, 625);
      cxt.quadraticCurveTo(100, 610, 100, 600);
      cxt.quadraticCurveTo(150, 605, 180, 600);
      cxt.quadraticCurveTo(185, 500, 180, 450);
      cxt.closePath();
      cxt.stroke();

      // 三次贝塞尔曲线
      cxt.beginPath();
      cxt.moveTo(150, 650);
      cxt.bezierCurveTo(280, 620, 300, 750, 100, 850);
      cxt.moveTo(150, 650);
      cxt.bezierCurveTo(20, 620, 0, 750, 100, 850);
      cxt.fill();

      // 额外的绘制矩形方法
      cxt.strokeStyle='red'
      cxt.rect(20,20,100,100)
      cxt.stroke()

      // 添加一条路径
    } else {
      // 针对不支持canvas的浏览器做的优雅降级
    }
  },
};
</script>
