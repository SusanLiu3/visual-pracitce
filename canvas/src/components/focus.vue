<template>
  <canvas id="canvas" width="100" height="100" style="border:1px solid #f45">
    <input id="button" type="range" min="1" max="12" />
  </canvas>
</template>
<script>
export default {
  mounted() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var button = document.getElementById("button");

    button.focus();

    ctx.beginPath();
    ctx.rect(10, 10, 30, 30);
    ctx.drawFocusIfNeeded(button);
  }
};
</script>