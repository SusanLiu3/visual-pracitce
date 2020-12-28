<template>
  <!-- 弧形生成器 -->
  <div class="arc-builder-wrap"></div>
</template>
<script>
export default {
  name: 'arc',
  mounted() {
    let d3 = this.d3;
    let svg = d3
      .select('.arc-builder-wrap')
      .append('svg')
      .attr('width', 600)
      .attr('height', 600)
      .attr('transform', 'translate(20,20)');
    let data = [
      {
        data: 30,
        endAngle: Math.PI * 0.25,
        index: 0,
        padAngle: 0,
        startAngle: 0,
        value: 30,
      },
      {
        data: 20,
        endAngle: Math.PI * 0.75,
        index: 1,
        padAngle: 0,
        startAngle: Math.PI * 0.25,
        value: 20,
      },
      {
        data: 40,
        endAngle: Math.PI * 1.75,
        index: 1,
        padAngle: 0,
        startAngle: Math.PI * 0.75,
        value: 20,
      },
      {
        data: 60,
        endAngle: Math.PI * 2,
        index: 1,
        padAngle: 0,
        startAngle: Math.PI * 1.75,
        value: 20,
      },
    ];
    let arc = d3
      .arc()
      .innerRadius(20)
      .outerRadius(30);
    var colors = d3.schemeCategory10;
    // 画弧形
    let arcSvg = svg
      .append('g')
      .attr('transform', 'translate(60,65)')
      .selectAll('g')
      .data(data)
      .enter()
      .append('g');
    arcSvg
      .append('path')
      .attr('d', arc)
      .attr('stroke', '#f45')
      .attr('stroke-width', 3)
      .attr('fill', (d, i) => colors[i]);
    // 添加文字
    arcSvg
      .append('text')
      .attr('transform', (d) => {
        let x = arc.centroid(d)[0] * 2;
        let y = arc.centroid(d)[1] * 2;
        return `translate(${x},${y})`;
      })
      .attr('text-anchor', 'middle')
      .text((d) => {
        return d.data;
      });
    // 添加线
    arcSvg
      .append('polyline')
      .attr('points', (d) => {
        let x1 = arc.centroid(d)[0] * 1.2;
        let y1 = arc.centroid(d)[1] * 1.2;

        let x2 = arc.centroid(d)[0] * 1.8;
        let y2 = arc.centroid(d)[1] * 1.8;
        let points = arc.centroid(d);
        return [[x1, y1], [x2, y2], points];
      })
      .attr('stroke', '#ccc')
      .attr('fill', 'none')
      .attr('stroke-width', 1);
    // d3.pie(data) 将数据转换成原始数据 {data ,startAngle,endAngle,innerRadius,outerRadius}

    let pie = d3.pie().value(d=>d[1]);
    let arc1 = d3
      .arc()
      .innerRadius(50)
      .outerRadius(90);
    let dataset = [
      ['apple', 10],
      ['peer', 30],
      ['banana', 50],
    ];
    let arcSvg1 = svg
      .append('g')
      .attr('transform', 'translate(260,260)')
      .selectAll('g')
      .data(pie(dataset))
      .enter()
      .append('g');
    arcSvg1
      .append('path')
      .attr('d', arc1)
      .attr('fill', (d, i) => colors[i])
      .attr('stroke', '#f45')
      .attr('stroke-width', 3);

    arcSvg1
      .append('text')
      .attr('transform', (d) => {
        let x1 = arc1.centroid(d)[0] * 2;
        let y1 = arc1.centroid(d)[1] * 2;
        return `translate(${x1},${y1})`;
      })
      .attr('fill', '#ccc')
      .attr('stroke', 'none')
      .text(d=>d.data[0])

    arcSvg1
      .append('polyline')
      .attr('points', (d) => {
        let x1 = arc1.centroid(d)[0] * 1.8;
        let y1 = arc1.centroid(d)[1] * 1.8;

        let x2 = arc1.centroid(d)[0] * 0.8;
        let y2 = arc1.centroid(d)[1] * 0.8;
        let points = arc1.centroid(d);
        return [[x1, y1], [x2, y2], arc1.centroid(d)];
      })
      .attr('stroke', '#000')
      .attr('fill', 'none');
  },
};
</script>
