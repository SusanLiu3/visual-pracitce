<template>
  <div class="axis-wrap" id="axisWrap"></div>
</template>
<script>
import Slider from '@antv/g2/lib/chart/controller/slider';
import ScrollBar from '@antv/g2/lib/chart/controller/scrollbar';
import { registerComponentController } from '@antv/g2/lib/core';
export default {
  mounted() {
    let G = this.getEngine('canvas');
    const data = [
      { year: '1951 年', sales: 93.33, test: 'test1' },
      { year: '1952 年', sales: 65.67, test: 'test2' },
      { year: '1956 年', sales: 34.77, test: 'test3' },
      { year: '1957 年', sales: 51.44, test: 'test4' }
      
    ];
    let chart = new this.Chart({
      container: 'axisWrap',
      width: 500,
      height: 500,
    });
    chart.data(data); // 填充数据
    chart.scale('year', {
      // range: [0.1, 0.9],
      // tickInterval:10,
    });
    chart.coordinate('theta', {
      radius: 0.5,
    });
    chart.scale('sales', {
      alias: '销售数量',
      // ticks: [35, 50, 65, 80, 95, 110, 125, 140, 155],
      //tickCount: 5, // 刻度数
      // min: 40, // 刻度最小显示值
      // max: 140, // 刻度最大显示值
      // formatter: (v) => `￥${v}`, // 标签formatter
      //tickInterval: 20, // 刻度间隔
    });
    // chart.axis('sales', {
    //   title: {
    //     style: {
    //       fill: 'red',
    //     },
    //   },
    //   label: {
    //     style: {
    //       // fill: 'red',
    //     },
    //   },
    // });
    chart.legend({ position: 'right' });

    chart.tooltip({
      customContent: (name, items) => {
        const container = document.createElement('div');
        container.className = 'g2-tooltip';
        let listItem = '';
        items.forEach((item) => {
          listItem += `<li class="g2-tooltip-list-item" data-index={index} style="margin-bottom:4px;display:flex;align-items: center;">
          <span style="display:inline-flex;flex:1;justify-content:space-between">
          <span style="margin-right: 16px;">${item.data.year}</span>
          <span>${item.data.sales}</span>
          </span>
      </li>`;
        });
        container.innerHTML = listItem;
        return container;
      },
      // showCrosshairs: false,
      // shared: true,
      // showContent: true,
      // showTitle: false,
      // itemTpl: `<div style='padding-bottom:10px'><li style='margin-bottom:8px'>11</li><li>11</li></div>`,

      // showMarkers:true
    });
    chart.interaction('active-region');
    // chart.on('tooltip:show', (ev) => {});
    // chart.on('tooltip:change', (ev) => {
    //   let { item, x, y } = ev.data;
    // });
    // registerComponentController('slider', Slider);
    // chart.option('slider', {
    //   start: 0.4,
    //   end: 0.8,
    //   backgroundStyle: {
    //     fill: '#f45',
    //     stroke: '#000',
    //   },
    //   foregroundStyle: {
    //     fill: 'yellow',
    //     stroke: 'green',
    //   },
    //   handlerStyle: {
    //     fill: 'green',
    //   },
    // });

    registerComponentController('scrollbar', ScrollBar);
    chart.option('scrollbar', {
      type: 'horizontal',
      categorySize: 40,
      // width:300
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

    // chart.annotation().regionFilter({
    //   top: true,
    //   start: ['min', 'max'],
    //   end: ['max', 0],
    //   color: '#FF4D4F',
    // });

  let geometry=  chart
      .interval()
      .position('sales')
      .color('sales*test')
      .adjust('stack')
      .label('sales', {
    
    lineHeight:24,
    layout: [{ type: 'pie-spider' }, { type: 'hide-overlap' }],
    content: (obj, item) => {
      const group = new G.Group({});
      // 了解 shape 的绘制原理：y0 左下起点 y1 右上起点
      const [y0, y1] = item.y || [0, 0];
      const inRight = y0 < y1;
      const textAlign = inRight ? 'left' : 'right';

      const topFontSize = 16;
      const bottomFontSize = 14;
      group.addShape({
        type: 'text',
        attrs: {
          x: 0,
          y: 0,
          text: obj.sales,
          fill: 'rgba(0, 0, 0, 0.65)',
          fontSize: topFontSize,
          textAlign,
        },
      });

      group.addShape({
        type: 'text',
        attrs: {
          x: 0,
          y: 4,
          text: obj.year,
          textAlign,
          textBaseline: 'top',
          fill: 'rgba(0, 0, 0, 0.65)',
          fontWeight: 700,
          fontSize: bottomFontSize,
        },
      });
       group.addShape({
        type: 'text',
        attrs: {
          x: 0,
          y: 20,
          text: obj.test,
          textAlign,
          textBaseline: 'top',
          fill: 'rgba(0, 0, 0, 0.65)',
          fontWeight: 700,
          fontSize: bottomFontSize,
        },
      });
      if (!inRight) {
        group.translate(group.getBBox().width, 0);
      }
      group.translate(0, 16);
      return group;
    },
    labelLine: {
      style: {
        lineWidth: 0.5,
      },
    },
  })
  .adjust('stack');
    // .tooltip('year*sales*test', (year,sales, test) => {
    //   return {
    //     name: year,
    //     value: sales,
    //   };
    // }); // 柱子
    // chart.line().position('year*sales'); // 线性图
    chart.render();

    setTimeout(() => {
      //  geometry.color('year', ['#000', 'green', '#d3d3d3', 'pink', '#f23'])
      // chart.render();
    }, 3000);


    setTimeout(() => {
      // chart.data([ { year: '1951 年', sales: 93.33, test: 'test1' },
      // { year: '1952 年', sales: 65.67, test: 'test2' },
      // { year: '1956 年', sales: 34.77, test: 'test3' },
      // { year: '1957 年', sales: 51.44, test: 'test4' },
      // { year: '1958 年', sales: 81.12, test: 'test5' }]); 
      // chart.render();
    }, 5000);
  },
  methods: {
    drawAxis() {},
  },
};
</script>
