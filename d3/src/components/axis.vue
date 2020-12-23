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
    // 坐标 向上的刻度轴
    let tAxis = this.d3.axisTop(scale);
    // svg中添加g元素
    let gtAxis = svg.append('g').attr('transform', 'translate(50,50)');
    // 坐标轴给g 元素回调
    gtAxis.call(tAxis);
    
    let lAxis = this.d3.axisLeft(scale);
    let glAxis=svg.append('g').attr('transform','translate(40,0)')
    glAxis.call(lAxis)

    let scaleR=this.d3.scaleLinear().domain([0,10]).range([0, 320])
    let axisR=this.d3.axisRight(scaleR).tickValues([2,4,6,8]).tickSizeInner(3).tickSizeOuter(10)
    let svgR=svg.append('g').attr('transform','translate(50,60)')
    svgR.call(axisR)

    let scaleB=this.d3.scaleLinear().domain([0,10]).range([0,320])
    let axisB=this.d3.axisBottom(scaleB).ticks([2],'.1f')
    let svgB=svg.append('g').attr('transform','translate(50,60)')
    svgB.call(axisB)
    console.log(axisR.tickValues(),'*****')
    console.log(scale('apple'));
    console.log(scale('orange'));
    console.log(scale.bandwidth());
    console.log(scale.step());
  
  },
};
</script>
