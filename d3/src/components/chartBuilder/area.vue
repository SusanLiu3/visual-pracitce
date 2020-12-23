<template>
<!-- 区域生成器 -->
  <div class="area-builder-wrap"></div>
</template>
<script>
import { drawAxis } from './utils/aixs.js';
export default {
  name: 'area',
  mounted() {
    let svg = this.d3
      .select('.area-builder-wrap')
      .append('svg')
      .attr('width', 600)
      .attr('height', 600)
      .attr('transform', 'translate(20,20)');
    let { scale: scaleX } = drawAxis(
      this.d3,
      [0, 10],
      [0, 500],
      'axisTop',
      svg,
      {
        translateX: 40,
        translateY: 550,
        className: 'x-axis',
      }
    );
    let { scale: scaleY } = drawAxis(
      this.d3,
      [0, 100],
      [500, 0],
      'axisLeft',
      svg,
      {
        translateX: 40,
        translateY: 50,
        className: 'y-axis',
      }
    );
    let dataSet = [
      [0, 10],
      [1, 30],
      [2, 60],
      [3, 40],
      [8, 35],
      [9, 20],
      // [10, 50],
    ];

    let areaPath = this.d3
      .area()
      // .curve(this.d3.curveBasis(0.5))
      // .x0((d) => scaleX(d[0]) + 40)
      .x((d) => scaleX(d[0]) + 40)
      .y0((d) => scaleY(d[1]) + 50)
      .y1((d) => {
        return Math.abs(250 - scaleY(d[1]));
      })
      // .x1((d) => {
      //   return scaleY(d[1])+ 20
      // });
    let color1 = this.d3.rgb('#f45');
    let color2 = this.d3.rgb('#fff');
    let compute = this.d3.interpolate(color1, color2);
    svg
      .append('g')
      .attr('class', 'area')
      .append('path')
      .data([dataSet])
      .attr('d', areaPath)
      .attr('stroke', 'block')
      .attr('stroke-width', '2px')
      .attr('fill', compute(.5));
  },
};
</script>
