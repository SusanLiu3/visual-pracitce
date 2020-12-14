<template>
  <div class="axis"></div>
</template>
<script>
export default {
  name: 'axis',
  mounted() {
    // scaleTop(scale)  构造一个水平向上的生成器 其他类似
    // axis
    // 容器 svg
    let svg = this.d3
      .select('.axis')
      .append('svg')
      .attr('width', 400)
      .attr('height', 400);

    // 定义scale 比例尺
    let scale = this.d3
      .scaleBand()
      .domain(['apple', 'orange', 'peer', 'banana'])
      .range([0, 320]);
    // 坐标
    let axis = this.d3.axisTop(scale);
    // svg中添加g元素
    let gAxis = svg.append('g').attr('transform', 'translate(50,50)');
    // 坐标轴给g 元素回调
    gAxis.call(axis);

    console.log(scale('apple'));
    console.log(scale('orange'));
    console.log(scale.bandwidth());
    console.log(scale.step());
  },
};
</script>
