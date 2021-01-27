<template>
  <div class="bubble-wrap" id="bubbleWrap"></div>
</template>
<script>
import { registerShape } from '@antv/g2';
import DataSet from '@antv/data-set';
import * as d3 from 'd3';
export default {
  mounted() {
    const data = [
      { size: 8, name: 'BE', country: 'Belgium' },
      { size: 18, name: 'DE', country: 'Germany' },
      { size: 10, name: 'FI', country: 'Finland' },
      { size: 15, name: 'NL', country: 'Netherlands' },
      { size: 20, name: 'SE', country: 'Sweden' },
      { size: 88, name: 'dd', country: 'Netherlands' },
      { size: 48, name: 'gg', country: 'Sweden' },
    ];

    var pack = d3.pack().size([1920, 500]);

    var root = d3
      .hierarchy({
        children: data,
      })
      .sum((d) => {
        return d.size;
      });
    root.sort((a, b) => b.value - a.value);
    //  root.sort((a, b) => a.value-b.value);
    // root.sort((a, b) => Math.random() * 2 - 1);

    var nodes = pack(root)
      .leaves()
      .map((d, i) => {
        return {
          x: d.x,
          y: d.y,
          r: 0,
          radius: d.r,
          value: d.value,
          data: d.data,
        };
      });

    registerShape('point', 'triangle', {
      // 2. 绘制
      draw(cfg, group) {
        // const points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
        // console.log(cfg);
        const polygon = group.addShape('circle', {
          attrs: {
            ...cfg.defaultStyle,
            x: cfg.data.x * 0.85,
            y: cfg.data.y * 0.85,
            r: cfg.data.radius * 0.75,
          },
        });
        return polygon;
      },
    });

    const chart = new this.Chart({
      container: 'bubbleWrap',
      autoFit: true,
      height: 500,
      padding: [20, 20, 50, 80],
    });

    chart.data(nodes);

    chart.coordinate('polar', { radius: 0.65 });
    // 开始配置坐标轴
    chart.axis(false);
    chart.legend(false);
    chart
      .point()
      .position('x*y')
      .color('#1890ff')
      .size('value', [10, 40])
      .shape('triangle')
    chart.interaction('element-active');

    chart.render();
  },
};
</script>
