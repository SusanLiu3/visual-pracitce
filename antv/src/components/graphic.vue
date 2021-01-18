<template>
  <div id="graphicWrap"></div>
</template>
<script>
export default {
  mounted() {
    const data = [
      { month: '1991', temperature: 5, city: '北京' },
      { month: '1992', temperature: 10, city: '北京' },
      { month: '1993', temperature: 8, city: '南京' },
      { month: '1994', temperature: 14, city: '南京' },
    ];

    let chart = new this.Chart({
      container: 'graphicWrap',
      width: 400,
      height: 200,
      theme:{
        styleSheet:{
          backgroundColor:'#f45'
        }
      }
    });

    chart.scale('temperature', {
      nice: true,
    });

    chart.axis('temperature', {
      title: {
        style: {
          fill: '#f45',
          shadowColor: 'hsla(360,100%,0%,.6)',
          shadowBlur: 4,
          shadowOffsetX: 2,
        },
      },
      position: 'left',
      line: {
        style: {
          stroke: 'green',
        },
      },
      tickLine: {
        length: 8,
        style: {
          stroke: 'green',
        },
      },
      label: {
        style: {
          fill: 'pink',
          autoEllipsis: true,
        },
      },
      grid: {
        line: {
          type: 'circle',
          style: {
            stroke: 'yellow',
          },
        },
        alternateColor: 'hsla(0,50%,80%,.2)',
      },
    });

    chart.source(data);
    chart
      .point()
      .position('month*temperature')
      .color('city', ['red', 'blue', 'yellow'])
      .shape('city', ['triangle', 'diamond'])
      .size('city', [10, 20])
      .adjust([{ type: 'dodge' }]);
    chart.legend({
      title: {
        strokeStyle: '#f45',
      },
      selectedMode: 'single',
      position: 'right-bottom',
      hoverable: false,
    });
    chart.render();
    let scaleConf = chart.getScaleByField('month');
    console.log(scaleConf, scaleConf.ticks, scaleConf.scale('1993'));
  },
};
</script>
<style scoped>
#graphicWrap {
  margin: 20px;
}
</style>
