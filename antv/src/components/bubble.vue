<template>
  <div class="bubble-wrap" id="bubbleWrap"></div>
</template>
<script>
import { registerShape } from '@antv/g2';
import DataSet from '@antv/data-set';
import * as d3 from 'd3';
export default {
  mounted() {
    let G = this.getEngine('canvas');
    const data = [
      { size: 8, name: 'BE', country: 'Belgium' },
      { size: 18, name: 'DE', country: 'Germany' },
      { size: 10, name: 'FI', country: 'Finland' },
      { size: 15, name: 'NL', country: 'Netherlands' },
      { size: 20, name: 'SE', country: 'Sweden' },
      { size: 88, name: 'dd', country: 'fff' },
      { size: 48, name: 'gg', country: 'Sweden' },
    ];

    var pack = d3.pack().size([900, 400]);

    var root = d3
      .hierarchy({
        children: data,
      })
      .sum((d) => {
        return d.size;
      });
    // root.sort((a, b) => b.value - a.value);
    root.sort((a, b) => a.value - b.value);
    // root.sort((a, b) => Math.random() * 2 - 1);
    var nodes = pack(root)
      .leaves()
      .map((d, i) => {
        return {
          x: d.x,
          y: d.y,
          r: d.r,
          radius: d.r,
          value: d.value,
          data: d.data,
        };
      });
    let points = [];
    registerShape('point', 'triangle', {
      // 2. 绘制
      draw(cfg, group) {
        points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
        const polygon = group.addShape('circle', {
          attrs: {
            ...cfg.defaultStyle,
            x: cfg.data.x,
            y: cfg.data.y,
            r: cfg.data.r,
            points,
          },
        });
        return polygon;
      },
    });

    const chart = new this.Chart({
      container: 'bubbleWrap',
      autoFit: true,
      height: 500,
      width:900
     
    });

    chart.data(nodes);

    chart.coordinate('polar', { radius: 0.65 });
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      // customContent: (name, data) => {
      //   const container = document.createElement('div');
      //   container.className = 'g2-tooltip';
      //   container.innerHTML = '<div>ppp</div>';
      //   return container;
      // },
    });
    // 开始配置坐标轴
    chart.axis(false);
    chart.legend(false);

    chart
      .point()
      .position('x*y')
      .color('#1890ff')
      .size('value')
      .shape('triangle')
      .tooltip('value')
      .label('value', {
        offset: 0, // 文本距离图形的距离
        content: (obj, item) => {
          // console.log(points);
          const group = new G.Group({});
          group.addShape({
            type: 'text',
            attrs: {
              x: obj.x,
              y: obj.y,
              text: obj.value,
              fill: '#f45',
            },
          });
          return group;
        },
      });
    chart.interaction('element-active');

    chart.render();
  },
};
</script>
