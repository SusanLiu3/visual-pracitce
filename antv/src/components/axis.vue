<template>
  <div class="axis-wrap" id="axisWrap"></div>
</template>
<script>
export default {
  mounted() {
    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 },
    ];
    let chart = new this.Chart({
      container: 'axisWrap',
      width: 500,
      height: 500,
    });
    chart.data(data); // 填充数据
    chart.scale('year', {
      range: [0.1, 0.9],
    });
    chart.scale('sales', {
      alias: '销售数量',
      // ticks:[35,50,65,80,95,110,125,140,155],
      tickCount: 5, // 刻度数
      min: 40, // 刻度最小显示值
      max: 140, // 刻度最大显示值
      formatter: (v) => `￥${v}`, // 标签formatter
      tickInterval: 20, // 刻度间隔
    });
    chart.axis('sales', {
      title: {
        color: 'red',
      },
    });
    // chart.interval().position('year*sales'); // 柱子
    chart.line().position('year*sales'); // 线性图
    chart.render();
  },
  methods: {
    drawAxis() {},
  },
};
</script>
