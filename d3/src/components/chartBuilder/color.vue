<template>
  <div class="color-builder-wrap">
    <p :style="{ background: compute(0) }">{{ compute(0) }}</p>
    <p :style="{ background: compute(0.5) }">{{ compute(0.5) }}</p>
    <p :style="{ background: compute(1) }">{{ compute(1) }}</p>
  </div>
</template>
<script>
export default {
  name: 'colorBuilder',
  data() {
    return {
      compute: {},
    };
  },
  created() {
    let a = this.d3.rgb('red'); 
    let b = this.d3.rgb('green');
    this.compute = this.d3.interpolate(a, b); // 两个颜色直接的差值
    console.log(a.hex(),b.hex()) // 十六进制颜色形式
  },
};
</script>
