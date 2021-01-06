<template>
  <canvas id="colorWrap" width="800" height="1000" style="border:1px solid blue"
    >您的浏览器不支持canvas</canvas
  >
</template>
<script>
export default {
  data() {
    return {
      offset: 0,
    };
  },
  mounted() {
    let canvas = document.getElementById('colorWrap');
    if (canvas.getContext) {
      let cxt = canvas.getContext('2d');
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
      cxt.lineCap = 'butt'; // 与水平对齐
      cxt.stroke();

      cxt.beginPath();
      cxt.moveTo(30, 350);
      cxt.lineTo(30, 380);
      // 端点处 会加上线条宽度一半的宽度作为半圆的半径
      cxt.lineCap = 'round'; // 线条端点显示的样子，默认是butt，可选值 round square
      cxt.stroke();

      cxt.beginPath();
      cxt.moveTo(50, 350);
      cxt.lineTo(50, 380);
      cxt.lineWidth = 20;
      cxt.lineTo(70, 350);
      cxt.lineTo(85, 380);
      cxt.lineTo(90, 350);
      cxt.miterLimit = 3; //metreLimit 斜接限定值 如果交点比这个值大，则lineJoin 则是bevel
      // 线段连接处的显示样式 round - 圆的  bevel - 平的  mitre - 尖的，汇交到一点（默认）
      // cxt.lineJoin='round'
      cxt.lineCap = 'square'; // 端点处会加上线条宽度一半的宽
      cxt.stroke();

      // 虚线 setLineDash() 和 lineDashOffset
      // setInterval(() => {
      //   this.drawDashLine(cxt);
      // }, 30);

      // 渐变
      // 1. 创建一个渐变对象createLinearGradient(x1,y1,x2,y2) createRadialGradient(x1, y1, r1, x2, y2, r2)
      // 2. 给其上色 addColorStop(0-1,color值)

      let gradient = cxt.createLinearGradient(150, 500, 400, 500);
      gradient.addColorStop(0, 'hsl(0,50%,40%)');
      gradient.addColorStop(0.5, 'hsl(90,50%,40%)');
      gradient.addColorStop(0.8, 'hsl(180,75%,30%)');
      cxt.fillStyle = gradient;
      cxt.fillRect(150, 500, 150, 150);

      let radialGradial = cxt.createRadialGradient(500, 850, 20, 500, 850, 60);
      radialGradial.addColorStop(0, 'hsl(0,50%,40%)');
      radialGradial.addColorStop(0.5, 'hsl(90,50%,40%)');
      radialGradial.addColorStop(0.8, 'hsl(180,75%,30%)');
      cxt.beginPath();
      cxt.fillStyle = radialGradial;
      cxt.arc(500, 850, 60, 0, Math.PI * 2, true);
      cxt.fill();

      // pattern
      let img = new Image();
      img.src =
        'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
      img.onload = function() {
        let pattern = cxt.createPattern(img, 'repeat');
        cxt.fillStyle = pattern;
        cxt.fillRect(10, 850, 150, 1000);
      };

      // 阴影 shaowOffsetX shadowOffsetY 阴影在水平和垂直方向上的延申距离 shadowBlur 阴影的模糊程度 shadowColor 阴影颜色 默认透明的黑色
      cxt.shadowOffsetX = 2;
      cxt.shadowOffsetY = 2;
      cxt.shadowBlur = 2;
      cxt.shadowColor = "hsla(120,50%,30%,.5)"
      cxt.fillStyle = '#000';
      cxt.fillText('Sample String', 5, 30);


      // canvas 填充规则，根据某处在路径的外面或者里面来决定该处是否被填充  nonzero 完全填充 ; evenodd 填充不相交的?
      cxt.beginPath()
      cxt.lineWidth=1
      cxt.arc(300,850,20,0,Math.PI*2,false)
      cxt.arc(300,850,50,0,Math.PI*2,false)
      // cxt.stroke()
       cxt.fill("evenodd");
    } else {
    }
  },
  methods: {
    drawDashLine(cxt) {
      this.offset++;
      if (this.offset > 10) {
        this.offset = 0;
      }
      cxt.clearRect(9, 400, 600, 600);
      cxt.setLineDash([4, 2]);
      cxt.lineWidth = 1;
      cxt.lineDashOffset = -this.offset;
      cxt.strokeRect(10, 500, 100, 100);
    },
  },
};
</script>
