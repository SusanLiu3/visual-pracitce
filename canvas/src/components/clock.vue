<template>
  <div id="test">
    <canvas
      id="clockWrap"
      width="500"
      height="800"
      style="border:1px solid #f45"
    ></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvas: null,
      cxt: null,
    };
  },
  mounted() {
  },
  methods: {
    drawMinutesLine() {},
    drawHoursLine() {},
  },
};
</script>
