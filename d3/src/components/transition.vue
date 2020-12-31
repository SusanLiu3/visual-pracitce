<template>
  <!-- 过渡 -->
  <div class="transition"></div>
</template>
<script>
import { drawAxis } from './chartBuilder/utils/aixs.js';
export default {
  name: 'transition',
  mounted() {
    let d3 = this.d3;
    let svg = d3
      .select('.transition')
      .append('svg')
      .attr('width', 600)
      .attr('height', '40em');

    let data = [
      ['苹果', 2],
      ['李子', 4],
      ['香蕉', 10],
      ['橘子', 8],
    ];
    // 画轴 : 定义比例尺   定义axis  定义轴容器
    let scaleX = d3
      .scaleBand()
      .domain(['苹果', '李子', '香蕉', '橘子'])
      .range([0, 550])
      .paddingOuter(0.5)
      .paddingInner(0.5);

    let axisX = d3.axisBottom(scaleX);
    let gX = svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(50,600)');
    gX.call(axisX);

    let scaleY = d3
      .scaleLinear()
      .domain([0, 10])
      .range([550, 0]);
    let axisY = d3.axisLeft(scaleY);
    let gY = svg
      .append('g')
      .attr('class', 'y-axis')
      .attr('transform', 'translate(50,50)');
    gY.call(axisY);

    let step = scaleX.step();
    let inner = step * 0.5;

    // 画柱子
   let rect= svg
      .selectAll('rect')
      .data(data, (d) => d[1])
      .enter()
      .append('rect')
      .attr('x', (d, idx) => 50 + scaleX(d[0]) + 15)
      .attr('y', (d) => scaleY(d[1]) + 50)
      .attr('width', 30)
      .attr('height',0)
      .attr('fill', 'red')
      .attr('stroke-width', 1);
     rect.on('mouseover', function(d) {
       // 不可以使用箭头函数
        d3.select(this).transition()
          .duration(500)
          .attr('fill', 'yellow');
      })
      .on('mouseout',function(d) {
         d3.select(this).transition()
          .duration(500)
          .attr('fill', 'green');
      })
      .transition()
      .duration(2000)
      .delay(200)
      .ease(d3.easeLinear)
      .attrTween('height', (d) => {
        return (t) => {
          return (550 - scaleY(d[1])) * t;
        };
      })
      .attr('fill', 'green');
    // .attr('height', (d) => 550-scaleY(d[1]));


    d3.select('body')
    .on('keydown', function () {
        rect.attr('fill', function (d) {
            if(d === String.fromCharCode(event.keyCode)) {
                return 'green'
            }else {
                 return 'red'
             }
        })
    })
    .on('keyup', function () {
        rect.attr('fill', 'green')
    })
  },
};
</script>
