<template>
  <canvas id="textWrap" width="300" height="100" style="border:1px solid #000">
  </canvas>
</template>
<script>
export default {
  mounted() {
    let canvas = document.getElementById('textWrap');
    if (canvas.getContext) {
      let cxt = canvas.getContext('2d');
      cxt.font = "48px serif";
      cxt.fillStyle='hsl(0,35%,45%)'
      cxt.strokeStyle='hsl(100,35%,45%)'
      // cxt.textAlign='center'
      // cxt.textBaseLine='bottom'
      cxt.fillText('canvas text', 30, 30);
      cxt.fillText('canvas text', 300, 30,60);
      cxt.strokeText('canvas text stroke',60,60)
      console.log(cxt.measureText('canvas text').width)
    }
  },
};
</script>
