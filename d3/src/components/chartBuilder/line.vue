<template>
  <!-- 线段生成器 -->
  <div class="line-builder-wrap"></div>
</template>
<script>
import { drawAxis } from './utils/aixs.js';
export default {
  name: 'line',
  mounted() {
    let svg = this.d3
      .select('.line-builder-wrap')
      .append('svg')
      .attr('width', 600)
      .attr('height', 600)
      .attr('transform', 'translate(20,20)');
    let { scale: scaleX } = drawAxis(this.d3,[0, 10], [0, 500], 'axisTop', svg, {
      translateX: 40,
      translateY: 550,
      className: 'x-axis',
    });
    let { scale: scaleY } = drawAxis(this.d3,[0, 100], [500, 0], 'axisLeft', svg, {
      translateX: 40,
      translateY: 50,
      className: 'y-axis',
    });

    let data = [
      [0, 10],
      [1, 30],
      [2, 40],
      [3, 60],
      [8, 45],
      [9, 80],
      [10, 100],
    ];
    // 线 生成器
    let linePath = this.d3
      .line()
      .curve(this.d3.curveBasis)
      .x((d) => scaleX(d[0]) + 40)
      .y((d) => scaleY(d[1]) + 50);
    // .defined((d) => !!d[1]);
    svg
      .append('g')
      .attr('class', 'line')
      .append('path')
      .data([data])
      .attr('d', linePath)
      .attr('stroke', '#f45')
      .attr('stroke-width', '2px')
      .attr('fill', 'none');
  },
};
</script>
