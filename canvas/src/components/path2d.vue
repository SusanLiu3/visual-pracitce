<template>
  <canvas id="pathTwoD" width="800" height="1000" style="border:1px solid #f45">
  </canvas>
</template>
<script>
export default {
  name: 'path2d',
  mounted() {
    let canvas = document.getElementById('pathTwoD');
    if (canvas.getContext) {
      let cxt = canvas.getContext('2d');
      let rect = new Path2D();
      rect.rect(20, 20, 50, 50);
      cxt.fillStyle = 'hsl(135,60%,20%)';
     

      let arc = new Path2D();
      cxt.strokeStyle = 'hsl(0,80%,20%)';
      arc.arc(100, 40, 20, Math.PI * 0.45, Math.PI * 0.9, true);
      cxt.stroke(arc);

      let line = new Path2D();
      line.moveTo(200, 20);
      line.lineTo(250, 40);
      line.lineTo(300, 20);
      // line.closePath()
      // cxt.stroke(line)
      cxt.fill(line);

      /**
       * xNew = a x + c y + e
         yNew = b x + d y + f
       */
      var m = document
        .createElementNS('http://www.w3.org/2000/svg', 'svg')
        .createSVGMatrix();
      m.a = 1;
      m.b = 0;
      m.c = 0;
      m.d = 1;
      m.e = 300;
      m.f = 0;
      rect.addPath(rect, m);
      cxt.fill(rect);
      //
      let d = new Path2D('M 100 100 h 80 v 80')
      cxt.lineWidth=4 // 只有两条边生效
      cxt.strokeStyle='red'
      cxt.stroke(d)
      cxt.fill(d)
    }
  },
};
</script>
