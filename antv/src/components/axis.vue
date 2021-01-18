<template>
  <div class="axis-wrap" id="axisWrap"></div>
</template>
<script>
import Slider from '@antv/g2/lib/chart/controller/slider';
import { registerComponentController } from '@antv/g2/lib/core';
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
      // ticks: [35, 50, 65, 80, 95, 110, 125, 140, 155],
      //tickCount: 5, // 刻度数
      // min: 40, // 刻度最小显示值
      // max: 140, // 刻度最大显示值
      formatter: (v) => `￥${v}`, // 标签formatter
      //tickInterval: 20, // 刻度间隔
    });
    chart.axis('sales', {
      title: {
        style: {
          fill: 'red',
        },
      },
      label: {
        style: {
          // fill: 'red',
        },
      },
    });
    chart.legend({ position: 'right' });
    chart.tooltip({
      showCrosshairs: false,
      shared: true,
      showTitle: false,
      itemTpl: `<div style='padding-bottom:10px'><li style='margin-bottom:8px'>{year}</li><li>销量 {value}</li></div>`,

      // showMarkers:true
    });
    chart.interaction('active-region');
    chart.on('tooltip:show', (ev) => {});
    chart.on('tooltip:change', (ev) => {
      let { item, x, y } = ev.data;
    });
    registerComponentController('slider', Slider);
    chart.option('slider', {
      start:.4,
      end: 0.8,
      backgroundStyle:{
        fill:'#f45',
        stroke:'#000'
      },
      foregroundStyle:{
        fill:'yellow',
        stroke:'green'
      },
      handlerStyle:{
        fill:'green'
      },
    });

    // chart.annotation().text({
    //   position(){
    //     return {
    //       year: '1957 年', sales: 150
    //     }
    //   },
    //   content:'最大值',
    //   // offsetX:30,
    //   // offsetY:40
    // })

    chart.annotation().regionFilter({
      top: true,
      start: ['min', 'max'],
      end: ['max', 0],
      color: '#FF4D4F',
    });

    chart
      .interval()
      .position('year*sales')
      .color('year',['yellow','blue'])
      .label('sales', (value) => {
        return {
          type: 'interval',
          style: {
            fill: 'red',
            stroke: 'blue',
          },
          offsetX: 20,
          offsetY: 30,
          content: value + '这是标签mmm',
          autoRotate: false,
          rotate: true,
          labelLine: {
            style: {
              stroke: 'yellow',
            },
          },
        };
      })
      .tooltip('year*sales', (year, sales) => {
        return {
          year: year,
          value: sales,
        };
      }); // 柱子
    // chart.line().position('year*sales'); // 线性图
    chart.render();
  },
  methods: {
    drawAxis() {},
  },
};
</script>
