<template>
  <!-- 比例尺和坐标 -->
  <div class="scale-axis">
    <axis></axis>
  </div>
</template>
<script>
import axis from './axis.vue'
export default {
  name:'scaleAxis',
  components: {
    axis
  },
  mounted() {
    // 线性比例尺
    let scale = this.d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, 500]);
    console.log(scale(5)); // 250 输入定义域获取值域
    console.log(scale(6)); // 300
    console.log(scale.invert(100)); // 2 输入值域返回定义域
    // scale.tickFormat((d) => {
    //   return d + 'test';
    // }); // tickFormat 格式化刻度的显示
    console.log(scale.domain()); // [0,10]
    console.log(scale.ticks()); // 获取刻度 项目用的还是比较多 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let ticks = scale.ticks(5);
    console.log(ticks);
    let ticksFormat = scale.tickFormat(5, '$');
    ticks.map((item, idx) => {
      ticks[idx] = ticksFormat(ticks[idx]);
    });

    console.log(ticks, 'jjjjjj');

    let niceScale = this.d3
      .scaleLinear()
      .domain([0.1234, 0.23456])
      .range([0, 10]);
    niceScale.nice();
    niceScale.ticks(10);
    console.log(niceScale.domain()); // [0.12, 0.24]
    console.log(niceScale.ticks()); //  [0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24]

    // exponent() 指定指数
    let powScale = this.d3
      .scalePow()
      .exponent(3)
      .domain([0, 3])
      .range([0, 10]);

    console.log(powScale.invert(8)); //

    // 量化比例尺 scaleQuantize() 属于连续性比例尺  定义域是连续得，值域是离散得

    let scaleQ = this.d3
      .scaleQuantize()
      .domain([0, 10])
      .range(['apple', 'banana', 'peer']);
    // 将定义域分为3段 ，每段对应一个值
    console.log(scaleQ(2), 'scaleQuantize'); // apple
    console.log(scaleQ(3), 'scaleQuantize'); // apple
    console.log(scaleQ(4), 'scaleQuantize'); // banana
    console.log(scaleQ(6), 'scaleQuantize'); // banana
    console.log(scaleQ(7), 'scaleQuantize'); // peer
    console.log(scaleQ(10), 'scaleQuantize'); // peer

    // 序数比例尺 scaleOrdinal

    let scaleO = this.d3
      .scaleOrdinal()
      .domain([1, 2, 3, 4, 5])
      .range(['水果', '蔬菜', '沙拉', '海鲜', '面食']);
    console.log(scaleO('3')); // 沙拉
    console.log(scaleO('6')); // 水果 超过domain的数量按照第一个返回

    // scalePoint()  domain range padding
    let scaleP = this.d3
      .scalePoint()
      .domain(['A', 'B', 'C'])
      .range([0, 120]);
    console.log(scaleP('A')); // 0
    console.log(scaleP('B')); // 60
    console.log(scaleP('C')); // 120

    scaleP.padding('.5');
    // domain 分成两段，加上padding 两段 padding占据每一段的.5
    console.log(scaleP('A')); // 20
    console.log(scaleP('B')); // 60
    console.log(scaleP('C')); // 100

    let scaleB = this.d3
      .scaleBand()
      .domain(['1', '2', '3', '4', '5'])
      .range([0, 100]);
    console.log(scaleB(3), 'band'); //20 根据定义域中的值，返回值域中频带的开始
    console.log(scaleB(5), 'band'); // 80
    console.log(scaleB.bandwidth(), 'band'); // 20 频带的宽度
    console.log(scaleB.step()); // 相邻频带起始点之间的距离

    scaleB.paddingOuter(0).paddingInner(0.5); // 内边距  step *.5
    console.log(scaleB.bandwidth()) // 11.11
    console.log(scaleB.step()) // 22.22
  },
};
</script>
